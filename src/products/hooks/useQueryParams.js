import { useSelector } from 'react-redux';
import {
  getIsEditable,
  getOrigins,
  getPage,
  getSelectedMaxPrice,
  getSelectedMinPrice,
  productsPerPage,
} from '../productsSelectors';
import { apiCreator } from '../../api/apiCreator';

function useQueryParams() {
  const page = useSelector(getPage);
  const perPage = useSelector(productsPerPage);
  const origins = useSelector(getOrigins);
  const minPrice = useSelector(getSelectedMinPrice);
  const maxPrice = useSelector(getSelectedMaxPrice);
  const isEditable = useSelector(getIsEditable);

  return apiCreator(page, perPage, origins, minPrice, maxPrice, isEditable);
}

export default useQueryParams;
