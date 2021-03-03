import React from 'react';
import { currency } from '../../utils';

const OrderDetails = ({ order }) => {

  const getOrderInfo = (order) => {
    let sum = 0;
    const piecesList = order.pieces.map(item => {
      sum = sum + item.count * item.product.price;
      return (
        <li key={item.product.id}>
          <p className='card__title'>Name: {item.product.name}</p>
          <p className='card__text'>Quantity: {item.count}</p>
          <p className='card__text'>Price: {item.product.price} {currency}</p>
        </li>);
    });
    return (
      <div className='order__details'>
        <ol>
          {piecesList}
        </ol>
        <p className='card__price'>Total: {sum} {currency}</p>
      </div>
    );
  };

  return (
    <>
      {getOrderInfo(order)}
    </>
  );
};

export default OrderDetails
