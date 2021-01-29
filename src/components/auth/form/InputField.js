import React from 'react';
import './InputField.css';

const InputField = ({ title }) => {
  return (
    <div className='auth-input-group'>
      <label htmlFor='username'>{title}</label>
      <input type='text' name='username' placeholder={`Enter you ${title}`} />
    </div>
  );
};

export default InputField;
