import React, { Fragment } from 'react';
import InputField from '../InputField';

const LoginForm = () => {
  return (
    <Fragment>
      <i
        className='fas fa-hotel icon-primary icon-l'
        style={{ marginBottom: '2rem' }}
      ></i>
      <h1 className='heading-text'>The HosteL</h1>
      <form className='auth-form'>
        <InputField title='Username' />
        <InputField title='Password' />
      </form>
    </Fragment>
  );
};

export default LoginForm;
