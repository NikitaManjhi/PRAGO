import React from 'react';
import CategoryItem from './CategoryItem';
import {categories} from '../../data';
import Title from '../Title';
import SubTitle from '../Products/SubTitle';

const Categories = () => {
  return (
    <div className='flex flex-col my-20'>
       <div className="text-3xl mb-6 text-center">
        <Title title={"SHOP BY COLLECTIONS"}/>
        <SubTitle desc={"Discover Your Perfect Match Across Categories"} />

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full">
        {categories.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
