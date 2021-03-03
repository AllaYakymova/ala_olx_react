import React from 'react';
import { Link } from 'react-router-dom';
import { logoImg } from '../../../utils';

const Logo = () => {
  return (
    <Link to="/" className="link">
      <div className="logo">
        <img src={logoImg} alt="doggy logo" className="logo__img ml-10" />
        <p className="logo__title">
          chesno<span className="logo__subtitle">store</span>
        </p>
      </div>
    </Link>
  );
};

export default Logo;
