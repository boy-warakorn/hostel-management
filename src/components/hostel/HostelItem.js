import React from 'react';
import './HostelItem.css';
import SecondaryButton from '../common/SecondaryButton';

const HostelItem = () => {
  return (
    <div className='hostel-item-card'>
      <div className='hostel-item-title-box'>
        <p>
          <span>Name:</span> Hotel Del luna
        </p>
      </div>
      <div className='hostel-item-detail-box'>
        <p>
          <span>Price:</span> 48000 Baht/Day
        </p>
        <p>
          <span>Detail:</span> Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Unde veritatis non omnis sed similique ab?
          Asperiores obcaecati dignissimos, exercitationem veniam temporibus
          explicabo quasi est fugiat deserunt et aperiam ut delectus.
        </p>
        <div className='flex-end'>
          <SecondaryButton title='See more...' />
        </div>
      </div>
    </div>
  );
};

export default HostelItem;
