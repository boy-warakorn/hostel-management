import React from 'react';
import './HostelTitle.css';

const HostelTitle = ({ onChange, refInput }) => {
  return (
    <div className='hostel-title'>
      <p>HOSTEL</p>
      <input
        ref={refInput}
        onChange={onChange}
        type='text'
        name=''
        placeholder='Search hotel by names'
        className='search-input'
      />
    </div>
  );
};

export default HostelTitle;
