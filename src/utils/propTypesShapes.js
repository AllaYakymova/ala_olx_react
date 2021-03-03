import PropTypes from 'prop-types';

export const productShape = {
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

export const productNickShape = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
};

export const OrderPiecesShape = {
  count: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  productShape,
};

export const OrderShape = {
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  pieces: PropTypes.arrayOf(
    OrderPiecesShape,
  ),
};
