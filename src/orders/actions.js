import { createAction } from '@reduxjs/toolkit';
import API from '../core/redux/constants';
import { actionCreator } from '../core/redux/actionCreator';

const actionsWithOrders = {
  sentOrder: actionCreator( API.ORDERS.ACTIONS.SEND_ORDER),
  getOrders: actionCreator(API.ORDERS.ACTIONS.GET_ORDERS),
  getOrderById: actionCreator(API.ORDERS.ACTIONS.GET_ORDER_BY_ID),
  clearOrderInfo: createAction(API.ORDERS.ACTIONS.CLEAR_ORDER_DETAILS)
};

export default actionsWithOrders
