import React from 'react';
import InputField from './InputField';
import PrimaryButton from '../../common/PrimaryButton';
import SecondaryButton from '../../common/SecondaryButton';
import './LoginForm.css';

const LoginForm = () => {
  return (
    <form className='auth-form'>
      <InputField title='Username' />
      <InputField title='Password' />
      <div className='auth-button-group'>
        <SecondaryButton />
        <PrimaryButton />
      </div>
    </form>
  );
};

export default LoginForm;
