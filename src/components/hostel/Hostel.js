import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../navigation/sidebar/Sidebar';
import Navbar from '../navigation/navbar/Navbar';
import HostelMain from './hostel_main/HostelMain';
import BookingHostel from './hostel_main/BookingHostel';
import HostelDetail from './hostel_detail/HostelDetail';
import Backdrop from '../common/Backdrop';
import HideSidebar from '../navigation/hide_sidebar/HideSidebar';

const Hostel = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  return (
    <Fragment>
      <Navbar onBtnClick={() => setIsOpen(true)} />
      <Sidebar />
      {isOpen && (
        <Fragment>
          <HideSidebar />
          <Backdrop onClick={() => setIsOpen(false)} />
        </Fragment>
      )}
      <Switch>
        <Route path='/home' exact component={HostelMain} />
        <Route path='/home/hostel/:id' exact component={HostelDetail} />
        <Route path='/home/bookmark' exact component={BookingHostel} />
      </Switch>
    </Fragment>
  );
};

export default Hostel;
