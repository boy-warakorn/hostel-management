import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomLink.css';

const SidebarLink = ({ to, title, icon }) => {
  return (
    <NavLink
      to={to}
      exact
      activeClassName='sidebar-link-active'
      className='sidebar-link-text'
    >
      <i className={icon.concat(' sidebar-icon')}></i>
      {title}
    </NavLink>
  );
};

export default SidebarLink;
