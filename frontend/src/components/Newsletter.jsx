import React from 'react'

const Newsletter = () => {
  return (
    <div className='h-28 bg-brown w-full '>
      <div className='h-full flex justify-center items-center gap-3'>
        <label htmlFor="" className='font-normal text-lg'>Enter Email for latest updates and Offers</label>
        <div className='h-8'>
        <input type="text" className='h-full bg-beige border-none'/>
        <button type="submit" className='px-2 border border-white h-full '>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter