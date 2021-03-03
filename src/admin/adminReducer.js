import { createReducer } from '@reduxjs/toolkit';
import actionsAdminWithProduct from './actions';

const initialState = {
  error: null,
  status: '',
};

const adminReducer = createReducer(initialState, {
  [actionsAdminWithProduct.addMyProduct.start]: (state) => {
    state.status = 'Product is adding';
  },
  [actionsAdminWithProduct.addMyProduct.success]: (state) => {
    state.status = 'Product added successfully';
  },
  [actionsAdminWithProduct.addMyProduct.error]: (state, action) => {
    state.status = 'failed to add product';
    state.error = action.payload;
  },
  [actionsAdminWithProduct.editMyProduct.start]: (state) => {
    state.status = 'Edits are sending';
  },
  [actionsAdminWithProduct.editMyProduct.success]: (state) => {
    state.status = 'Edits succeeded';
  },
  [actionsAdminWithProduct.editMyProduct.error]: (state, action) => {
    state.status = 'Edits failed';
    state.error = action.payload;
  },
  [actionsAdminWithProduct.deleteMyProduct.start]: (state) => {
    state.status = 'Product is deleting';
  },
  [actionsAdminWithProduct.deleteMyProduct.success]: (state) => {
    state.status = 'Product is deleted';
  },
  [actionsAdminWithProduct.deleteMyProduct.error]: (state, action) => {
    state.status = 'Edits failed';
    state.error = action.payload;
  },
});

export default adminReducer;



