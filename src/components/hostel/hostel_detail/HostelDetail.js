import React, { useEffect, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import HostelDetailRightBox from './hostel_detail_right/HostelDetailRightBox';
import HostelDetailLeftBox from './hostel_detail_left/HostelDetailLeftBox';
import Loader from '../../common/Loader';
import * as actions from '../../../store/actions/index';
import './HostelDetail.css';

const HostelDetail = () => {
  const history = useHistory();
  const location = useLocation();
  const { id } = useParams();
  const dispatch = useDispatch();
  const curHostel = useSelector((state) => {
    return state.hostel.currentHostel;
  });

  useEffect(() => {
    dispatch(actions.setCurrentHotel(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickHandler = () => {
    history.push(`${location.state.from}`);
  };

  let renderContent = <Loader />;

  if (curHostel !== null) {
    renderContent = (
      <Fragment>
        <HostelDetailLeftBox
          hostel={curHostel[0]}
          onClick={() => {
            dispatch(actions.bookmarkHostel(curHostel[0].id));
            dispatch(actions.setCurrentHotel(id));
          }}
        />
        <HostelDetailRightBox hostel={curHostel[0]} />
      </Fragment>
    );
  }
  return (
    <div className='hostel-detail-container'>
      <div className='hostel-detail-header' onClick={onClickHandler}>
        <i className='fas fa-chevron-left'></i>
        <h3>Back</h3>
      </div>
      <div className='hostel-detail-box'>{renderContent}</div>
    </div>
  );
};

export default HostelDetail;
