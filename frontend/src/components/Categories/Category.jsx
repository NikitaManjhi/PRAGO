import React from 'react';
import CategoryItem from './CategoryItem';

const categories = [
    {
      id: 1,
      img: "https://i.pinimg.com/564x/26/c4/95/26c495959b13d320b3f376ec654a383a.jpg",
      title: "WOMEN",
      cat: 'women'
    },
    {
      id: 2,
      img: "https://i.pinimg.com/564x/03/d8/53/03d853e227a0bf8178484925de6e9d06.jpg",
      title: "CO-ORDS SET",
      cat: 'coords'
    },
    {
      id: 3,
      img: "https://i.pinimg.com/564x/00/f2/0e/00f20e0ed34edf928f19c53fbca80261.jpg",
      title: "KURTI",
      cat:'kurti'
    },
    {
      id: 4,
      img: "https://i.pinimg.com/736x/da/b9/44/dab94413ab521201937e3ee3d40d200a.jpg",
      title: "LEHENGA",
      cat:"lehenga"
    }
  ];

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
