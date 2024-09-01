import React, { useState } from 'react'
import Navbar from '../components/Header/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import Button from '../components/Button'
const SingleProduct = ({product}) => {
    const [color,setColor]=useState("black");
    const [quantity, setQuantity]=useState(0);
    const handleColor= (e)=>{
        setColor(e.target.value);
    }

    const handleQuantity=(operation)=>{
        if(operation=="increment"){
            setQuantity(quantity+1);
        }
        if(operation=="decrement" && quantity>1){
            setQuantity(quantity-1);
        }
    }
  return (
    <div className='h-screen'>
        <Navbar/>
        {/* Product info */}
        <div className='flex py-12 px-28  h-4/5'>
            <div className='flex-1 '>
                <img src="https://img.faballey.com/images/Product/ICO00577Z/3.jpg" alt="" className='w-full h-full object-contain' />
            </div>
            <div className='flex-1'>
                <h1 className='font-medium text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p className='text-xl pt-6'>Rs. 4500</p>

                <div className='my-3'>
                    <h3>SIZE</h3>
                    <ul  className='flex gap-2 pt-3'>
                        <li className='border border-black p-1 w-16 flex justify-center items-center cursor-pointer scale-1 hover:scale-105'>XS</li>
                        <li className='border border-black p-1 w-16 flex justify-center items-center cursor-pointer scale-1 hover:scale-105'>S</li>
                        <li className='border border-black p-1 w-16 flex justify-center items-center cursor-pointer scale-1 hover:scale-105'>M</li>
                        <li className='border border-black p-1 w-16 flex justify-center items-center cursor-pointer scale-1 hover:scale-105'>L</li>
                        <li className='border border-black p-1 w-16 flex justify-center items-center cursor-pointer scale-1 hover:scale-105'>XL</li>
                    </ul>
                </div>
                
                <div className='my-3'>
                <h3 className='mb-2'>Quantity</h3>
                <div className='border border-black flex justify-center items-center w-20 flex justify-between p-2' >
                    <div onClick={()=>handleQuantity("decrement")} className='cursor-pointer'>-</div>
                    <div className='font-md'>{quantity}</div>
                    <div onClick={()=>{handleQuantity("increment")}} className='cursor-pointer'>+</div>
                </div>
                </div>

                <div className='flex gap-2'>
                    <button className='p-3 bg-transprent border transition-all ease-in duration-100 cursor-pointer  font-normal rounded-sm tracking-wider scale-1 hover:scale-105 transition-all ease-in duration-100 w-44 border border-black'>Add to Cart</button>
                    <button className='p-3 bg-transprent border transition-all ease-in duration-100 cursor-pointer  font-normal rounded-sm tracking-wider scale-1 hover:scale-105 transition-all ease-in duration-100 w-44 border border-black'>Buy Now</button>
                </div>

                <div className='my-3'>
                    <h3 className='font-medium text-md pb-2'>Product Description:</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda iusto iure mollitia porro, ex aperiam explicabo, distinctio incidunt ipsum blanditiis natus eveniet fuga, est nulla voluptas sit tempore nobis molestias.</p>
                </div>
                
               
                
             

            </div>
        </div>
        
        <Newsletter />
        <Footer/>
    </div>
  )
}

export default SingleProduct