import React from 'react';
import Cart from '../../components/Cart/';
import { Message } from '../../components/assets/Messages/';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getCart } from '../../components/Cart/cartSelectors';


const CartPage = ({ ...props }) => {
  const cart = useSelector(getCart);

  let page = cart.length !== 0 ? <Cart {...props}/> : <Message isButton {...props}/>;

  return <div className="cards-wrap cards-wrap_cart container">{page}</div>;
};
CartPage.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.string),
};

export default CartPage;
