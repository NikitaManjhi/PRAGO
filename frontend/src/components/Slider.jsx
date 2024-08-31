// src/components/Slider.js
import React, { useState } from 'react';
import Slide from './Slide';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@mui/icons-material';
import { sliderData } from '../data';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sliderData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative h-full overflow-hidden">
     
      <div
        className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4 z-10 bg-white rounded-full p-2 opacity-35 hover:opacity-50 cursor-pointer transition-all ease-in duration-150"
        onClick={handlePrev}
      >
        <KeyboardArrowLeftOutlined fontSize="large" />
      </div>

     
      <div
        className="flex h-full transition-transform ease-in-out duration-500 tran"  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {sliderData.map((image) => (
          <div key={image.id} className="w-full flex-shrink-0">
            <Slide image={image} />
          </div>
        ))}
      </div>

      
      <div
        className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 z-10 bg-white rounded-full p-2 cursor-pointer opacity-35 hover:opacity-50 transition-all ease-in duration-150"
        onClick={handleNext}
      >
        <KeyboardArrowRightOutlined fontSize="large" />
      </div>
    </div>
  );
};

export default Slider;
