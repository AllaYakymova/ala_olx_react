import React, { useCallback, useEffect } from 'react';
import { format } from 'date-fns';
import { getOrderById, getOrders } from '../ordersSelectors';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import actionsWithOrders from '../actions';
import Button from '../../components/assets/Button';
import OrderDetails from './OrderDetails';
import { OrderShape } from '../../utils/propTypesShapes';

const OrdersList = () => {
  const orders = useSelector(getOrders);
  const order = useSelector(getOrderById);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionsWithOrders.clearOrderInfo());
    dispatch(actionsWithOrders.getOrders.request());
  }, [dispatch]);

  const orderList = useCallback(() => {

    return orders.map(order => {
      let date = format(new Date(order.createdAt), 'dd-MM-yyyy');
      const inner = (<>
        <h3 className='card__title'>Order #{order.id}</h3>
        <p className='card__text'>Date: {date}</p></>);
      return (
        <li key={order.id} className='order__short'>
          <Button onClick={() => dispatch(actionsWithOrders.getOrderById.request(order.id))} isLight isOrder
                  text={inner}/>
        </li>);
    });
  }, [orders, dispatch]);

  const orderInfo = order && <OrderDetails order={order}/>;

  return (
    <div className='page__wrap'>
      <ul className='orders__wrap'>
        {orderList()}
      </ul>
      <div className='orders__wrap order__details_wrap'>
        {orderInfo}
      </div>
    </div>

  );
};

OrdersList.propTypes = {
  orders: PropTypes.arrayOf(
    OrderShape,
  ),
};

export default OrdersList;
