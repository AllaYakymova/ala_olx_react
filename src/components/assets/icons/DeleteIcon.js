import React from 'react';
import { mainIconColor } from '../../../utils';

export const DeleteIcon = ({
  iconColor = { mainIconColor },
  style = null,
  onClick = null,
}) => {
  return (
    <svg
      style={style}
      onClick={onClick}
      width="14"
      height="18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 6v10H3V6h8zM9.5 0h-5l-1 1H0v2h14V1h-3.5l-1-1zM13 4H1v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4z"
        fill={iconColor}
      />
    </svg>
  );
};
