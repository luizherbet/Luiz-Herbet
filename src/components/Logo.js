import React, { memo } from 'react';
import logoImg from '../assets/img/logo.png';

const Logo = memo(() => {
  return (
    <div className="box-content">
      <img
        src={logoImg}
        alt="Logo"
        className="w-24 h-24 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
      />
    </div>
  );
});

export default Logo;
