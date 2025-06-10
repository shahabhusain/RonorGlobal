import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import invest from '../../assets/invest.png';
import { Link } from 'react-router-dom';

const Invest = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Check if mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // News items data
const newsItems = [
  {
    id: 1,
    title: "Swedish home furnishing retailer, IKEA, marks strategic e-commerce foray in Ghana",
    date: "28-05-2025",
  },
  {
    id: 2,
    title: "Ghana launches $500M Green Energy Fund to boost renewable investments",
    date: "24-05-2025",
  },
  {
    id: 3,
    title: "Tech giant Huawei to open regional innovation hub in Accra",
    date: "20-05-2025",
  },
  {
    id: 4,
    title: "Ghana and UAE sign MoU to expand bilateral trade and investment",
    date: "16-05-2025",
  },
  {
    id: 5,
    title: "Textile and apparel sector receives $200M boost from global investors",
    date: "12-05-2025",
  }
];


  // Slider navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === newsItems.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? newsItems.length - 1 : prev - 1));
  };

  return (
    <div className='w-full mt-20 flex flex-col lg:flex-row'>
      {/* Left Section */}
      <div className='bg-[#00105C] px-4 md:px-6 pt-6 w-full lg:w-[60%]'>
        <div className='flex flex-col lg:flex-row items-center gap-6 max-w-7xl mx-auto'>
          <div className='text-center lg:text-left'>
            <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[42px] font-bold text-white'>
              <span className='font-medium'>Invest and Build </span>
              Your Business in GHANA
            </h1>
            <button className='bg-red-500 hover:bg-red-600 text-white py-2 px-4 md:py-3 md:px-5 text-sm md:text-base lg:text-lg xl:text-xl font-semibold rounded-md mt-6 transition-colors duration-200'>
              Know More
            </button>
          </div>
          <img
            className='w-[180px] md:w-[250px] lg:w-[300px] xl:w-[400px]'
            src={invest}
            alt="Invest in Ghana"
            loading="lazy"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className='border-t-4 lg:border-t-0 lg:border-l-4 border-[#7A7A7A] w-full lg:w-[40%] p-4'>
        <h1 className='text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-bold text-[#00105C] mb-4'>
          Latest News
        </h1>

        {/* Desktop News List */}
        <div className='hidden lg:block w-full h-[250px] xl:h-[200px] overflow-y-auto scrollbar-custom pr-2'>
          {newsItems.map((item) => (
            <div key={item.id} className='border-b-[2px] border-black pb-4 mt-4'>
              <h2 className='text-sm md:text-base lg:text-lg xl:text-xl font-medium text-black'>
                {item.title}
              </h2>
              <button className='flex items-center gap-2 mt-2 text-sm'>
                {item.date} <Link to="/blog" className='text-red-500 hover:text-red-600 underline transition-colors duration-200'>Know more</Link>
              </button>
            </div>
          ))}
        </div>

        {/* Mobile News Slider */}
        <div className='lg:hidden relative'>
          <div className='overflow-hidden'>
            <div 
              className='flex transition-transform duration-300 ease-in-out'
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {newsItems.map((item) => (
                <div 
                  key={item.id} 
                  className='w-full flex-shrink-0 border-b-[2px] border-black pb-4'
                >
                  <h2 className='text-base font-medium text-black'>
                    {item.title}
                  </h2>
                  <button className='flex items-center gap-2 mt-2 text-sm'>
                    {item.date} <span className='text-red-500 hover:text-red-600 underline transition-colors duration-200'>Know more</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Slider Controls */}
          <div className='flex justify-center mt-4 gap-4'>
            <button 
              onClick={prevSlide}
              className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200'
              aria-label="Previous news"
            >
              <FaChevronLeft />
            </button>
            <div className='flex items-center gap-2'>
              {newsItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-[#00105C]' : 'bg-gray-300'}`}
                  aria-label={`Go to news ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200'
              aria-label="Next news"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invest;