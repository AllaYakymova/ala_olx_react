import React from 'react';
import ProductsListTotal from '../../products/ProductsList/';
import FilterSidebar from '../../components/FilterSidebar';
import Pagination from '../../components/Pagination';

const ProductsPage = ({ ...props }) => {

  return (
    <div className="main container">
      <FilterSidebar {...props}/>
      <main className='cards-wrap'>
        <Pagination {...props}/>
        <ProductsListTotal  {...props}/>
      </main>
    </div>
  );
};

export default ProductsPage;
