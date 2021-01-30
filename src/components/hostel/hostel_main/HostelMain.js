import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../../store/actions/index';
import './HostelMain.css';
import HostelTitle from './HostelTitle';
import HostelItem from './HostelItem';
import Loader from '../../common/Loader';

const HostelMain = () => {
  const dispatch = useDispatch();

  let hostels = useSelector((state) => {
    return state.hostel.hostels;
  });

  let renderContent = <Loader />;

  if (hostels != null) {
    renderContent = hostels.map((hostel) => (
      <HostelItem key={hostel.id} hostel={hostel} />
    ));
  }

  useEffect(() => {
    dispatch(actions.fetchHostels());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export default HostelMain;
