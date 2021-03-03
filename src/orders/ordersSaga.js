import { call, takeEvery } from '@redux-saga/core/effects';
import actionsWithOrders from './actions';
import { apiRequestAction, apiRequestHandler } from '../api/sagas/requestSaga';

function* onSentOrder(action) {
  const sentOrdersRequest = apiRequestAction({
    baseUrl: process.env.REACT_APP_ORDERS,
    data: { order: action.payload },
    method: 'POST',
    isEditable: true,
    actionType: actionsWithOrders.sentOrder,
  });
  yield call(apiRequestHandler, sentOrdersRequest);
}

const getOrdersRequest = apiRequestAction({
  baseUrl: process.env.REACT_APP_ORDERS,
  isEditable: true,
  actionType: actionsWithOrders.getOrders,
});

function* onGetOrderById(action) {
  const getOrderByIdRequest = apiRequestAction({
    baseUrl: `${process.env.REACT_APP_ORDERS}/${action.payload}`,
    isEditable: true,
    actionType: actionsWithOrders.getOrderById,
  });
  yield call(apiRequestHandler, getOrderByIdRequest);
}


export function* watchOrdersSaga() {
  yield takeEvery(actionsWithOrders.sentOrder.request, onSentOrder);
  yield takeEvery(actionsWithOrders.getOrders.request, apiRequestHandler, getOrdersRequest);
  yield takeEvery(actionsWithOrders.getOrderById.request, onGetOrderById);
}
