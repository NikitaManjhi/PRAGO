import React from 'react'

const Banner = ({image,title,desc}) => {
  return (
    <div className="sm:flex-row">
        <div className="banner flex flex-1 h-full bg-brown">
            <img src={image} alt="" className=' w-1/2 h-full object-cover'/>
            <div className="details  w-1/2 flex flex-col justify-center items-center px-10 ">
            <h1 className="font-semibold text-3xl tracking-wider text-center pb-6 text-white">{title}</h1>
            <h3 className="text-base pb-10 text-center text-white ">{desc}</h3>
            <button className='text-offWhite font-medium hover:text-brown border border-white  bg-transparent hover:bg-white py-2 px-6 cursor-pointer transition-transform ease-in duration-200 '>SHOP NOW</button>
            </div>
        </div>
    </div>
  )
}

export default Banner