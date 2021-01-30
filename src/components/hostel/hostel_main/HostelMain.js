import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchObjectByName } from '../../utils/utilities';
import HostelTitle from './HostelTitle';
import HostelItem from './HostelItem';
import Loader from '../../common/Loader';
import * as actions from '../../../store/actions/index';
import './HostelMain.css';

const HostelMain = () => {
  const dispatch = useDispatch();
  const ref = useRef();

  const [searchHostels, setSearchHostels] = useState(null);

  let hostels = useSelector((state) => {
    return state.hostel.hostels;
  });

  let renderContent = <Loader />;

  if (searchHostels != null) {
    renderContent = searchHostels.map((hostel) => (
      <HostelItem key={hostel.id} hostel={hostel} />
    ));
  } else if (hostels != null) {
    renderContent = hostels.map((hostel) => (
      <HostelItem key={hostel.id} hostel={hostel} />
    ));
  }
  const search = () => {
    setSearchHostels(searchObjectByName(hostels, ref.current.value));
  };

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
        <HostelTitle onChange={search} refInput={ref} />
        <div className='hostel-list-box--inside'>{renderContent}</div>
      </div>
    </div>
  );
};

export default HostelMain;
