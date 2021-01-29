import React from 'react';
import './HostelTitle.css';

const HostelTitle = () => {
  return (
    <div className='hostel-title'>
      <p>HOSTEL</p>
      <input
        type='text'
        name=''
        placeholder='Search hotel by names'
        className='search-input'
      />
    </div>
  );
};

export default HostelTitle;
