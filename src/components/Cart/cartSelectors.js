import { createSelector } from '@reduxjs/toolkit';

const cartState = state => state.cart;

export const getCart = createSelector(
  cartState,
  cart => cart.cartItems,
);

export const getCartSum = createSelector(
  cartState,
  cart => cart.cartSum,
);

export const getCartProducts = createSelector(
  cartState,
  cart => cart.cartProducts,
);

// amount of the product in cart
export const getCartProductCount = (product) => createSelector(
  state => state.cart.cartItems,
  (cartItems) => {
    return cartItems.filter(item => item === product.id).length;
  },
);

// remove product of the cart
export const removeProd = (product) => createSelector(
  state => state.cart.cartItems,
  state => state.cart.cartProducts,
  (cartItems, cartProducts) => {
    const cartProdsReduced = cartProducts.filter(item => item.id !== product.id);
    const cartNew = cartItems.filter(item => item !== product.id);
    const sumNew = cartItems.filter(item => item === product.id).length * product.price;
    return {cartNew, sumNew, cartProdsReduced};
  });

