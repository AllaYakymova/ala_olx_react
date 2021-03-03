import React, { useCallback } from 'react';
import Button from '../assets/Button';
import { useDispatch, useSelector } from 'react-redux';
import actionsWithProducts from '../../products/actions';
import { getCreateModalOpen } from '../../ui/uiSelectors';
import ModalManageProduct from '../Modal';
import { Link } from 'react-router-dom';
import routes from '../../routers/routes';
import PropTypes from 'prop-types';
import actionsUI from '../../ui/actions';

const AdminDashboard = ({ isBoardOpen = false, closeAdminHandler = () => {} }) => {
  const dispatch = useDispatch();
  const createModalIsOpen = useSelector(getCreateModalOpen);

  const modalHandler = useCallback(() => dispatch(actionsUI.isCreateModalOpen()), [dispatch]);

  const myProductsHandler = useCallback(() => {
    dispatch(actionsWithProducts.setEditable(true));
    dispatch(actionsWithProducts.setCurrentPage(1));
    closeAdminHandler(false);
  }, [dispatch, closeAdminHandler]);

  const myOrdersHandler = useCallback(() => closeAdminHandler(false), [closeAdminHandler]);

  const modal = (createModalIsOpen && <ModalManageProduct/>);

  return (
    <aside className={isBoardOpen ? 'admin__dashboard admin__dashboard-open' : 'admin__dashboard'}>
      <div className='filter__wrap'>
        <Button text='Create new product' isMain width15 onClick={modalHandler}/>
      </div>
      <div className='filter__wrap'>
        <Link to={routes.ADMIN.DEFAULT_PATH}>
          <Button text='My products' isMain width15 onClick={myProductsHandler}/>
        </Link>
      </div>
      <div className='filter__wrap'>
        <Link to={routes.ORDERS.DEFAULT_PATH}>
          <Button text='My orders' isMain width15 onClick={myOrdersHandler}/>
        </Link>
      </div>
      {modal}
    </aside>
  );
};

AdminDashboard.propTypes = {
  isBoardOpen: PropTypes.bool,
  modalIsOpen: PropTypes.bool,
  closeAdminHandler: PropTypes.func,
};

export default AdminDashboard;
