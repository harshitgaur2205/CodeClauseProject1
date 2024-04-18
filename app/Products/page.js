import React from 'react';
import Products from './components/products';
import Sidebar from '../Components/SideBar';

const Page = () => {
  return (
    <div className='page flex bg-grey-300 h-fit '>
      <Sidebar />
      <div className='products_section bg-white h-full w-full flex items-self-end justify-center pl-8 pt-8' >
        <Products />
      </div>
    </div>
  );
};

export default Page;
