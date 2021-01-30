import React from 'react';
import './HamburgerButton.css';

const HamburgerButton = ({ onClick }) => {
  return (
    <div className='sim-btn' onClick={onClick}>
      <button className='ham-btn'></button>
    </div>
  );
};

export default HamburgerButton;
