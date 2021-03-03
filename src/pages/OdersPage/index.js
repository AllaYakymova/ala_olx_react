import React from 'react';
import OrdersList from '../../orders/OrdersList';

const OrdersPage = ({ ...props }) => {

  return (
    <div className="container">
      <h2 className='page-title'>List of orders</h2>
      <OrdersList {...props} />
    </div>
  );
};

export default OrdersPage;
