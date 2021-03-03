import { configureStore } from '@reduxjs/toolkit';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './rootReducer';
import { routerMiddleware } from 'connected-react-router';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

function configStore(history: History) {
    return  configureStore({
    reducer: createRootReducer(history),
    middleware: [routerMiddleware(history), sagaMiddleware],
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export const store = configStore(history);

sagaMiddleware.run(rootSaga);



