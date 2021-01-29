import React from 'react';
import LoginForm from './form/LoginForm';
import './AuthCard.css';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

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
        <div className='auth-button-group'>
          <SecondaryButton />
          <PrimaryButton />
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
