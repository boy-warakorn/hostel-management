import React from 'react';
import './UserBox.css';

const UserBox = () => {
  return (
    <div className='sidebar-user'>
      <div className='sidebar-user-img' />
      <div className='sidebar-user-textbox'>
        <p className='sidebar-user-upper-text'>Warakorn</p>
        <p className='sidebar-user-lower-text'>Chantranupong</p>
      </div>
    </div>
  );
};

export default UserBox;
