import React from 'react';
import './HostelDetailRightBox.css';

const HostelDetailRightBox = ({ hostel }) => {
  return (
    <div className='hostel-detail-right-box'>
      <div className='hostel-detail-right-card'>
        <h4 className='hostel-header-text'>Image(s)</h4>
        {hostel.images.map((imgURL, index) => (
          <div
            className='hostel-img-card'
            key={index}
            style={{ backgroundImage: `url(${imgURL})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default HostelDetailRightBox;
