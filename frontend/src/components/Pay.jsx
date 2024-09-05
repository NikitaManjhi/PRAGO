import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
const pay = () => {

    const [stripeToken,setStripeToken]=useState(null);



    const KEY=import.meta.env.VITE_STRIPE_KEY;

    const onToken=(token)=>{
        
        setStripeToken(token);
        console.log(stripeToken);
    }

    useEffect(()=>{
        const makeRequest=async()=>{
            try{
                const res= await axios.post("http://localhost:3000/api/checkout/payment", {
                    product: { name: "Your Product Name", price: 20 },  
                    token: stripeToken,
                });
                console.log(res.data);
            }
            catch(err){
                console.log(err);
            }
         
        }
        stripeToken && makeRequest();
    },[stripeToken])
  return (
    <div className='flex justify-center items-center h-screen border border-black'>
        <StripeCheckout
            name='PRAGO'
            billingAddress
            shippingAddress
            description='Your total bill is $20'
            amount={2000}
            token={onToken}
            stripeKey={KEY}
        >
            <button className='border border-black p-2 font-semibold'>Pay Now</button>
        </StripeCheckout>
    </div>
  )
}

export default pay