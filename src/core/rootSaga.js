import { watchProductsSaga } from '../products/productsSaga';
import { all } from '@redux-saga/core/effects';
import { watchAdminSaga } from '../admin/adminSaga';
import { watchOrdersSaga } from '../orders/ordersSaga';

export default function* rootSaga() {
  yield all([
    watchProductsSaga(),
    watchAdminSaga(),
    watchOrdersSaga()
  ]);
}
