import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Button from '../assets/Button/';
import { FavIcon } from '../assets/icons';
import { currency, flag, imgPlug } from '../../utils';
import { format } from 'date-fns';
import classNames from 'classnames';
import { useDispatch } from 'react-redux';
import actionsWithCart from '../Cart/actions';
import actionsAdminWithProduct from '../../admin/actions';

const CardBuilder = ({
                       product,
                       isShort = false,
                       isAdmin = false,
                       isDetail = false,
                       isCart = false,
                       image = false,
                       fav = false,
                       buyBtn = false,
                       iconColor = '#fff',
                       addFlag = false,
                       onClick = () => {
                       },
                       ...props
                     }) => {
  const dispatch = useDispatch();
  const cardTitle = classNames('card__title', {
    'card__title-short': isShort || isAdmin,
    'card__title-detail': isDetail,
    'card__title-cart': isCart,
  });
  const cardPrice = classNames('card__price', {
    'card__price-short': isShort || isAdmin,
    'card__price-detail': isDetail,
    'card__price-cart': isCart,
  });
  const cardText = classNames('card__text', {
    'card__text-detail': isDetail,
    'card__text-cart': isCart,
  });
  const cardImage = classNames('card__img', {
    'card__img-short': isShort || isAdmin,
    'card__img-detail': isDetail,
    'card__img-cart': isCart,
  });
  const cardWrap = classNames('card', {
    'card-short': isShort || isAdmin,
    'card-detail mt-10': isDetail,
    'card-cart': isCart,
  });
  const cardInfoWrap = classNames('card__info-wrap', {
    'card__info-wrap-detail': isDetail,
    'card__info-wrap-cart': isCart,
  });

  const name = <p className={cardTitle}>{product.name}</p>;
  const price = (
    <span className={cardPrice}>
      {product.price} {currency}
    </span>
  );
  const namePrice = <p className={cardText}>price: {price}</p>;
  const code = <p className={cardText}>code: {product.id.substr(0, 8)}</p>;
  const origin = <p className="card__text">from: {product.origin}</p>;
  const createdAt = (
    <p className={cardText}>created: {format(new Date(product.createdAt), 'dd-MM-yyyy')}</p>
  );
  const updatedAt = (
    <p className={cardText}>updated: {format(new Date(product.updatedAt), 'dd-MM-yyyy')}</p>
  );
  const productImage = image && (
    <img className={cardImage} src={imgPlug(product.origin)} alt="test"/>
  );
  const favorite = fav && (
    <FavIcon
      iconColor={iconColor}
      style={{ position: 'absolute', left: '15px' }}
    />
  );
  const originFlag = addFlag && (
    <img src={flag(product.origin)} alt="flag" className="card__flag"/>
  );

  const addToCartHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(actionsWithCart.addProductToCart({ item: product.id, sum: product.price }));
    dispatch(actionsAdminWithProduct.getProductById.request(product.id));
  }, [product, dispatch]);

  const buyButton = (
    <Button
      text="Add to cart"
      isIcon
      width12
      onClick={addToCartHandler}
      {...props}
    />
  );

  const editButton = (
    <Button
      text="Edit product"
      width12
      onClick={onClick}
      {...props}
    />
  );

  const cardInfo = () => {
    if (isShort) {
      return (
        <>
          {name}
          {price}
          {buyButton}
        </>
      );
    } else if (isAdmin) {
      return (
        <>
          {name}
          {price}
          {editButton}
        </>
      );
    } else if (isDetail) {
      return (
        <>
          {name}
          {code}
          {origin}
          {createdAt}
          {updatedAt}
          {namePrice}
          {buyButton}
        </>
      );
    } else if (isCart) {
      return (
        <>
          {name}
          {code}
          {namePrice}
        </>
      );
    }
  };
  const card = (
    <div className={cardWrap}>
      {favorite}
      {productImage}
      <div className={cardInfoWrap}>{cardInfo()}</div>
      {originFlag}
    </div>
  );

  return (
    <>{card}</>
  );
};

CardBuilder.propTypes = {
  product: PropTypes.shape({
    isEditable: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }),
  isShort: PropTypes.bool,
  isAdmin: PropTypes.bool,
  isDetail: PropTypes.bool,
  isCart: PropTypes.bool,
  image: PropTypes.bool,
  fav: PropTypes.bool,
  buyBtn: PropTypes.bool,
  addFlag: PropTypes.bool,
  iconColor: PropTypes.string,
  addProdToCart: PropTypes.func,
  onClick: PropTypes.func,
};

export default CardBuilder;
