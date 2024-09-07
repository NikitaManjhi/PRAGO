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
    <div>
    <Navbar />
    <div className='flex justify-center items-center p-16'>
    <div className='flex items-center flex-col justify-center border border-black w-fit h p-12'>
        <h1 className='font-semibold text-3xl tracking-wider mb-6'>LOGIN</h1>
        <div className=''>
        <InputBox label={"Email"} onChange={(e)=>setEmail(e.target.value)} type={"text"}/>
        <InputBox label={"Password"}  onChange={(e)=>setPassword(e.target.value)} type={"password"}/>
        </div>
        <button className='w-44 border-black border p-2 mt-6 text-lg' onClick={handleClick} disabled={isFetching}>Create</button>
      
        <div className='w-full flex justify-between mt-10'>
          <Link> <div className='underline cursor-pointer'>Forgot Password?</div></Link>
          <Link> <div className='underline cursor-pointer'>Create new account</div></Link>
        </div>

    </div>
    </div>
    <Newsletter />
    <Footer />
</div>
  )
}

export default Login