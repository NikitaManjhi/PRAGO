import React from 'react'
import Navbar from '../components/Header/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import InputBox from '../components/InputBox'
const Register = () => {
  return (
    <div>
    <Navbar />
    <div className='flex items-center flex-col justify-center py-40'>
        <h1 className='font-semibold text-3xl tracking-wider mb-6'>Create Account</h1>
        <div className=''>
        <InputBox label={"Email"}/>
        <InputBox label={"Password"}/>
        </div>
        <button className='w-44 border-black border p-2 mt-6 text-lg'>Create</button>
    </div>
    <Newsletter />
    <Footer />
</div>
  )
}

export default Register