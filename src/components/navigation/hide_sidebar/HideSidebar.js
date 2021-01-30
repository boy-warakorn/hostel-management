import React from 'react';
import { useDispatch } from 'react-redux';
import SidebarLogoText from '../logo_text/LogoText';
import UserBox from '../user_box/UserBox';
import CustomLink from '../custom_link/CustomLink';
import * as actions from '../../../store/actions/index';
import './HideSidebar.css';

const HideSidebar = ({ isOpen }) => {
  const dispatch = useDispatch();

  return (
    <div className='sidebar-container-hide'>
      <SidebarLogoText />
      <UserBox />
      <CustomLink to='/home' title='Home' icon='fas fa-home' />
      <CustomLink to='/home/bookmark' title='Bookmark' icon='fas fa-bookmark' />
      <CustomLink
        isButton
        onClick={() => dispatch(actions.logout())}
        title='Logout'
        icon='fas fa-sign-out-alt'
      />
    </div>
  );
};

export default HideSidebar;
