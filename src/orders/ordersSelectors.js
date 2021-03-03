import { createSelector } from '@reduxjs/toolkit';

const ordersState = state => state.orders;

export const getOrder = createSelector(
  state => state.cart.cartItems,
  (cartItems) => {
    let pieces = [];
    let repeat = [];
    cartItems.forEach(item => {
      if (repeat.includes(item)) return;
      const count = cartItems.filter(i => i === item).length;
      if (count > 1) repeat = [...repeat, item];
      pieces = [...pieces, { productId: item, count: count }];
      return { productId: item, count: count };
    });
    return {
      pieces: pieces,
    };
  },
);

export const getOrders = createSelector(
  ordersState,
  orders => orders.orders,
);

export const getOrderById = createSelector(
  ordersState,
  orders => orders.order,
);
