import React, { useMemo } from 'react';
import DetailCard from '../../components/ProductCards/DetailCard/';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getProductsCollection } from '../../products/productsSelectors';

const ProductPage = ({ match = {}, ...props }) => {
  const products = useSelector(getProductsCollection);

  const {
    params: { productId },
  } = match;

  const memoProduct = useMemo(() => products.find(item => item.id === productId), [products, productId]);

  return (
    <div className="content container">
      <h3 className="page-title">Details of product</h3>
      <DetailCard product={memoProduct} {...props}/>
    </div>
  );
};

ProductPage.propTypes = {
  match: PropTypes.object,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      origin: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
    }),
  ),
};

export default ProductPage;
