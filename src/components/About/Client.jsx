import React, { useState } from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";
import client from "../../assets/client.png";

const Client = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [1, 2]; // Your slide data

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className='bg-[#0C1644] my-20 p-12 relative'>
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-300"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((_, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <div>
                <h1 className='text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-bold text-white flex items-center gap-2'>
                  <RiDoubleQuotesL /> Paypal
                </h1>
                <div className='flex flex-col md:flex-row items-center gap-3 mt-4'>
                  <img src={client} alt="client" />
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] text-white font-bold'>
                      I congratulate Invest India on being an amazing catalyst in helping businesses grow in Ghana...
                    </h1>
                    <h2 className='text-[16px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-semibold text-red-500'>
                      - ANUPAM PAHUJA
                    </h2>
                    <p className='text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white'>
                      Vice President - South East Asia, Middle East & Africa, PayPal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
      >
        &lt;
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
      >
        &gt;
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full ${i === currentSlide ? 'bg-white' : 'bg-gray-500'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Client;