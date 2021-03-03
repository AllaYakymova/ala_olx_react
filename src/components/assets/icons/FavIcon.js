import React from 'react';

export const FavIcon = ({
  iconColor = '#ffffff',
  style = null,
  onClick = null,
}) => {
  return (
    <svg
      style={style}
      onClick={onClick}
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.872 18.334a24.074 24.074 0 002.97-2.206c2.654-2.323 4.2-4.828 4.157-7.38a3.849 3.849 0 00-1.095-2.638A3.65 3.65 0 0016.28 5c-1.892.003-3.317 1.084-4.367 3.411a1 1 0 11-1.824-.822C11.441 4.592 13.534 3.005 16.275 3a5.65 5.65 0 014.058 1.71A5.848 5.848 0 0122 8.715c.055 3.263-1.787 6.247-4.84 8.92a26.048 26.048 0 01-4.704 3.256 1 1 0 01-.91 0c-.083-.042-.228-.12-.427-.232a25.992 25.992 0 01-4.32-3.063c-3.028-2.663-4.851-5.635-4.797-8.88A5.848 5.848 0 013.667 4.71 5.65 5.65 0 017.725 3a6.118 6.118 0 012.176.39 1 1 0 01-.708 1.87A4.137 4.137 0 007.72 5a3.65 3.65 0 00-2.625 1.11A3.849 3.849 0 004 8.748c-.043 2.538 1.487 5.031 4.118 7.346A24.019 24.019 0 0012 18.859c.266-.152.559-.328.872-.525z"
        fill={iconColor}
      />
    </svg>
  )
};
