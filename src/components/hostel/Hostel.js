import React, { Fragment } from 'react';
import Sidebar from '../navigation/sidebar/Sidebar';
import Navbar from '../navigation/navbar/Navbar';
import HostelMain from './hostel_main/HostelMain';
import BookingHostel from './hostel_main/BookingHostel';
import HostelDetail from './hostel_detail/HostelDetail';
import { Switch, Route } from 'react-router-dom';

const Hostel = () => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/home' exact component={HostelMain} />
        <Route path='/home/hostel/:id' exact component={HostelDetail} />
        <Route path='/home/bookmark' exact component={BookingHostel} />
      </Switch>
    </Fragment>
  );
};

export default Hostel;
