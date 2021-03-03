import { createSelector } from '@reduxjs/toolkit';

const productsState = state => state.products;

export const getProductsCollection = createSelector(
  productsState,
  products => products.productsList
);

export const getMyProducts = createSelector(
  productsState,
  products => products.myProducts
);

export const getTotalItems = createSelector(
  productsState,
  products => products.totalItems
);

export const getTotalOrigins = createSelector(
  productsState,
  products => products.totalOrigins
);

export const getOrigins = createSelector(
  productsState,
  products => products.origins
);

export const getPriceInterval = createSelector(
  productsState,
  products => products.priceInterval
);

export const getPage = createSelector(
  productsState,
  products => products.page
);

export const productsPerPage = createSelector(
  productsState,
  products => products.perPage
);

export const getSelectedMinPrice = createSelector(
  productsState,
  products => products.minPrice
);

export const getSelectedMaxPrice = createSelector(
  productsState,
  products => products.maxPrice
);

export const getIsEditable = createSelector(
  productsState,
  products => products.isEditable
);




