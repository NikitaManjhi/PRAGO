
import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Header/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import InputBox from '../components/InputBox'
const Register = () => {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [email,setEmail]=useState("");


  return (
    <div>
        <Navbar />
        <div className='flex items-center flex-col justify-center py-40'>
            <h1 className='font-semibold text-3xl tracking-wider mb-6'>CREATE ACCOUNT</h1>
            <div className=''>
            <InputBox label={"User Name"} onChange={(e)=>setUsername(e.target.value)}/>
            <InputBox label={"Email"} onChange={(e)=>setEmail(e.target.value)}/>
            <InputBox label={"Password"} onChange={(e)=>setPassword(e.target.value)}/>
            </div>

            <button className='w-44 border-black border p-2 mt-6 text-lg' onClick={handleClick}>Create</button>
            
        </div>
        <Newsletter />
        <Footer />
    </div>
  )
}

export default Register