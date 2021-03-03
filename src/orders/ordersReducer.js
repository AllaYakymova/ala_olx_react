import { createReducer } from '@reduxjs/toolkit';
import actionsWithOrders from './actions';

const initialState = {
  orders: [],
  order: null,
  status: 'idle',
  error: null,
};

const ordersReducer = createReducer(initialState, {
  [actionsWithOrders.sentOrder.start]: (state) => {
    state.status = 'order sending';
  },
  [actionsWithOrders.sentOrder.success]: (state) => {
    state.status = 'successfully sent';
  },
  [actionsWithOrders.sentOrder.error]: (state, action) => {
    state.status = 'order failed';
    state.error = action.payload;
  },
  [actionsWithOrders.getOrders.start]: (state) => {
    state.status = 'loading';
  },
  [actionsWithOrders.getOrders.success]: (state, action) => {
    state.status = 'succeeded';
    state.orders = action.payload.items;
  },
  [actionsWithOrders.getOrders.error]: (state, action) => {
    state.status = 'failed to fetch orders';
    state.error = action.payload;
  },
  [actionsWithOrders.getOrderById.start]: (state) => {
    state.status = 'loading';
  },
  [actionsWithOrders.getOrderById.success]: (state, action) => {
    state.status = 'succeeded';
    state.order = action.payload;
  },
  [actionsWithOrders.getOrderById.error]: (state, action) => {
    state.status = 'failed to fetch order';
    state.error = action.payload;
  },
  [actionsWithOrders.clearOrderInfo]: (state) => {
    state.order = null
  }
});

export default ordersReducer
