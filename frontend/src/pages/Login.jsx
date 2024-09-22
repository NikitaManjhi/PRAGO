import React, {useState} from 'react'
import Navbar from '../components/Header/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import InputBox from '../components/InputBox'
import { useDispatch,useSelector } from 'react-redux'
import {login} from "../Redux/ApiCalls/user"
import { Link, NavLink } from 'react-router-dom'
const Login = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const dispatch = useDispatch();
  const {isFetching,error}=useSelector((state)=>state.user);
 
  const handleClick=(e)=>{
    e.preventDefault();
    login(dispatch, {email,password});
  }

  

  return (
    <form className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
   
    <div className='inline-flex items-center gap-2 mb-2 mt-10'>
          <h1 className='text-3xl'>LOGIN</h1>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        
        <InputBox label={"Email"} onChange={(e)=>setEmail(e.target.value)} type={"text"}/>
        <InputBox label={"Password"}  onChange={(e)=>setPassword(e.target.value)} type={"password"}/>
      
        <div className='w-full flex justify-between mt-[-8px] text-sm'>
            <p className='cursor-pointer'>Forgot Password ?</p>
            <Link to='/register'>
            <p>Create Account</p>
            </Link>
        </div>

        <button className='bg-black text-white font-light px-8 py-2 mt-4' onClick={handleClick} disabled={isFetching}>Login</button>

   
</form>
  )
}

export default Login