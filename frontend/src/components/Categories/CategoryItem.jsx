import React from 'react';
import Button from '../Button';
const CategoryItem = ({ item }) => {
  return (
    <div className="w-full">
      <div className="container flex flex-col justify-between items-center group cursor-pointer h-full">
        <div className="image relative w-full h-64 md:h-80 lg:h-96 overflow-hidden">
          <img src={item.img} alt="" className="w-full h-full object-cover"/>
          <div className="overlay bg-black bg-opacity-50 flex justify-center items-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button label={"EXPLORE"}/>
          </div>
        </div>
        <div className="image_title w-full text-center py-4">
          <h3 className="font-medium tracking-wide">{item.title}</h3>
        </div>
      </div>
</div>
  );
};

export default CategoryItem;
