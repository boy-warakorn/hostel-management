import React from 'react';
import './SidebarLogoText.css';

const SidebarLogoText = () => {
  return (
    <div className='sidebar-head'>
      <i
        className='fas fa-hotel icon-primary icon-s'
        style={{ marginBottom: '-0.5rem' }}
      ></i>
      <h2 className='secondary-text'>The hosteL</h2>
    </div>
  );
};

export default SidebarLogoText;
