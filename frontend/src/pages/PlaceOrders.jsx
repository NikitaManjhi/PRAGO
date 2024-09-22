import React, { useState, useEffect } from 'react';
import Title from '../components/Title';
import InputBox from '../components/InputBox';
import { userRequest } from "../requestMethods";
import StripeCheckout from "react-stripe-checkout";
import CartTotal from '../components/Cart/CartTotal';
import { useSelector } from 'react-redux';

const PlaceOrders = () => {


  // Handle form data changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/* Left side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title title={"DELIVERY INFORMATION"} />
        </div>
        <div className='flex gap-3'>
          <InputBox label={"First Name"} type={"text"} name="firstName" onChange={handleInputChange} />
          <InputBox label={"Last Name"} type={"text"} name="lastName" onChange={handleInputChange} />
        </div>
        <InputBox label={"Email"} type={"email"} name="email" onChange={handleInputChange} />
        <InputBox label={"Street"} type={"text"} name="street" onChange={handleInputChange} />
        <div className='flex gap-3'>
          <InputBox label={"City"} type={"text"} name="city" onChange={handleInputChange} />
          <InputBox label={"State"} type={"text"} name="state" onChange={handleInputChange} />
        </div>
        <div className='flex gap-3'>
          <InputBox label={"Pincode"} type={"number"} name="pincode" onChange={handleInputChange} />
          <InputBox label={"Country"} type={"text"} name="country" onChange={handleInputChange} />
        </div>
        <InputBox label={"Phone Number"} type={"text"} name="phoneNumber" onChange={handleInputChange} />
      </div>

      {/* Right Side */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal />
        </div>
        <div className='mt-12'>
        
        </div>
      </div>
    </div>
  );
}

export default PlaceOrders;
