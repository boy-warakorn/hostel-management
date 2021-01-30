import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';
import './HostelMain.css';
import HostelTitle from './HostelTitle';
import HostelItem from './HostelItem';
import Loader from '../../common/Loader';

const BookingHostel = () => {
  const dispatch = useDispatch();

  let bookmarkHostels = useSelector((state) => {
    return state.hostel.bookmarkHostels;
  });

  useEffect(() => {
    dispatch(actions.setBookmarkHostels());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let renderContent = <Loader />;

  if (bookmarkHostels != null) {
    renderContent = bookmarkHostels.map((hostel) => (
      <HostelItem key={hostel.id} hostel={hostel} />
    ));
  }

  return (
    <div className='hostel-container'>
      <div className='hostel-header'>
        <h3>Home</h3>
      </div>
      <div className='hostel-list-box'>
        <HostelTitle />
        <div className='hostel-list-box--inside'>{renderContent}</div>
      </div>
    </div>
  );
};

export default BookingHostel;
