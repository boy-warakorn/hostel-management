import React from 'react';
import './Backdrop.css';

const Backdrop = ({ onClick }) => {
  return <div className='backdrop' onClick={onClick}></div>;
};

export default Backdrop;
