import React from 'react';
import PropTypes from 'prop-types';
import Widget from '../WidgetBuilder';
import { CartIcon } from '../../icons';
import { mainIconColor } from '../../../../utils';
import { useSelector } from 'react-redux';
import { getCartSum } from '../../../Cart/cartSelectors';

const CartWidget = ({ onClick=()=>{} }) => {
  const cartSum = useSelector(getCartSum);

  const icon = <CartIcon iconColor={mainIconColor} />;

  return  <Widget icon={icon} counter title titleText={cartSum} onClick={onClick} />
  };

CartWidget.propTypes = {
  cartSum: PropTypes.number,
  onClick: PropTypes.func
};

export default CartWidget;
