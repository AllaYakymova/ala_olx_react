import React from 'react';
import { mainIconColor } from '../../../utils';
import Proptypes from 'prop-types';

export const CartIcon = ({
  iconColor = { mainIconColor },
  width = '35px',
  style = null,
}) => {
  return (
    <svg
      style={style}
      viewBox="0 0 32 32"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.52 29h-15a5.48 5.48 0 01-5.31-6.83L6.25 9.76a1 1 0 011-.76H24a1 1 0 011 .7l3.78 12.16a5.49 5.49 0 01-.83 4.91A5.41 5.41 0 0123.52 29zM8 11L5.11 22.65A3.5 3.5 0 008.48 27h15a3.44 3.44 0 002.79-1.42 3.5 3.5 0 00.53-3.13L23.28 11z"
        fill={iconColor}
      />
      <path
        d="M20 17a1 1 0 01-1-1V8a3 3 0 00-6 0v8a1 1 0 01-2 0V8a5 5 0 0110 0v8a1 1 0 01-1 1z"
        fill={iconColor}
      />
    </svg>
  );
};

CartIcon.propTypes = {
  iconColor: Proptypes.string.isRequired,
};
