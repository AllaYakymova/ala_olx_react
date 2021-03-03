import React, { useCallback, useState } from 'react';
import CardBuilder from '../CardBuilder';
import { DeleteIcon } from '../../assets/icons';
import { currency } from '../../../utils';
import PropTypes from 'prop-types';
import Button from '../../assets/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getCartProductCount, removeProd } from '../../Cart/cartSelectors';
import actionsWithCart from '../../Cart/actions';

const CartCard = ({ product, ...props }) => {
  const cart = useSelector(getCart);
  const removed = useSelector(removeProd(product));
  const cartProductCount = useSelector(getCartProductCount(product));
  const dispatch = useDispatch();
  const [count, setCount] = useState(cartProductCount);

  // remove the product of the cart
  const removeProdFromCart = useCallback(() => {
    dispatch(
      actionsWithCart.removeProductFromCart({
        cart: removed.cartNew,
        sum: removed.sumNew,
        cartProds: removed.cartProdsReduced,
      }),
    );
  }, [dispatch, removed]);

  const decrementHandler = useCallback(() => {
    setCount(count > 0 ? count - 1 : 0);
    let index = cart.indexOf(product.id);
    const cartNew = [...cart];
    cartNew.splice(index, 1);
    const sum = count === 0 ? 0 : product.price;
    dispatch(
      actionsWithCart.reduceProductInCart({
        cart: cartNew,
        sum: sum,
        removedProdId: product.id,
      }),
    );
  }, [setCount, count, product, cart, dispatch]);

  const incrementHandler = useCallback(() => {
    setCount(count + 1);
    dispatch(actionsWithCart.addProductToCart({ item: product.id, sum: product.price }));
  }, [setCount, count, product, dispatch]);

  const counter = (
    <div className="cart-card__element">
      <p className="card__text card__text-cart">Quantity:</p>
      <div className="counter">
        <Button
          onClick={decrementHandler}
          text="-"
          counter
          isMain={false}
          {...props}
        />
        <span className="counter__scoreboard">{count}</span>
        <Button
          onClick={incrementHandler}
          text="+"
          counter
          isMain={false}
          {...props}
        />
      </div>
    </div>
  );

  const sum = (
    <div className="cart-card__element">
      <p className="card__text card__text-cart">Sum:</p>
      <p className="card__price card__price-cart">
        {product.price * count} {currency}
      </p>
    </div>
  );

  const deleteIcon = (
    <div className="cart-card__element">
      <DeleteIcon iconColor="#FF7051" onClick={removeProdFromCart} {...props} />
    </div>
  );

  return (
    <div className="cart-card">
      {deleteIcon}
      <CardBuilder isCart image product={product} {...props} />
      {counter}
      {sum}
    </div>
  );
};

CartCard.propTypes = {
  product: PropTypes.shape({
    isEditable: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }),
  productSum: PropTypes.func,
  addProdToCart: PropTypes.func,
  reduceProdInCart: PropTypes.func,
  removeProdFromCart: PropTypes.func,
  calculateCartProductCount: PropTypes.func,
};

export default CartCard;
