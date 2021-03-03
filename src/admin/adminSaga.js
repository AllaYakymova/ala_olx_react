import {call, takeEvery} from '@redux-saga/core/effects';
import actionsAdminWithProduct from './actions';
import {apiRequestAction, apiRequestHandler} from '../api/sagas/requestSaga';
import API from "../core/redux/constants";


function* onAddMyProduct(action) {
    const addMyProductRequest = apiRequestAction({
        baseUrl: API.URLS.PRODUCTS,
        data: {product: action.payload},
        method: 'POST',
        isEditable: true,
        token: process.env.REACT_APP_ACCESS_TOKEN,
        actionType: actionsAdminWithProduct.addMyProduct,
    });
    yield call(apiRequestHandler, addMyProductRequest);
}

function* onEditMyProduct(action) {
    const editMyProductRequest = apiRequestAction({
        baseUrl: `${API.URLS.PRODUCTS}/${action.payload.id}`,
        data: {product: action.payload.values},
        method: 'PATCH',
        isEditable: true,
        token: process.env.REACT_APP_ACCESS_TOKEN,
        actionType: actionsAdminWithProduct.editMyProduct,
    });
    yield call(apiRequestHandler, editMyProductRequest);
}

function* onDeleteMyProduct(action) {
    const deleteMyProductRequest = apiRequestAction({
        baseUrl: `${API.URLS.PRODUCTS}/${action.payload}`,
        isEditable: true,
        method: 'DELETE',
        actionType: actionsAdminWithProduct.deleteMyProduct,
    });
    yield call(apiRequestHandler, deleteMyProductRequest);
}

function* onGetProductById(action) {
    const getMyProductRequest = apiRequestAction({
        baseUrl: `${API.URLS.PRODUCTS}/${action.payload}`,
        isEditable: true,
        actionType: actionsAdminWithProduct.getProductById,
    });
    yield call(apiRequestHandler, getMyProductRequest);
}

export function* watchAdminSaga() {
    yield takeEvery(actionsAdminWithProduct.addMyProduct.request, onAddMyProduct);
    yield takeEvery(actionsAdminWithProduct.editMyProduct.request, onEditMyProduct);
    yield takeEvery(actionsAdminWithProduct.getProductById.request, onGetProductById);
    yield takeEvery(actionsAdminWithProduct.deleteMyProduct.request, onDeleteMyProduct);
}
