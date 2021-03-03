import React from 'react';
import PropTypes from 'prop-types';
import { currency } from '../../../utils';
import { useSelector } from 'react-redux';
import { getCart } from '../../Cart/cartSelectors';

const Widget = ({
  icon=true,
  counter = false,
  title = false,
  titleText = 0,
  style={},
  onClick=()=>{}
}) => {
  const cart = useSelector(getCart);

  const widgetCounter = counter && (<div className="widget__counter">{cart.length}</div>);
  const widgetTitle = title && (
    <span className="widget__title" onClick={onClick}>
      {titleText} {currency}
    </span>
  );

  return (
    <div className="widget" style={style}>
      {icon}
      {widgetCounter}
      {widgetTitle}
    </div>
  );
};

Widget.propTypes = {
  img: PropTypes.bool,
  counter: PropTypes.bool,
  title: PropTypes.bool,
  widgetImgSource: PropTypes.string,
  altWidgetImg: PropTypes.string,
  count: PropTypes.number,
  width: PropTypes.string,
  style: PropTypes.object,
  // onClick: PropTypes.func
};

export default Widget;
