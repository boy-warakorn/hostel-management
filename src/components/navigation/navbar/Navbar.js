import React from 'react';
import LogoText from '../logo_text/LogoText';
import CustomLink from '../custom_link/CustomLink';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <LogoText />
      </div>
      <div className='navbar-right'>
        <CustomLink to='/home' title='Home' icon='' />
        <CustomLink to='/home/bookmark' title='Bookmark' icon='' />
        <div className='navbar-user-img' />
      </div>
    </div>
  );
};

export default Navbar;
