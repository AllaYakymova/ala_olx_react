import { createReducer } from '@reduxjs/toolkit';
import actionsWithCart from './actions';
import actionsAdminWithProduct from '../../admin/actions';

const initialState = {
  cartItems: [],
  cartSum: 0,
  cartProducts: [],
};

const cartReducer = createReducer(initialState, {
  [actionsWithCart.addProductToCart]: (state, action) => {
    const { item, sum } = action.payload;
    state.cartItems = [...state.cartItems, item];
    state.cartSum = state.cartSum + sum;
  },
  [actionsAdminWithProduct.getProductById.start]: (state) => {
    state.status = 'loading';
  },
  [actionsAdminWithProduct.getProductById.success]: (state, action) => {
    state.status = 'succeeded';
    if (state.cartProducts.filter(prod => prod.id === action.payload.id).length === 0) {
      state.cartProducts = [...state.cartProducts, action.payload];
    } else {
      state.cartProducts = [...state.cartProducts];
    }
  },
  [actionsAdminWithProduct.getProductById.error]: (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  },
  [actionsWithCart.reduceProductInCart]: (state, action) => {
    const { cart, sum, removedProdId } = action.payload;
    state.cartItems = cart;
    if (!cart.includes(removedProdId)) {
      state.cartProducts = state.cartProducts.filter(item => item.id !== removedProdId);
    }
    state.cartSum = state.cartSum - sum;
  },
  [actionsWithCart.removeProductFromCart]: (state, action) => {
    const { cart, sum, cartProds } = action.payload;
    state.cartItems = cart;
    state.cartSum = state.cartSum - sum;
    state.cartProducts = cartProds;
  },
  [actionsWithCart.clearCart]: (state) => {
    state.cartItems = [];
    state.cartProducts = [];
    state.cartSum = null;
  },
});

export default cartReducer;
