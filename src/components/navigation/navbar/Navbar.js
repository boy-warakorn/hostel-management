import React from 'react';
import { useDispatch } from 'react-redux';
import LogoText from '../logo_text/LogoText';
import CustomLink from '../custom_link/CustomLink';
import HamburgerBtn from './HamburgerButton';
import * as actions from '../../../store/actions/index';

import './Navbar.css';

const Navbar = ({ onBtnClick }) => {
  const dispatch = useDispatch();

  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <HamburgerBtn onClick={onBtnClick} />
        <LogoText />
      </div>
      <div className='navbar-right'>
        <CustomLink to='/home' title='Home' icon='' />
        <CustomLink to='/home/bookmark' title='Bookmark' icon='' />
        <CustomLink
          isButton
          onClick={() => dispatch(actions.logout())}
          title='Logout'
          icon='fas fa-sign-out-alt'
        />
        <div className='navbar-user-img' />
      </div>
    </div>
  );
};

export default Navbar;
