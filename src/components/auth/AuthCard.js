import React from 'react';
import LoginForm from './form/LoginForm';
import './AuthCard.css';

const AuthCard = () => {
  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <i
          className='fas fa-hotel icon-primary icon-l'
          style={{ marginBottom: '2rem' }}
        ></i>
        <h1 className='heading-text'>The HosteL</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default AuthCard;
