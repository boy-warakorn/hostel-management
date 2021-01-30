import React from 'react';
import './HostelDetailLeftBox.css';
import { GOOGLE_API_KEY } from '../../../../configs/api';
import GoogleMapReact from 'google-map-react';

const Marker = ({ text }) => <div>{text}</div>;

const HostelDetailLeftBox = () => {
  const initialPos = { lat: 59.95, lng: 30.33 };

  return (
    <div className='hostel-detail-left-box'>
      <div className='hostel-detail-content'>
        <div className='hostel-detail-title-box'>
          <div className='hostel-detail-title-left'>
            <h4 className='hostel-header-text'>Hostel bangalore</h4>
            <p>
              <span className='bold-text'>Price: </span>47853 Baht/day
            </p>
          </div>
          <div className='hostel-detail-title-right'>
            <i className='fas fa-bookmark'></i>
            {/* <i className='far fa-bookmark'></i> */}
          </div>
        </div>
        <div className='hostel-detail-info-box'>
          <p>
            <span className='bold-text'>Detail: </span>Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Quisquam rerum cum ut iure
            accusantium soluta magnam eius nam laboriosam dolorum animi
            assumenda incidunt obcaecati, excepturi voluptatem? Minus
            exercitationem nam nobis.
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
              <Marker lat={59.955413} lng={30.337844} text='My Marker' />
            </GoogleMapReact>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelDetailLeftBox;
