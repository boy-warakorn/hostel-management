import React, { useState } from 'react';
import LoginForm from './form/login/LoginForm';
import RegisterForm from './form/register/RegisterForm';
import './AuthCard.css';
import PrimaryButton from '../common/PrimaryButton';
import SecondaryButton from '../common/SecondaryButton';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/actionTypes';

const AuthCard = ({ isLogin, login, register }) => {
  const [isUILogin, setIsLogin] = useState(true);

  let form = isUILogin ? <LoginForm /> : <RegisterForm />;
  let secondaryButtonText = isUILogin ? 'Register' : 'Login';
  let primaryButtonText = !isUILogin ? 'Register' : 'Login';

  const loginHandler = () => {
    login();
  };
  const registerHandler = () => {
    register();
  };

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

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({ type: actionCreators.LOGIN }),
    register: () => dispatch({ type: actionCreators.REGISTER }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthCard);
