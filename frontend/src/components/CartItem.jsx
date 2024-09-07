import React, { useState } from 'react'
import { Remove, Add } from '@mui/icons-material';

const CartItem = ({item}) => {
    const [quantity,setQuantity]=useState(0);
    
    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
      };
    
      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity((prev) => prev - 1);
        }
      };
    
  return (
    <div>
        <div className='flex p-2'>
              <div className='flex-1 w-24 h-52  mr-2'>
                <img src={item.img} alt="" className='w-full h-full object-contain' />
              </div>
              <div className="flex-3 justify-between flex">
                <div className='flex flex-col flex-3'>
                  <h1 className='font-medium text-lg mb-4'>{item.title}</h1>
                  <p className='text-md mb-2'>SIZE: XS</p>
                  <div className="flex items-center border border-gray-400 w-fit justify-between py-1 px-2 rounded-md">
                    <button onClick={handleDecrement} className="cursor-pointer"><Remove /></button>
                    <p className='text-lg mx-3'>{quantity}</p>
                    <button onClick={handleIncrement} className=" cursor-pointer"><Add /></button>
                  </div>
                </div>
                <div className='flex  flex-1 flex-col justify-between'>
                  <h1 className='font-medium text-xl text-left w-full'>Rs. {item.price}</h1>
                  <div className='flex justify-between w-full '>
                    <p className='cursor-pointer hover:underline'>Remove</p>
                    <p className='cursor-pointer  hover:underline'>Move to Wishlist</p>
                  </div>
                </div>
              </div>
            </div>
    </div>
  )
}

export default CartItem