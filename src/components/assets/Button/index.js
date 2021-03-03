import React from 'react';
import classNames from 'classnames';
import Proptypes from 'prop-types';
import { CartIcon } from '../icons';

const Button = ({
  text = '',
  onClick = null,
  type = 'button',
  isIcon = false,
  isMain = true,
  isLight = false,
  width12 = false,
  width13 = false,
  width15 = false,
  counter = false,
  paginateDecrem = false,
  paginateIncrem = false,
  isCloser = false,
  isOrder = false,
  mr = false,
}) => {
  const btnStyle = classNames({
    'button button_main': isMain,
    'button button_light': isLight,
    'button_12': width12,
    'button_13': width13,
    'button_15': width15,
    'button_paginate-left': paginateDecrem,
    'button_paginate-right': paginateIncrem,
    'button_counter': counter,
    'button_closer': isCloser,
    'button_order': isOrder,
    'button_mr': mr,
  });

  const buttonIcon = isIcon && (<CartIcon iconColor="#ffffff" width="18px" style={{ marginLeft: '5px' }} />);

  return (
    <button type={type} className={btnStyle} onClick={onClick}>
      {text}
      {buttonIcon}
      {counter}
      {paginateDecrem}
      {paginateIncrem}
      {isCloser}
    </button>
  );
};

Button.propTypes = {
  backgroundColor: Proptypes.string,
  text: Proptypes.oneOfType([
    Proptypes.string,
    Proptypes.object,
    Proptypes.element,
  ]),
  onClick: Proptypes.func,
  type: Proptypes.string,
  isMain: Proptypes.bool,
  isLight: Proptypes.bool,
  isIcon: Proptypes.bool,
  counter: Proptypes.bool,
  paginateDecrem: Proptypes.bool,
  paginateIncrem: Proptypes.bool,
  mr: Proptypes.bool,
};

export default Button;
