import API from '../core/redux/constants';
import { actionCreator } from '../core/redux/actionCreator';

const actionsAdminWithProduct = {
  addMyProduct: actionCreator(API.ADMIN.ACTIONS.ADD_PRODUCT),
  editMyProduct: actionCreator(API.ADMIN.ACTIONS.EDIT_PRODUCT),
  deleteMyProduct: actionCreator(API.ADMIN.ACTIONS.DELETE_PRODUCT),
  getProductById: actionCreator(API.ADMIN.ACTIONS.GET_PRODUCT_BY_ID),
};

export default actionsAdminWithProduct;
