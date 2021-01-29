import React from 'react';
import './Sidebar.css';
import SidebarLogoText from './logo_text/SidebarLogoText';
import UserBox from './user_box/UserBox';
import SidebarLink from './SidebarLink';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <SidebarLogoText />
      <UserBox />
      <SidebarLink to='/home' title='Home' icon='fas fa-home' />
      <SidebarLink
        to='/home/bookmark'
        title='Bookmark'
        icon='fas fa-bookmark'
      />
    </div>
  );
};

export default Sidebar;
