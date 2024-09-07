import React, { useState , useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../requestMethods'
import Navbar from '../components/Header/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { addProduct } from '../Redux/slice/cart'
import { useDispatch } from 'react-redux'

const SingleProduct = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const id=location.pathname.split("/")[2];
    const [quantity, setQuantity]=useState(1);
    const [product,setProduct]=useState({});
    const [color,setColor]=useState("");
    const [size,setSize]=useState("");

    useEffect(()=>{
        const getProduct=async ()=>{
            try{
                const res=await publicRequest.get(`/products/find/${id}`);
                setProduct(res.data);
            }
            catch(err){
                console.log(err);
            }
        }
        getProduct();
    },[id]);
    
    const handleQuantity=(operation)=>{
        if(operation=="increment"){
            setQuantity(quantity+1);
        }
        if(operation=="decrement" && quantity>1){
            setQuantity(quantity-1);
        }
    }

    const handleClick = ()=>{
        dispatch(addProduct({...product,quantity,color,size}))
    }
  return (
    <div className='h-screen'>
        <Navbar/>
        {/* Product info */}
        <div className='flex py-12 px-28  h-4/5'>
            <div className='flex-1 '>
                <img src={product.img} alt="" className='w-full h-full object-contain' />
            </div>
            <div className='flex-1'>
                <h1 className='font-medium text-2xl'>{product.title}</h1>
                <h3>{product.desc}</h3>
                <p className='text-xl pt-6'>Rs. {product.price}</p>

                <div className='my-3'>
                    <h3>COLOR</h3>
                    <ul  className='flex gap-2 pt-3'>
                    {
                        product.color?.map((color, index) => (
                            <li key={index} className='w-6 h-6 rounded-full border border-gray-300 cursor-pointer hover:scale-105 transition duration-75' style={{ backgroundColor: color }} onClick={()=> setColor(color)} value={color}></li>
                          ))
                    }    
                    </ul>

                    <h3 className='mt-5'>SIZE</h3>
                    <ul  className='flex gap-2 pt-3'>
                    {
                        product.size?.map((size, index) => (
                            <li key={index} className='border border-black p-1 w-12 text-center hover:scale-105 cursor-pointer transition duration-75' onClick={()=> setSize(size)} value={size}>{size}</li>
                          ))
                    }    
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
                    <button className='p-3 bg-transprent border transition-all ease-in duration-100 cursor-pointer  font-normal rounded-sm tracking-wider scale-1 hover:scale-105 transition-all ease-in duration-100 w-44 border border-black' onClick={handleClick}>Add to Cart</button>
                    {/* <button className='p-3 bg-transprent border transition-all ease-in duration-100 cursor-pointer  font-normal rounded-sm tracking-wider scale-1 hover:scale-105 transition-all ease-in duration-100 w-44 border border-black'>Buy Now</button> */}
                </div>
            </div>
        </div>
        
        <Newsletter />
        <Footer/>
    </div>
  )
}

export default SingleProduct