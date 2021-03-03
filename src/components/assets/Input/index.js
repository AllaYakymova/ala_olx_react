import React, { useMemo } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Input = ({ name='', label='', error='', value='', onReset=()=>{}, onChange=()=>{}, placeholder='', type = 'text', touched=false, disabled = false, hasError=false, ...props }) => {

  const inputStyle = useMemo(
    () =>
      classNames('input', {
        'input__error': hasError,
        'input-value': Boolean(value),
      }),
    [hasError, value],
  );
  const errorMessage = hasError && (<div className='input__error-message'>{error}</div>);

  return (
    <div className={hasError ? 'form__item' : 'form__item form__item-mb'}>
      <label htmlFor={name} className="form__label">{label}</label>
      <input
        disabled={disabled}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className={inputStyle}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage}
    </div>


  );
};

Input.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  onReset: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
};

export default Input;
