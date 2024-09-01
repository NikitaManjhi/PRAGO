import React, { useState } from 'react';
import Navbar from '../components/Header/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Remove, Add } from '@mui/icons-material';

const Cart = () => {
  const [quantity, setQuantity] = useState(1);

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
      <Navbar />
      <div className='px-10'>
        <h1 className='text-3xl text-center pt-10'>YOUR CART</h1>
        <div className='flex justify-between'>
          <div className='w-fit'>
            <Button label={"CONTINUE SHOPPING"} color={"black"} />
          </div>
          <div className='w-fit'>
            <Button label={"CHECKOUT"} color={"black"} />
          </div>
        </div>

        <div className='flex justify-between p-6'>
          <div className='flex-3 px-3 divide-y divide-gray-600 mr-4'>
            <div className='flex  p-2'>
              <div className='flex-1 w-24 h-52  mr-2'>
                <img src="https://img.faballey.com/images/Product/ICO00577Z/3.jpg" alt="" className='w-full h-full object-contain' />
              </div>
              <div className="flex-3 justify-between flex">
                <div className='flex flex-col flex-3'>
                  <h1 className='font-medium text-lg mb-4'>Blue Organza Saree With Unstitched Blouse Piece</h1>
                  <p className='text-md mb-2'>SIZE: XS</p>
                  <div className="flex items-center border border-gray-400 w-fit justify-between py-1 px-2 rounded-md">
                    <button onClick={handleDecrement} className="cursor-pointer"><Remove /></button>
                    <p className='text-lg mx-3'>{quantity}</p>
                    <button onClick={handleIncrement} className=" cursor-pointer"><Add /></button>
                  </div>
                </div>
                <div className='flex  flex-1 flex-col justify-between'>
                  <h1 className='font-medium text-xl text-left w-full'>Rs. 5000</h1>
                  <div className='flex justify-between w-full '>
                    <p className='cursor-pointer hover:underline'>Remove</p>
                    <p className='cursor-pointer  hover:underline'>Move to Wishlist</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='flex  p-2'>
              <div className='flex-1 w-24 h-52  mr-2'>
                <img src="https://img.faballey.com/images/Product/ICO00577Z/3.jpg" alt="" className='w-full h-full object-contain' />
              </div>
              <div className="flex-3 justify-between flex">
                <div className='flex flex-col flex-3'>
                  <h1 className='font-medium text-lg mb-4'>Blue Organza Saree With Unstitched Blouse Piece</h1>
                  <p className='text-md mb-2'>SIZE: XS</p>
                  <div className="flex items-center border border-gray-400 w-fit justify-between py-1 px-2 rounded-md">
                    <button onClick={handleDecrement} className="cursor-pointer"><Remove /></button>
                    <p className='text-lg mx-3'>{quantity}</p>
                    <button onClick={handleIncrement} className=" cursor-pointer"><Add /></button>
                  </div>
                </div>
                <div className='flex  flex-1 flex-col justify-between'>
                  <h1 className='font-medium text-xl text-left w-full'>Rs. 5000</h1>
                  <div className='flex justify-between w-full '>
                    <p className='cursor-pointer hover:underline'>Remove</p>
                    <p className='cursor-pointer  hover:underline'>Move to Wishlist</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary  */}
          <div className='flex-1 border border-black flex flex-col h-fit p-5 ml-4'>

            <h1 className='text-center font-medium tracking-wide text-lg'>ORDER SUMMARY</h1>
            <div className='flex justify-between my-4'>
              <h1>Subtotal</h1>
              <p>Rs. 10000</p>
            </div>
            <div className='flex justify-between my-4'>
              <h1>Shipping Charge</h1>
              <p>Rs. 100</p>
            </div>
            <div className='flex justify-between my-4'>
              <h1>Total</h1>
              <p>Rs. 100</p>
            </div>


            <div className='w-full flex justify-center'>
              <Button label={"CHECKOUT NOW"} color={"black"} />
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Cart;
