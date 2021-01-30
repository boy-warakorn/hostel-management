import React, { useState } from 'react';
import LoginForm from './form/login/LoginForm';
import RegisterForm from './form/register/RegisterForm';
import './AuthCard.css';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

const AuthCard = () => {
  const [isLogin, setIsLogin] = useState(true);

  let form = isLogin ? <LoginForm /> : <RegisterForm />;
  let buttonText = isLogin ? 'Register' : 'Login';

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        {form}
        <div className='auth-button-group'>
          <SecondaryButton
            title={`Switch to ${buttonText}`}
            onClick={() => setIsLogin(!isLogin)}
          />
          <PrimaryButton title='Login' />
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
