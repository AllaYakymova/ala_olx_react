import React from 'react';
import FilterSidebar from '../../components/FilterSidebar';
import Pagination from '../../components/Pagination';
import MyProductsList from '../../admin/MyProductsList';

const MyProductsPage = ({ ...props }) => {

  return (
    <div className="main container">
      <FilterSidebar {...props}/>
      <main className='cards-wrap'>
        <Pagination {...props}/>
        <MyProductsList  {...props}/>
      </main>
    </div>
  );
};

export default MyProductsPage;
