import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from '../components/Newsletter'

const Contact = () => {
  return (
    <div>
         <div className='text-center text-3xl pt-10 border-t'>
        <Title text1={"CONTACT"} text2={"US"}/>
    </div>
    <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img src={assets.contact_img} alt="" className='w-full md:max-w-[480px]'/>
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-2xl text-gray-600'>Our Store</p>
            <p className='text-gray-500 text-lg'>Behind Boys High <br />School, Ranchi, Jharkhand-834003</p>
            <p className='text-gray-500 text-lg'>Tel: 1234567890</p>
            <p className='text-gray-500 text-lg'>Email: prago@gmail.com</p>
            <p className='font-semibold text-2xl text-gray-600'>Careers At Prago</p>
            <p className='text-gray-500 text-lg'>Learn more about our forms and job openings.</p>
            <button type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Explore Jobs</button>
        </div>
    </div>
    <Newsletter/>
    </div>
   
  )
}

export default Contact