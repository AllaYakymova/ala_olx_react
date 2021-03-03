import { combineReducers } from '@reduxjs/toolkit';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import productsReducer from '../products/productsReducer';
import cartReducer from '../components/Cart/cartReducer';
import ordersReducer from '../orders/ordersReducer';
import adminReducer from '../admin/adminReducer';
import uiReducer from '../ui/uiReducer';

const createRootReducer = (history: History<any>) => combineReducers({
  router: connectRouter(history),
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  admin: adminReducer,
  ui: uiReducer
});

export default createRootReducer
