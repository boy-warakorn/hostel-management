import React from 'react';
import './HostelMain.css';
import HostelTitle from './HostelTitle';
import HostelItem from './HostelItem';

const HostelMain = ({ isBookmark }) => {
  let title = isBookmark ? 'Bookmark Hostel' : 'Home';

  return (
    <div className='hostel-container'>
      <div className='hostel-header'>
        <h3>{title}</h3>
      </div>
      <div className='hostel-list-box'>
        <HostelTitle />
        <div className='hostel-list-box--inside'>
          <HostelItem />
          <HostelItem />
          <HostelItem />
          {!isBookmark && <HostelItem />}
        </div>
      </div>
    </div>
  );
};

export default HostelMain;
