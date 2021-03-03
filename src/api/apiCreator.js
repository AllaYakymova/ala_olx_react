import qs from 'qs';

export function apiCreator ({page, perPage, origins, minPrice, maxPrice, isEditable}) {

  let queryObj = {
    page: page,
    perPage: perPage,
    origins: !origins ? null : origins.join(','),
    minPrice: minPrice,
    maxPrice: maxPrice,
    editable: isEditable
  };
  for(let key in queryObj) {
    if(queryObj[key] === null || !queryObj[key] ) {
      delete queryObj[key];
    }
  }
  return qs.stringify(queryObj, { encode: false});
}

