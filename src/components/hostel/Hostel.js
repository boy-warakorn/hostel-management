import React, { Fragment } from 'react';
import Sidebar from '../navigation/Sidebar';
import HostelMain from './HostelMain';
import { Switch, Route } from 'react-router-dom';

const Hostel = () => {
  return (
    <Fragment>
      <Sidebar />
      <Switch>
        <Route path='/home' exact component={HostelMain} />
      </Switch>
    </Fragment>
  );
};

export default Hostel;
