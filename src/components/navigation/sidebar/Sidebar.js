import React from 'react';
import './Sidebar.css';
import SidebarLogoText from '../logo_text/LogoText';
import UserBox from '../user_box/UserBox';
import CustomLink from '../custom_link/CustomLink';

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
      <SidebarLogoText />
      <UserBox />
      <CustomLink to='/home' title='Home' icon='fas fa-home' />
      <CustomLink to='/home/bookmark' title='Bookmark' icon='fas fa-bookmark' />
    </div>
  );
};

export default Sidebar;
