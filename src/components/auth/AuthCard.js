import React, { useState } from 'react';
import LoginForm from './form/login/LoginForm';
import RegisterForm from './form/register/RegisterForm';
import './AuthCard.css';

const AuthCard = () => {
  const [isUILogin, setIsLogin] = useState(true);

  const onSwitch = () => {
    setIsLogin(!isUILogin);
  };

  let renderContent = isUILogin ? (
    <LoginForm onClick={onSwitch} />
  ) : (
    <RegisterForm onClick={onSwitch} />
  );

  return (
    <div className='auth-container'>
      <div className='auth-card'>{renderContent}</div>
    </div>
  );
};

export default AuthCard;
