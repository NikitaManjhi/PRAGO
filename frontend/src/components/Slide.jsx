import React from 'react';
import Button from './Button';

const Slide = ({ image }) => {
  return (
    <div className="h-full w-full relative">
      <img
        src={image.url}
        alt={image.heading}
        className="object-cover h-full w-full"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center px-4">
          {image.heading}
        </h1>
        <p className="text-base md:text-lg lg:text-xl mt-2 mb-6 text-center px-4">
          {image.subHeading}
        </p>
        <Button label={"SHOP COLLECTION"} />
      </div>
    </div>
  );
};

export default Slide;
