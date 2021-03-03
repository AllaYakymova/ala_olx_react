import React, { useCallback, useMemo, useState } from 'react';
import CheckboxOrigin from './CheckboxOrigin';
import Button from '../assets/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getPriceInterval,
  getSelectedMaxPrice,
  getSelectedMinPrice,
  getTotalOrigins,
  productsPerPage,
} from '../../products/productsSelectors';
import Selector from '../assets/Selector';
import { optionsPerPage } from '../../utils/index';
import actionsWithProducts from '../../products/actions';
import PropTypes from 'prop-types';
import { getQuery } from '../../routers/router/routerSelectors';

const FilterSidebar = ({ ...props }) => {
  const priceInterval = useSelector(getPriceInterval);
  const originsTotal = useSelector(getTotalOrigins);
  const minPrice = useSelector(getSelectedMinPrice);
  const maxPrice = useSelector(getSelectedMaxPrice);
  const perPage = useSelector(productsPerPage);
  const locationQuery = useSelector(getQuery);
  const dispatch = useDispatch();
  const [options] = useState(optionsPerPage);

  const checkOrigin = originsTotal.map(origin => (
    <li key={origin.value} className='filter__label'>
      <CheckboxOrigin origin={origin} {...props}/>
    </li>
  ));

  const submitHandler = useCallback((e) => {
    e.preventDefault();
    dispatch(actionsWithProducts.setSelectedMinPrice(e.target[0].value));
    dispatch(actionsWithProducts.setSelectedMaxPrice(e.target[1].value));
    dispatch(actionsWithProducts.fetchFilteredProducts.request());
  }, [dispatch]);

  const resetFilter = useCallback(() => {
    dispatch(actionsWithProducts.setSelectedMinPrice(null));
    dispatch(actionsWithProducts.setSelectedMaxPrice(null));
    dispatch(actionsWithProducts.fetchFilteredProducts.request());
  }, [dispatch]);

  const priceFilter = useMemo(() => (
    <form className='filter__form' onSubmit={submitHandler}>
      <input className="filter__input"
             name="min-price"
             type="number"
             min={priceInterval[0]}
             max={priceInterval[1]}
             placeholder={minPrice ? minPrice : priceInterval[0]}
             required/>
      <input className="filter__input"
             name="max-price"
             type="number"
             min={priceInterval[0]}
             max={priceInterval[1]}
             placeholder={maxPrice ? maxPrice : priceInterval[1]}
             required/>
      <Button type='submit' name="submit" paginateIncrem isMain={false} {...props}/>
      <Button isMain text='Reset price filter' id='reset' width13 onClick={resetFilter} {...props}/>
    </form>
  ), [priceInterval, resetFilter, submitHandler, props, minPrice, maxPrice]);

  const handleSelectChange = useCallback((event) => {
    dispatch(actionsWithProducts.setProductsPerPage(+event.target.value));
    dispatch(actionsWithProducts.setCurrentPage(1));
    dispatch(actionsWithProducts.fetchFilteredProducts.request());
  }, [dispatch]);

  const defaultValue = useMemo(() => !locationQuery.perPage ? perPage : locationQuery.perPage, [perPage, locationQuery]);

  const prodsPerPageSelector = <Selector defaultValue={defaultValue} label='Products on page' onChange={handleSelectChange}
                                         options={options}/>;

  return (
    <aside className='sidebar'>
      <h2 className='sidebar__title'>Product's origin</h2>
      <div className='filter__wrap'>
        {checkOrigin}
      </div>
      <h2 className='sidebar__title'>Price</h2>
      <div className='filter__wrap'>
        {priceFilter}
      </div>
      <div className='filter__wrap'>
        {prodsPerPageSelector}
      </div>
    </aside>
  );
};

FilterSidebar.propTypes = {
  priceInterval: PropTypes.arrayOf(PropTypes.number),
  origins: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    displayName: PropTypes.string,
  })),
};

export default FilterSidebar;

