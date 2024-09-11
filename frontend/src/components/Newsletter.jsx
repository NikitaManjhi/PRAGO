import React from 'react';
import { assets } from '../assets/assets';

const Newsletter = () => {
  return (
    <div className='text-center bg-gray-50 py-10'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off.</p>
      <p className='text-gray-400 mt-3'>Join our mailing list to stay updated on our latest products and promotions.</p>
      <form action="" className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border rounded-md overflow-hidden'>
        <input 
          type="email" 
          placeholder='Enter your email.' 
          className='w-full sm:flex-1 outline-none px-4 py-2 focus:ring-2 focus:ring-black transition duration-200' 
          required 
        />
        <button 
          className='bg-black text-white text-xs px-10 py-2 transition duration-200 hover:bg-gray-800' 
          type='submit'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
