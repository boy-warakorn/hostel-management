import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ title, onClick }) => {
  return (
    <div className='primary-button' onClick={onClick}>
      {title}
    </div>
  );
};

export default PrimaryButton;
