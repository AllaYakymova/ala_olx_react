import { createReducer } from '@reduxjs/toolkit';
import actionsUI from './actions';

const initialState = {
  isCreateModalOpen: false,
  isEditModalOpen: false
};

const uiReducer = createReducer(initialState, {
  [actionsUI.isCreateModalOpen]: (state) => {
    state.isCreateModalOpen = !state.isCreateModalOpen;
  },
  [actionsUI.isEditModalOpen]: (state) => {
    state.isEditModalOpen = !state.isEditModalOpen;
  },
});

export default uiReducer;
