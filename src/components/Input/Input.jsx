import React, { useState } from 'react';
import './Input.css';

const Input = (props) => {
  const [focused, setFocused] = useState(false);
  const { errorMessage, className, ...inputProps } = props;

  const handleOnBlur = () => {
    setFocused(true);
  };

  return (
    <div className={`input-container ${className}`}>
      <input
        required
        className='form-input'
        focused={focused.toString()}
        onBlur={handleOnBlur}
        {...inputProps}
      />

      {focused && <span className='input-error-message'> {errorMessage}</span>}
    </div>
  );
};

export default Input;
