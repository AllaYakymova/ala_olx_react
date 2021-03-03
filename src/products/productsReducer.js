import { createReducer } from '@reduxjs/toolkit';
import actionsWithProducts from './actions';
import { defaultOptionPerPage } from '../utils';

const initialState = {
  productsList: [],
  myProducts: [],
  page: 1,
  perPage: defaultOptionPerPage,
  origins: [],
  totalOrigins: [],
  totalItems: null,
  priceInterval: [],
  minPrice: null,
  maxPrice: null,
  isEditable: false,
  status: 'idle',
  error: null,
};

const productsReducer = createReducer(initialState, {
  [actionsWithProducts.fetchTotalOrigins.start]: (state) => {
    state.status = 'loading';
  },
  [actionsWithProducts.fetchTotalOrigins.success]: (state, action) => {
    state.status = 'succeeded';
    state.totalOrigins = action.payload.items;
  },
  [actionsWithProducts.fetchTotalOrigins.error]: (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  },
  [actionsWithProducts.fetchFilteredProducts.start]: (state) => {
    state.status = 'loading';
  },
  [actionsWithProducts.fetchFilteredProducts.success]: (state, action) => {
    const { items, totalItems } = action.payload;
    state.status = 'succeeded';
    state.totalItems = totalItems;
    state.isEditable ? state.myProducts = items : state.productsList = items;
  },
  [actionsWithProducts.fetchFilteredProducts.error]: (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  },
  [actionsWithProducts.setPriceInterval.start]: (state) => {
    state.status = 'loading';
  },
  [actionsWithProducts.setPriceInterval.success]: (state, action) => {
    state.status = 'succeeded';
    const priceArr = action.payload.items.map(item => item.price).sort((a, b) => a - b);
    state.priceInterval = [priceArr[0], priceArr[priceArr.length - 1]];
  },
  [actionsWithProducts.setPriceInterval.error]: (state, action) => {
    state.status = 'failed';
    state.error = action.payload;
  },
  [actionsWithProducts.chosenOrigins]: (state, action) => {
    state.origins = action.payload;
  },
  [actionsWithProducts.setProductsPerPage]: (state, action) => {
    state.perPage = action.payload;
  },
  [actionsWithProducts.setCurrentPage]: (state, action) => {
    state.page = action.payload;
  },
  [actionsWithProducts.setSelectedMinPrice]: (state, action) => {
    state.minPrice = action.payload;
  },
  [actionsWithProducts.setSelectedMaxPrice]: (state, action) => {
    state.maxPrice = action.payload;
  },
  [actionsWithProducts.setEditable]: (state, action) => {
    state.isEditable = action.payload;
  },
  [actionsWithProducts.setQueryParams]: (state, action) => {
    const { ...params } = action.payload;
    state.page = params.page ? +params.page : 1;
    state.perPage = params.perPage ? +params.perPage : defaultOptionPerPage;
    state.origins = params.origins ? params.origins.split(',') : [];
    state.minPrice = params.minPrice ? +params.minPrice : null;
    state.maxPrice = params.maxPrice ? +params.maxPrice : null;
  },
});

export default productsReducer;
