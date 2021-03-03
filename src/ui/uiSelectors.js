import { createSelector } from '@reduxjs/toolkit';

const adminState = (state) => state.ui;

export const getCreateModalOpen = createSelector(
  adminState,
  (adminProducts) => adminProducts.isCreateModalOpen,
);

export const getEditModalOpen = createSelector(
  adminState,
  (adminProducts) => adminProducts.isEditModalOpen,
);
