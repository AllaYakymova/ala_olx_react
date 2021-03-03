import React from 'react';
import CardBuilder from '../CardBuilder';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import rotes from '../../../routers/routes';

const ShortCard = ({ product, buyBtn, ...props }) => {

  return (
    <Link to={rotes.PRODUCTS.createPath(product.id)}>
      <CardBuilder
        isShort
        buyBtn
        fav
        addFlag
        iconColor="white"
        product={product}
        {...props}
      />
    </Link>
  );
};

ShortCard.propTypes = {
  product: PropTypes.shape({
    isEditable: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }),
};

export default ShortCard;
