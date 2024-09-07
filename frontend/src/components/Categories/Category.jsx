import React from 'react';
import CategoryItem from './CategoryItem';
import {categories} from '../../data';

const Categories = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-16 '>
      <h1 className='font-medium text-2xl tracking-widest text-center'>SHOP BY CATEGORIES</h1>
      <p className='text-lg pb-14'>Explore diverse collections tailored to your interests.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
