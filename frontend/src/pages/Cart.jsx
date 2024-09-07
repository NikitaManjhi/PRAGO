import React, { useState,useEffect } from 'react';
import Navbar from '../components/Header/Navbar';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { useSelector } from 'react-redux';
import CartItem from '../components/CartItem';
import { userRequest } from '../requestMethods';
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const [stripeToken,setStripeToken]=useState(null);
  const cart = useSelector(state=>state.cart);
  const KEY=import.meta.env.VITE_STRIPE_KEY;

  const onToken=(token)=>{
      setStripeToken(token);
  }

  useEffect(()=>{
      const makeRequest=async()=>{
          try{
            const res=await userRequest.post("/checkout/payment",{
              token: stripeToken,
              amount: cart.total*100
            })
          }
          catch(err){
              console.log(err);
          }
       
      }
      stripeToken && makeRequest();
  },[stripeToken])
 
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

       

       
        <div className='flex justify-between p-6 '>
          <div className='flex-3 px-3 divide-y divide-gray-600 mr-4 flex gap-2 flex-col'>
          {cart.products.map((item, index) => (
              <CartItem key={index} item={item} />
            ))}
          </div>

          {/* Order Summary  */}
          <div className='flex-1 border border-black flex flex-col h-fit p-5 ml-4'>

            <h1 className='text-center font-medium tracking-wide text-lg'>ORDER SUMMARY</h1>
            <div className='flex justify-between my-4'>
              <h1>Subtotal</h1>
              <p>Rs. {cart.total}</p>
            </div>
            <div className='flex justify-between my-4'>
              <h1>Shipping Charge</h1>
              <p>Rs. 100</p>
            </div>
            <div className='flex justify-between my-4'>
              <h1>Discount</h1>
              <p>Rs. 100</p>
            </div>
            <div className='flex justify-between my-4'>
              <h1>Total</h1>
              <p>Rs. {cart.total}</p>
            </div>


            <div className='w-full flex justify-center'>
            <StripeCheckout
              name='PRAGO'
              billingAddress
              shippingAddress
              description={`Your total bill is Rs. ${cart.total}`}
              amount={cart.total}
              token={onToken}
              stripeKey={KEY}
            >
           
           <Button label={"Pay Now"} color={"black"}/>

            </StripeCheckout>
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
