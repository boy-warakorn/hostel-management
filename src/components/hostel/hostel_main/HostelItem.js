import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import SecondaryButton from '../../common/SecondaryButton';
import * as actions from '../../../store/actions/index';
import './HostelItem.css';

const HostelItem = ({ hostel }) => {
  const [status, setStatus] = useState();
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();

  const onClickHandler = () => {
    history.push({
      pathname: `/home/hostel/${hostel.id}`,
      state: {
        from: location.pathname,
      },
    });
  };

  useEffect(() => {
    setStatus(hostel.isBookmark);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const bookmark = () => {
    setStatus(!status);
    dispatch(actions.bookmarkHostel(hostel.id));
    dispatch(actions.setBookmarkHostels());
  };

  let iconClassname = status ? 'fas fa-bookmark' : 'far fa-bookmark';

  return (
    <div className='hostel-item-card'>
      <div className='hostel-item-title-box' onClick={bookmark}>
        <p>
          <span>Name:</span> {hostel.name}
        </p>
        <i className={iconClassname}></i>
      </div>
      <div className='hostel-item-detail-box'>
        <p>
          <span>Price:</span> {hostel.price} Baht/Day
        </p>
        <p>
          <span>Detail:</span> {hostel.detail}
        </p>
        <div className='flex-end' style={{ marginBottom: '1rem' }}>
          <SecondaryButton title='See more...' onClick={onClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default HostelItem;
