import React from 'react'
import { useSelector } from 'react-redux'
import Title from '../Title';
Title
const CartTotal = () => {
    const cart = useSelector((state)=>state.cart);
  return (
    <div className='w-full'>
        <div className='text-2xl'>
            <Title title={"CART TOTALS"}/>
        </div>

        <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{cart.total}</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Charge:</p>
                <p>Rs 0.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                    <b>Total</b>
                    <b>Rs. {cart.total}</b>
            </div>
        </div>
    </div>
  )
}

export default CartTotal