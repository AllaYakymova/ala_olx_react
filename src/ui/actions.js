import { createAction } from '@reduxjs/toolkit';
import API from '../core/redux/constants';

const actionsUI = {
  isCreateModalOpen: createAction(API.UI.OPEN_CREATE_MODAL),
  isEditModalOpen: createAction(API.UI.OPEN_EDIT_MODAL)
};

export default actionsUI
