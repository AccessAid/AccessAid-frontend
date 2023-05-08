import React, { useState } from 'react';
import PropTypes from 'prop-types';
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
        // focused={focused.toString()}
        onBlur={handleOnBlur}
        {...inputProps}
      />

      {focused && <span className='input-error-message'> {errorMessage}</span>}
    </div>
  );
};

Input.propTypes = {
  errorMessage: PropTypes.string,
  className: PropTypes.string,
};

Input.defaultProps = {
  errorMessage: '',
  className: '',
};

export default Input;
