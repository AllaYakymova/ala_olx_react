import { createAction } from '@reduxjs/toolkit';
import API from '../../core/redux/constants';

const actionsWithCart = {
  addProductToCart: createAction(API.CART.ACTIONS.ADD_PRODUCT),
  reduceProductInCart: createAction(API.CART.ACTIONS.REDUCE_PRODUCT_AMOUNT),
  removeProductFromCart: createAction(API.CART.ACTIONS.REMOVE_PRODUCT),
  clearCart: createAction(API.CART.ACTIONS.CLEAR_CART),
};

export default actionsWithCart;
