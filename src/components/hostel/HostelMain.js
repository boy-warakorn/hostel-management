import React from 'react';
import './HostelMain.css';
import HostelTitle from './HostelTitle';
import HostelItem from './HostelItem';

const HostelMain = () => {
  return (
    <div className='hostel-container'>
      <div className='hostel-header'>
        <h3>Home</h3>
      </div>
      <div className='hostel-list-box'>
        <HostelTitle />
        <div className='hostel-list-box--inside'>
          <HostelItem />
          <HostelItem />
          <HostelItem />
          <HostelItem />
        </div>
      </div>
    </div>
  );
};

export default HostelMain;
