import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({ title, onClick }) => {
  return (
    <button className='secondary-button' onClick={onClick}>
      {title}
    </button>
  );
};

export default SecondaryButton;
