import React, { useState } from 'react';
import { RiDoubleQuotesL } from "react-icons/ri";

const Client = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Different testimonials for each slide
  const slides = [
    {
      company: "Paypal",
      testimonial: "I congratulate Invest Ghana on being an amazing catalyst in helping businesses grow in Ghana...",
      author: "ANUPAM PAHUJA",
      position: "Vice President - South East Asia, Middle East & Africa, PayPal",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      company: "Google",
      testimonial: "Working with Invest Ghana has been transformative for our operations in West Africa. Their deep understanding of the local market is unparalleled...",
      author: "SARAH CHEN",
      position: "Regional Director - Africa Operations, Google",
      image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

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
          {slides.map((slide, i) => (
            <div key={i} className="w-full flex-shrink-0 px-4">
              <div>
                <h1 className='text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-bold text-white flex items-center gap-2'>
                  <RiDoubleQuotesL />
                  {slide.company}
                </h1>
                <div className='flex flex-col md:flex-row items-center gap-3 mt-4'>
                  <img 
                    src={slide.image} 
                    alt={slide.author}
                    className=" w-[200px] h-[200px] rounded-full object-cover"
                  />
                  <div className='flex flex-col gap-3'>
                    <h1 className='text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] text-white font-bold'>
                      {slide.testimonial}
                    </h1>
                    <h2 className='text-[16px] md:text-[20px] lg:text-[25px] xl:text-[32px] font-semibold text-red-500'>
                      - {slide.author}
                    </h2>
                    <p className='text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] font-semibold text-white'>
                      {slide.position}
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        &lt;
      </button>
      <button 
        onClick={nextSlide} 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        &gt;
      </button>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-colors ${
              i === currentSlide ? 'bg-white' : 'bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Client;