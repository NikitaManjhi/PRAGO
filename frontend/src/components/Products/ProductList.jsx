import React from 'react';
import Product from './Product';

const ProductList = ({ product }) => {
  return (
    <div className='p-4'>
      <div className='flex flex-wrap justify-between'>
        {
          product.map((productItem) => {
            return (
              <Product item={productItem} key={productItem.id} />
            );
          })
        }
      </div>
    </div>
  );
}

export default ProductList;