import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomLink.css';

const SidebarLink = ({ to, title, icon, isButton, onClick }) => {
  let renderContent;

  if (isButton) {
    renderContent = (
      <div className='sidebar-link-text' onClick={onClick}>
        <i className={icon.concat(' sidebar-icon')}></i>
        {title}
      </div>
    );
  } else {
    renderContent = (
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
  }

  return renderContent;
};

export default SidebarLink;
