import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import Button from '../assets/Button';
import actionsWithProducts from '../../products/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getPage, getTotalItems, productsPerPage } from '../../products/productsSelectors';

const Pagination = ({ ...props }) => {
  const total = useSelector(getTotalItems);
  const perPage = useSelector(productsPerPage);
  const page = useSelector(getPage);
  const dispatch = useDispatch();
  const totalPages = useMemo(() => Math.ceil(total / perPage), [total, perPage]);

  const text = useMemo(() => page + ' of ' + totalPages, [page, totalPages]);

  const paginateBack = useCallback(() => {
    dispatch(actionsWithProducts.setCurrentPage(page > 1 ? page - 1 : 1));
    dispatch(actionsWithProducts.fetchFilteredProducts.request());
  }, [dispatch, page]);

  const paginateForward = useCallback(() => {
    dispatch(actionsWithProducts.setCurrentPage(page === totalPages ? page : page + 1));
    dispatch(actionsWithProducts.fetchFilteredProducts.request());
  }, [dispatch, page, totalPages]);

  return (
    <div className="counter counter_pagination">
      <Button onClick={paginateBack} paginateDecrem isMain={false} {...props}/>
      <span className="counter__scoreboard counter__scoreboard_pagination">
        {text}
      </span>
      <Button onClick={paginateForward} paginateIncrem isMain={false} {...props}/>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number,
  perPage: PropTypes.number,
  page: PropTypes.number
};

export default Pagination;
