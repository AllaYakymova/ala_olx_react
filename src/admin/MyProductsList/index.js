import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { productShape } from '../../utils/propTypesShapes';
import {
  getIsEditable,
  getMyProducts,
  getPage,
  getTotalOrigins,
  productsPerPage,
} from '../../products/productsSelectors';
import { getEditModalOpen } from '../../ui/uiSelectors';
import ModalManageProduct from '../../components/Modal';
import AdminCard from '../../components/ProductCards/AdminCard/index';
import actionsWithProducts from '../../products/actions';
import actionsUI from '../../ui/actions';
import { getQuery, getSearch } from '../../routers/router/routerSelectors';

const MyProductsList = ({ ...props }) => {
  const myProducts = useSelector(getMyProducts);
  const page = useSelector(getPage);
  const perPage = useSelector(productsPerPage);
  const totalOrigins = useSelector(getTotalOrigins);
  const isEditable = useSelector(getIsEditable);
  const editModalIsOpen = useSelector(getEditModalOpen);
  const dispatch = useDispatch();
  const [editProduct, setEditProduct] = useState([]);
  const locationQuery = useSelector(getQuery);
  const search = useSelector(getSearch);

  useEffect(() => {
    if (!isEditable) {
      dispatch(actionsWithProducts.setEditable(true));
    }
    if (!totalOrigins.length) {
      dispatch(actionsWithProducts.fetchTotalOrigins.request());
    }
    if (search && search !== `?page=${page}&perPage=${perPage}`) {
      dispatch(actionsWithProducts.setQueryParams(locationQuery));
    }
    dispatch(actionsWithProducts.fetchFilteredProducts.request());
  }, [dispatch]);

  const modal = (editModalIsOpen && <ModalManageProduct product={editProduct}/>);

  const editModalHandler = useCallback((id, name, price, origin) => {
    dispatch(actionsUI.isEditModalOpen());
    setEditProduct({ id, name, price, origin })
  }, [dispatch, setEditProduct]);

  const list = (myProducts.map((product) => (<li key={product.id} className='card_mb'>
    <AdminCard
      modalHandler={(id, name, price, origin) => {
        editModalHandler(id, name, price, origin)
      }}
      product={product}
      {...props} />
  </li>)));

  return (
    <div className="cards-wrap_paginated">
      <ul className="cards-wrap">
        {list}
      </ul>
      {modal}
    </div>
  );
};

MyProductsList.propTypes = {
  myProducts: PropTypes.arrayOf(
    productShape,
  ),
  page: PropTypes.number,
  perPage: PropTypes.number,
  totalItems: PropTypes.number,
  origins: PropTypes.arrayOf(PropTypes.string),
  isEditable: PropTypes.bool,
  modalIsOpen: PropTypes.bool,
  search: PropTypes.string,
};

export default MyProductsList;
