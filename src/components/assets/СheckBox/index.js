import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const CheckboxItem = ({ labelInfo = null, labelTitle = '', name = '', type = 'checkbox', checked = false, onChange = null }) => {

  const checkboxStyle = classNames('filter__checkbox', checked ? 'filter__checkbox-checked' : 'filter__checkbox-unchecked');

  return (
    <label className='filter__label'>
      {labelInfo}
      {labelTitle}
      <input
        className={checkboxStyle}
        name={name}
        type={type}
        checked={checked}
        onChange={onChange}
      />
    </label>
  );
};

CheckboxItem.propTypes = {
  labelInfo: PropTypes.element,
  labelTitle: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckboxItem;
