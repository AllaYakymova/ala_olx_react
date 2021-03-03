import { call, cancel, debounce, delay, put, select, takeEvery } from '@redux-saga/core/effects';
import actionsWithProducts from './actions';
import {
  getIsEditable,
  getOrigins,
  getPage,
  getSelectedMaxPrice,
  getSelectedMinPrice,
  getTotalItems,
  getTotalOrigins,
  productsPerPage,
} from './productsSelectors';
import { getLocation, routerState } from '../routers/router/routerSelectors';
import routes from '../routers/routes';
import { push } from 'connected-react-router';
import { apiCreator } from '../api/apiCreator';
import { apiRequestAction, apiRequestHandler } from '../api/sagas/requestSaga';
import API from "../core/redux/constants";

function* onFetchTotalOrigins() {
  const totalOrigins = yield select(getTotalOrigins);

  const fetchTotalOriginsRequest = apiRequestAction({
    baseUrl: `${API.URLS.PRODUCTS}-origins`,
    isEditable: false,
    actionType: actionsWithProducts.fetchTotalOrigins,
  });

  if (!totalOrigins.length) {
    yield call(apiRequestHandler, fetchTotalOriginsRequest);
  }
}

function* onGetPriceInterval(totalItems, origins, isEditable) {
  const params = yield call(apiCreator, {
    page: 1,
    perPage: totalItems,
    origins,
    minPrice: null,
    maxPrice: null,
    isEditable,
  });

  const setPriceIntervalRequest = apiRequestAction({
    baseUrl: `${API.URLS.PRODUCTS}/?`,
    query: params,
    isEditable: isEditable,
    actionType: actionsWithProducts.setPriceInterval,
  });
  yield call(apiRequestHandler, setPriceIntervalRequest);
}

function* setRoute(page, perPage, origins, minPrice, maxPrice, isEditable) {
  const params = yield call(apiCreator, { page, perPage, origins, minPrice, maxPrice, isEditable });
  if (!isEditable) {
    yield put(push(`${routes.PRODUCTS.DEFAULT_PATH}?${params}`));
  } else {
    yield put(push(`${routes.ADMIN.DEFAULT_PATH}?${params}`));
  }
}

function* onFetchFilteredProducts() {
  try {
    const page = yield select(getPage);
    const perPage = yield select(productsPerPage);
    const origins = yield select(getOrigins);
    const minPrice = yield select(getSelectedMinPrice);
    const maxPrice = yield select(getSelectedMaxPrice);
    const isEditable = yield select(getIsEditable);
    const location = yield select(getLocation);
    const router = yield select(routerState);
    const params = yield call(apiCreator, { page, perPage, origins, minPrice, maxPrice, isEditable });

    const fetchFilteredProductsRequest = apiRequestAction({
      baseUrl: `${API.URLS.PRODUCTS}/?`,
      query: params,
      isEditable: isEditable,
      actionType: actionsWithProducts.fetchFilteredProducts,
    });

    const prevTotalItems = yield select(getTotalItems);
    if (`?${params}` === location.search && router.action !== 'POP') {
      yield cancel();
    } else {
      yield call(apiRequestHandler, fetchFilteredProductsRequest);
      const newTotalItems = yield select(getTotalItems);
      if (prevTotalItems !== newTotalItems) {
        yield delay(300);
        yield call(onGetPriceInterval, newTotalItems, origins, isEditable);
      }
      yield call(setRoute, page, perPage, origins, minPrice, maxPrice, isEditable, location);
    }
  } catch (e) {
    console.error(e);
  }
}


export function* watchProductsSaga() {
  yield takeEvery(actionsWithProducts.fetchTotalOrigins.request, onFetchTotalOrigins);
  yield debounce(500, actionsWithProducts.fetchFilteredProducts.request, onFetchFilteredProducts);
}
