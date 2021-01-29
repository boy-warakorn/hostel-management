import React from 'react';
import './SecondaryButton.css';

const SecondaryButton = ({ title, onClick }) => {
  return (
    <div className='secondary-button' onClick={onClick}>
      {title}
    </div>
  );
};

export default SecondaryButton;
