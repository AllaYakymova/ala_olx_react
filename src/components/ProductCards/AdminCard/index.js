import React, { useCallback } from 'react';
import CardBuilder from '../CardBuilder';
import PropTypes from 'prop-types';

const AdminCard = ({ product, modalHandler = () => {}, ...props }) => {

  const handler = useCallback(() => {
    modalHandler(product.id, product.name, product.price, product.origin);
  }, [product]);

  return (
    <>
      <CardBuilder
        isAdmin
        addFlag
        onClick={handler}
        product={product}
        {...props}
      />
    </>
  );
};

AdminCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
  }),
  onClick: PropTypes.func,
};

export default AdminCard;
