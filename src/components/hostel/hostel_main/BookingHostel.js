import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import HostelTitle from './HostelTitle';
import HostelItem from './HostelItem';
import Loader from '../../common/Loader';
import * as actions from '../../../store/actions/index';
import './HostelMain.css';

const BookingHostel = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  let bookmarkHostels = useSelector((state) => {
    return state.hostel.bookmarkHostels;
  });

  let searchHostels = useSelector((state) => {
    return state.hostel.searchHostels;
  });

  useEffect(() => {
    dispatch(actions.setBookmarkHostels());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let renderContent = <Loader />;

  if (searchHostels != null) {
    renderContent = searchHostels.map((hostel) => (
      <HostelItem key={hostel.id} hostel={hostel} />
    ));
  } else if (bookmarkHostels != null) {
    renderContent = bookmarkHostels.map((hostel) => (
      <HostelItem key={hostel.id} hostel={hostel} />
    ));
  }

  const search = () => {
    dispatch(actions.searchHostels(ref.current.value, true));
  };

  return (
    <div className='hostel-container'>
      <div className='hostel-header'>
        <h3>Booking Hostels</h3>
      </div>
      <div className='hostel-list-box'>
        <HostelTitle onChange={search} refInput={ref} />
        <div className='hostel-list-box--inside'>{renderContent}</div>
      </div>
    </div>
  );
};

export default BookingHostel;
