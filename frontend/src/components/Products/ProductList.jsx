import React from 'react'
import Product from './Product'
const ProductList = ({title,desc,product}) => {
  return (
    <div className='flex flex-col items-center my-20'>
        <h1 className='font-medium text-2xl tracking-widest text-center'>{title}</h1>
        <p className='text-lg pb-14'>{desc}</p>
        <div className='flex  w-full gap-6'>
            {
                product.map((productItem)=>{
                    return(
                        <Product item={productItem} key={productItem.id}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductList