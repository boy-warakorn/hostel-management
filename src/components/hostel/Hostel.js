import React, { Fragment } from 'react';
import Sidebar from '../navigation/sidebar/Sidebar';
import Navbar from '../navigation/navbar/Navbar';
import HostelMain from './hostel_main/HostelMain';
import HostelDetail from './hostel_detail/HostelDetail';
import { Switch, Route } from 'react-router-dom';

const Hostel = () => {
  return (
    <Fragment>
      <Navbar />
      <Sidebar />
      <Switch>
        <Route path='/home' exact render={() => <HostelMain />} />
        <Route path='/home/hostel/1' exact component={HostelDetail} />
        <Route
          path='/home/bookmark'
          exact
          render={() => <HostelMain isBookmark />}
        />
      </Switch>
    </Fragment>
  );
};

export default Hostel;
