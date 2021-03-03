import { createAction } from '@reduxjs/toolkit';
import API from '../core/redux/constants';
import { actionCreator } from '../core/redux/actionCreator';


const actionsWithProducts = {
  fetchTotalOrigins: actionCreator(API.PRODUCTS.ACTIONS.FETCH_ORIGINS),
  fetchFilteredProducts: actionCreator(API.PRODUCTS.ACTIONS.FETCH_FILTERED_PRODUCTS),
  setPriceInterval: actionCreator(API.PRODUCTS.ACTIONS.SET_PRICE_INTERVAL),
  chosenOrigins: createAction(API.PRODUCTS.ACTIONS.CHOSEN_ORIGINS),
  setProductsPerPage: createAction(API.PRODUCTS.ACTIONS.PRODUCTS_PER_PAGE),
  setCurrentPage: createAction(API.PRODUCTS.ACTIONS.CURRENT_PAGE),
  setSelectedMinPrice: createAction(API.PRODUCTS.ACTIONS.SELECTED_MIN_PRICE),
  setSelectedMaxPrice: createAction(API.PRODUCTS.ACTIONS.SELECTED_MAX_PRICE),
  setEditable: createAction(API.PRODUCTS.ACTIONS.IS_EDITABLE),
  setQueryParams: createAction(API.PRODUCTS.ACTIONS.QUERY_PARAMS)
};

export default actionsWithProducts;
