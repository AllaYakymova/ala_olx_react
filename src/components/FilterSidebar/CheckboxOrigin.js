import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionsWithProducts from '../../products/actions';
import { flag } from '../../utils';
import { getOrigins, getPage } from '../../products/productsSelectors';
import CheckboxItem from '../assets/СheckBox';
import PropTypes from 'prop-types';

const CheckboxOrigin = ({ origin }) => {
  const origins = useSelector(getOrigins);
  const page = useSelector(getPage);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (origins.includes(origin.value)) setChecked(true);
  }, [origins, origin]);

  const onChange = useCallback(({ target: { checked } }) => {
    setChecked(checked);
    let originsNew = checked ? [...origins, origin.value] : origins.filter(el => el !== origin.value);
    dispatch(actionsWithProducts.chosenOrigins(originsNew));
    if (page !== 1) {
      dispatch(actionsWithProducts.setCurrentPage(1));
    }
    dispatch(actionsWithProducts.fetchFilteredProducts.request());
  }, [origins, origin, page, dispatch]);

  const originFlag = useMemo(() => <img src={flag(origin.value)} alt="flag" className="flag"/>, [origin]);

  return (
    <CheckboxItem
      labelInfo={originFlag}
      labelTitle={origin.displayName}
      name={origin.value}
      checked={checked}
      onChange={onChange}
    />
  );
};

CheckboxOrigin.propTypes = {
  origin: PropTypes.shape({
    value: PropTypes.string,
    displayName: PropTypes.string,
  }).isRequired,
  origins: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    displayName: PropTypes.string,
  })),
};

export default CheckboxOrigin;
