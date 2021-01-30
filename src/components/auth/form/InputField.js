import React from 'react';
import './InputField.css';

const InputField = ({ title, onChange, name, hidden }) => {
  return (
    <div className='auth-input-group'>
      <label htmlFor={title}>{title}</label>
      <input
        type={hidden ? 'password' : 'text'}
        name={name}
        placeholder={`Enter you ${title}`}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
