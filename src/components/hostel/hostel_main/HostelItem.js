import React from 'react';
import './HostelItem.css';
import SecondaryButton from '../../common/SecondaryButton';
import { useHistory, useLocation } from 'react-router-dom';

const HostelItem = () => {
  const history = useHistory();
  const location = useLocation();

  const OnClickHandler = () => {
    history.push({
      pathname: `${location.pathname}/hostel/1`,
      state: {
        from: location.pathname,
      },
    });
  };

  return (
    <div className='hostel-item-card'>
      <div className='hostel-item-title-box'>
        <p>
          <span>Name:</span> Hotel Del luna
        </p>
        <i className='fas fa-bookmark'></i>
        {/* <i className='far fa-bookmark'></i> */}
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
        <div className='flex-end' style={{ marginBottom: '1rem' }}>
          <SecondaryButton title='See more...' onClick={OnClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default HostelItem;
