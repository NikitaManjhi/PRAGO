import { Facebook, Instagram, Pinterest, Twitter } from '@mui/icons-material';
import React from 'react';

const Footer = () => {
  return (
    <div className="">
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
          <h1 className='mb-5 w-32 text-lg'>PRAGO</h1>
          <p className='w-full md:w-2/3 text-gray-600'>
          At PRAGO, we celebrate the beauty of Indian ethnic wear with handcrafted clothing that blends tradition and modern style. Our mission is to deliver personalized pieces that reflect your unique individuality. Join us on a journey of elegance, where every garment tells a story!
          </p>
        </div>
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+91 1234567890</li>
            <li>contact@gmail.com</li>
            <ul className='flex flex-row gap-2 mt-3'>
              <li><Instagram /></li>
              <li><Pinterest /></li>
              <li><Facebook /></li>
              <li><Twitter /></li>
            </ul>
          </ul>
        </div>
      </div>
      <div className=''>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ prago.com - All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
