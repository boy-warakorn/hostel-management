import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './form/login/LoginForm';
import RegisterForm from './form/register/RegisterForm';
import './AuthCard.css';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

import * as actions from '../../store/actions/index';

const AuthCard = () => {
  const [isUILogin, setIsLogin] = useState(true);
  const dispatch = useDispatch();

  const loginHandler = () => {
    dispatch(actions.login());
  };
  const registerHandler = () => {
    dispatch(actions.register());
  };

  let form = isUILogin ? <LoginForm /> : <RegisterForm />;
  let secondaryButtonText = isUILogin ? 'Register' : 'Login';
  let primaryButtonText = !isUILogin ? 'Register' : 'Login';

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        {form}
        <div className='auth-button-group'>
          <SecondaryButton
            title={`Switch to ${secondaryButtonText}`}
            onClick={() => setIsLogin(!isUILogin)}
          />
          <PrimaryButton
            title={primaryButtonText}
            onClick={isUILogin ? () => loginHandler() : () => registerHandler()}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthCard;
