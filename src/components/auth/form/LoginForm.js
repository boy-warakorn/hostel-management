import React from 'react';
import InputField from './InputField';

import './LoginForm.css';

const LoginForm = () => {
  return (
    <form className='auth-form'>
      <InputField title='Username' />
      <InputField title='Password' />
      
    </form>
  );
};

export default LoginForm;
