import React, { Fragment } from 'react';
import Sidebar from '../navigation/Sidebar';
import HostelMain from './HostelMain';

const Hostel = () => {
  return (
    <Fragment>
      <Sidebar />
      <HostelMain />
    </Fragment>
  );
};

export default Hostel;
