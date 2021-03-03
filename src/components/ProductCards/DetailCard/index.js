import React from 'react';
import CardBuilder from '../CardBuilder';
import PropTypes from 'prop-types';

const DetailCard = ({ product, ...props }) => {
  return (
    <>
      <CardBuilder isDetail buyBtn fav addFlag image product={product} {...props}/>
    </>
  );
};

DetailCard.propTypes = {
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

export default DetailCard;
