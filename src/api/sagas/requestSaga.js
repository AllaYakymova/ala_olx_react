import { call, put, takeEvery } from '@redux-saga/core/effects';
import client from '../client';

export const apiRequestAction = ({ baseUrl, query, data, method, isEditable, actionType }) => {
  return {
    request: {
      baseUrl: baseUrl,
      query: query,
      data: data,
      config: {
        method: method || 'GET',
        isEditable: isEditable,
        token: process.env.REACT_APP_ACCESS_TOKEN,
      },
    },
    dispatchAction: actionType,
  };
};

export function* apiRequestHandler(requestAction) {
  const { request, dispatchAction } = requestAction;
  try {
    yield put(dispatchAction.start());
    const response = yield call(() => client({
      baseURL: request.baseUrl,
      query: request.query,
      isEditable: request.config.isEditable,
      token: request.config.token,
      method: request.config.method,
      data: request.data,
    }));
    yield put(dispatchAction.success(response));
  } catch (e) {
    yield put(dispatchAction.error(e.message));
  }
}

export function* watchers(API) {
  yield takeEvery(API, apiRequestHandler);
}
