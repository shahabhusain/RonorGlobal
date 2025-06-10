import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import icon1 from '../../assets/icon1.png';
import icon2 from '../../assets/icon2.png';
import icon3 from '../../assets/icon3.png';
import icon4 from '../../assets/icon4.png';
import icon5 from '../../assets/icon5.png';
import double from '../../assets/double.png';

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const servicesData = [
    {
      img: icon1,
      title: "Investor Targeting",
      desc: "Identifying niche investment opportunities to invite strategic partners",
    },
    {
      img: icon2,
      title: "Investment Promotion",
      desc: "Bridging the Industry-Government gap through robust stakeholder",
    },
    {
      img: icon3,
      title: "Policy Clarity",
      desc: "Cutting-edge research on sectoral opportunities across Ghana States",
    },
    {
      img: icon4,
      title: "Facilitation",
      desc: "Strategic location assessment based on Investor requirements",
    },
    {
      img: icon5,
      title: "Investor Aftercare",
      desc: "Continuous relationship management with investors post-",
    },
  ];

  // Check if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === servicesData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? servicesData.length - 1 : prev - 1));
  };

  return (
    <div className='w-[95%] max-w-screen-xl mx-auto pt-20'>
      <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold text-[#00105C]'>
        Our Services
      </h1>

      {/* Desktop Grid View */}
      <div className='hidden md:flex  gap-6 mt-12 justify-center'>
        {servicesData.map((item, index) => (
          <div
            key={`desktop-${index}`}
            className='group flex flex-col gap-4 items-center border-2 w-[270px] hover:w-[400px] border-[#7A7A7A] py-8 px-3 rounded-md relative transition-all duration-300 ease-in-out hover:px-12 hover:bg-[#00105C] hover:border-none hover:shadow-xl'
          >
            <div className='flex flex-col group-hover:flex-row items-center gap-3 group-hover:mt-12 transition-all duration-300'>
              <img
                className='w-[70px] transition-all duration-300 group-hover:invert'
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
              <h1 className='text-lg md:text-xl lg:text-2xl font-bold text-center transition-colors duration-300 text-[#00105C] group-hover:text-white'>
                {item.title}
              </h1>
            </div>
            <p className='text-sm md:text-base lg:text-lg group-hover:text-start font-medium text-center transition-colors duration-300 text-black group-hover:text-white'>
              {item.desc}
            </p>
            <img 
              className='absolute top-3 right-3 w-6 h-6' 
              src={double} 
              alt="More info" 
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Mobile Slider View */}
      <div className='md:hidden relative mt-12'>
        <div className='overflow-hidden'>
          <div 
            className='flex transition-transform duration-300 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {servicesData.map((item, index) => (
              <div
                key={`mobile-${index}`}
                className='w-full flex-shrink-0 px-4'
              >
                <div className='flex flex-col gap-4 items-center border-2 border-[#7A7A7A] py-8 px-6 rounded-md relative bg-[#00105C] text-white'>
                  <div className='flex flex-row items-center gap-3 mt-12'>
                    <img
                      className='w-[70px] invert'
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                    />
                    <h1 className='text-xl font-bold'>
                      {item.title}
                    </h1>
                  </div>
                  <p className='text-base font-medium text-start'>
                    {item.desc}
                  </p>
                  <img 
                    className='absolute top-3 right-3 w-6 h-6 invert' 
                    src={double} 
                    alt="More info" 
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slider Controls */}
        <div className='flex justify-between items-center mt-6 px-4'>
          <button 
            onClick={prevSlide}
            className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200'
            aria-label="Previous service"
          >
            <FaChevronLeft size={20} />
          </button>
          
          <div className='flex gap-2'>
            {servicesData.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#00105C]' : 'bg-gray-300'}`}
                aria-label={`Go to service ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextSlide}
            className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200'
            aria-label="Next service"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;