import React from 'react';
import PropTypes from 'prop-types';

const Selector = ({ label = '', isOrigin = true, name = '', defaultValue = '', onChange = null, options = [], hasError = false, error }) => {

  const selectOptions = options.map((option) => (
    <option key={option} value={option} className='select__option'>{option}</option>));

  const errorMessage = hasError && (<div className='input__error-message'>{error}</div>);

  return (
    <div className={isOrigin ? 'filter__wrap' : hasError ? 'form__item' : 'form__item form__item-mb'}>
      <label htmlFor={name} className="form__label">{label}</label>
      <select name={name} defaultValue={defaultValue} onChange={onChange}
              className={hasError ? 'select select__error' : 'select'}>
        {selectOptions}
      </select>
      {errorMessage}
    </div>
  );
};

Selector.propTypes = {
  label: PropTypes.string,
  labelTitle: PropTypes.string,
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.func]),
  options: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number])),
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  error: PropTypes.string,
};

export default Selector;
