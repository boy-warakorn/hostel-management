import React from 'react';
import './HostelDetail.css';
import HostelDetailRightBox from './hostel_detail_right/HostelDetailRightBox';
import HostelDetailLeftBox from './hostel_detail_left/HostelDetailLeftBox';
import { useHistory, useLocation } from 'react-router-dom';

const HostelDetail = () => {
  const history = useHistory();
  const location = useLocation();

  const onClickHandler = () => {
    history.push(`${location.state.from}`);
  };

  return (
    <div className='hostel-detail-container'>
      <div className='hostel-detail-header' onClick={onClickHandler}>
        <i className='fas fa-chevron-left'></i>
        <h3>Back</h3>
      </div>
      <div className='hostel-detail-box'>
        <HostelDetailLeftBox />
        <HostelDetailRightBox />
      </div>
    </div>
  );
};

export default HostelDetail;
