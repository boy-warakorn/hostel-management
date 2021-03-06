import React, { Fragment, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../navigation/sidebar/Sidebar';
import Navbar from '../navigation/navbar/Navbar';
import HostelMain from './hostel_main/HostelMain';
import BookmarkHostel from './hostel_main/BookmarkHostel';
import HostelDetail from './hostel_detail/HostelDetail';
import Backdrop from '../common/Backdrop';
import HideSidebar from '../navigation/hide_sidebar/HideSidebar';

const Hostel = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <Route path='/home/bookmark' exact component={BookmarkHostel} />
      </Switch>
    </Fragment>
  );
};

export default Hostel;
