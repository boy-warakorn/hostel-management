import React from 'react';
import './PrimaryButton.css';

const PrimaryButton = ({ title, onClick, submit }) => {
  return (
    <button
      className='primary-button'
      onClick={onClick}
      type={submit ? 'submit' : 'button'}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
