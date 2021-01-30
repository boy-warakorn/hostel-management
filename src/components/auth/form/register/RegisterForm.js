import React from 'react';
import './RegisterForm.css';
import InputField from '../InputField';

const Register = () => {
  return (
    <form className='auth-form'>
      <h1 className='heading-text' style={{ marginBottom: '4rem' }}>
        Register
      </h1>
      <InputField title='Email' />
      <InputField title='Username' />
      <InputField title='Password' />
      <InputField title='Confirm password' />
      <InputField title='Birthdate' />
    </form>
  );
};
export default Register;
