import React, { useCallback, useMemo } from 'react';
import CartCard from '../ProductCards/CartCard';
import Button from '../assets/Button';
import { currency } from '../../utils';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import routes from '../../routers/routes';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts, getCartSum } from '../Cart/cartSelectors';
import { getOrder } from '../../orders/ordersSelectors';
import actionsWithCart from './actions';
import actionsWithOrders from '../../orders/actions';
import { productShape } from '../../utils/propTypesShapes';

const Cart = ({ ...props }) => {
  const cartSum = useSelector(getCartSum);
  const cartProds = useSelector(getCartProducts);
  const order = useSelector(getOrder);
  const dispatch = useDispatch();

  const list = cartProds.map((product) => (
    <li key={product.id} className="cart__item"><CartCard product={product} {...props}/></li>));
  const total = useMemo(() => <span className="card__price card__price-cart">{cartSum} {currency}</span>, [cartSum]);
  const namePrice = useMemo(() => <p className="card__text card__text-cart mt-10 mb-10">total: {total}</p>, [total]);

  const ordered = useCallback(async () => {
    await dispatch(actionsWithOrders.sentOrder.request(order));
    dispatch(actionsWithCart.clearCart());
  }, [dispatch, order]);

  return (
    <>
      <h3 className="page-title">Your order</h3>
      <div className="cart">
        <ul className="cart__items">{list}</ul>
        {namePrice}
        <Link to={routes.CART.AFTER_ORDERED_MESSAGE}>
          <Button isMain text="Create order" width13 onClick={ordered} {...props}/>
        </Link>
      </div>
    </>
  );
};

Cart.propTypes = {
  cartProds: PropTypes.arrayOf(
   productShape
  ),
  cart: PropTypes.arrayOf(PropTypes.string),
  cartSum: PropTypes.number,
  clearCart: PropTypes.func,
};

export default Cart;
