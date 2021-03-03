import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ShortCard from '../../components/ProductCards/ShortCard';
import PropTypes from 'prop-types';
import { productShape } from '../../utils/propTypesShapes';
import { getPage, getProductsCollection, productsPerPage } from '../productsSelectors';
import actionsWithProducts from '../actions';
import { getQuery, getSearch } from '../../routers/router/routerSelectors';


const ProductsListTotal = ({ ...props }) => {
  const products = useSelector(getProductsCollection);
  const page = useSelector(getPage);
  const perPage = useSelector(productsPerPage);
  const search = useSelector(getSearch);
  const dispatch = useDispatch();
  const locationQuery = useSelector(getQuery);

  useEffect(() => {
    dispatch(actionsWithProducts.setEditable(false));
    if (search && search !== `?page=${page}&perPage=${perPage}`) {
      dispatch(actionsWithProducts.setQueryParams(locationQuery));  // refresh data in the states from location.query after reloading
    }
    dispatch(actionsWithProducts.fetchTotalOrigins.request());
    dispatch(actionsWithProducts.fetchFilteredProducts.request());
  }, [dispatch]);

  const list = products.map((product) => (
    <li key={product.id} className='card_mb'>
      <ShortCard product={product} buyBtn {...props}/>
    </li>));

  return (
    <div className="cards-wrap_paginated">
      <ul className="cards-wrap">
        {list}
      </ul>
    </div>
  );
};

ProductsListTotal.propTypes = {
  products: PropTypes.arrayOf({
    product: productShape,
  }),
  page: PropTypes.number,
  perPage: PropTypes.number,
};

export default ProductsListTotal;
