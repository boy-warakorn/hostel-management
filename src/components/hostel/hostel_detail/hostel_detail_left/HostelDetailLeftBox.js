import React from 'react';
import { GOOGLE_API_KEY } from '../../../../configs/api';
import GoogleMapReact from 'google-map-react';
import './HostelDetailLeftBox.css';

const Marker = ({ text }) => <div className='marker'>{text}</div>;

const HostelDetailLeftBox = ({ hostel }) => {
  const initialPos = { lat: hostel.map.lat, lng: hostel.map.lng };

  let iconClassname = hostel.isBookmark ? 'fas fa-bookmark' : 'far fa-bookmark';

  return (
    <div className='hostel-detail-left-box'>
      <div className='hostel-detail-content'>
        <div className='hostel-detail-title-box'>
          <div className='hostel-detail-title-left'>
            <h4 className='hostel-header-text'>{hostel.name}</h4>
            <p>
              <span className='bold-text'>Price: </span>
              {hostel.price} Baht/day
            </p>
          </div>
          <div className='hostel-detail-title-right'>
            <i className={iconClassname}></i>
          </div>
        </div>
        <div className='hostel-detail-info-box'>
          <p>
            <span className='bold-text'>Detail: </span>
            {hostel.detail}
          </p>
          <div className='hostel-map-title'>
            <h4 className='hostel-header-text'>Map</h4>
          </div>
          <div className='hostel-map-box'>
            <GoogleMapReact
              bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
              center={initialPos}
              zoom={11}
            >
              <Marker lat={hostel.map.lat} lng={hostel.map.lng} text='Here' />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetailLeftBox;
