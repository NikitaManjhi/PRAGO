import React from 'react'

const Banner = ({ image, title, desc }) => {
  return (
    <div className="sm:flex sm:flex-row flex-col">
      <div className="banner flex sm:flex-row flex-col flex-1 bg-brown sm:h-[600px]">
        {/* Image section */}
        <img
          src={image}
          alt=""
          className="w-full sm:w-1/2 h-64 sm:h-full object-cover"
        />
        
        {/* Details section */}
        <div className="details w-full sm:w-1/2 flex flex-col justify-center items-center px-6 py-8 sm:px-10">
          <h1 className="font-semibold text-2xl sm:text-3xl tracking-wider text-center pb-4 sm:pb-6 text-white">
            {title}
          </h1>
          <h3 className="text-sm sm:text-base pb-6 sm:pb-10 text-center text-white">
            {desc}
          </h3>
          <button className="text-offWhite font-medium hover:text-brown border border-white bg-transparent hover:bg-white py-2 px-6 cursor-pointer transition-transform ease-in duration-200">
            SHOP NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
