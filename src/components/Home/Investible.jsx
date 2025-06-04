import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import img1 from '../../assets/AllSectors/agri.webp';
import img2 from '../../assets/AllSectors/oil.webp';
import img3 from '../../assets/AllSectors/health.jpg';
import img4 from '../../assets/AllSectors/ict.jpg';
import img5 from '../../assets/AllSectors/manu.jpeg';
import img6 from '../../assets/AllSectors/mining.webp';
import img7 from '../../assets/AllSectors/property.jpg';
import img8 from '../../assets/AllSectors/recreation.jpg';
import img9 from '../../assets/AllSectors/energy.jpg';
import img10 from '../../assets/AllSectors/education.jpg';
import img11 from '../../assets/AllSectors/finan.jpg';
import img12 from '../../assets/AllSectors/trans.png';

const sectors = [
  { id: 1, title: "Agriculture & Agro Processing", image: img1, description: "Ghana's electricity supply is derived...", link: "/agriculture", btn:"Know More" },
  { id: 2, title: "Oil & Gas", image: img2, description: "AfCFTA presents an opportunity for intra-regional growth...", link: "/oil",btn:"Know More" },
  { id: 3, title: "Health", image: img3, description: "It is estimated that health expenditure reached USD2.3bn...", link: "/health", btn:"Know More" },
  { id: 4, title: "ICT And Fintech", image: img4, description: "International arrivals of tourist increased...", link: "/ict",btn:"Know More" },
  { id: 5, title: "Manufacturing", image: img5, description: "Ghana is ranked the second most peaceful country...", link: "/manufacture",btn:"Know More" },
  { id: 6, title: "Mining And Mineral Processing", image: img6, description: "Newly discovered deposits of lithium...", link: "/mining",btn:"Know More" },
  { id: 7, title: "Property Development", image: img7, description: "Water is provided to citizens through...", link: "/property",btn:"Know More" },
  { id: 8, title: "Recreation And Tourism", image: img8, description: "Government incentives include tax holidays...", link: "/recreation",btn:"Know More" },
  { id: 9, title: "Energy", image: img9, description: "Ghana is blessed with a very youthful population...", link: "/energy",btn:"Know More" },
  { id: 10, title: "Education", image: img10, description: "Ghana has a robust education system...", link: "/education",btn:"Know More" },
  { id: 11, title: "Financial Services", image: img11, description: "Government incentives include tax holidays...", link: "/financial",btn:"Know More" },
  { id: 12, title: "Transport Infrastructure", image: img12, description: "Water is provided to citizens through...", link: "/transport",btn:"Know More" },
];

const Investible = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(3);
      }
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-advance slides (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === sectors.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? sectors.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Handle touch events for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  // Calculate visible sectors with proper grouping
  const getVisibleSectors = () => {
    let visible = [];
    
    // Handle case where we need to wrap around the array
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % sectors.length;
      visible.push(sectors[index]);
    }
    
    return visible;
  };

  return (
    <div className='mt-4 md:mt-20 w-[95%] max-w-screen-xl mx-auto'>
      <div className='flex flex-col sm:flex-row items-center justify-between mb-8 gap-4'>
        <h1 className='text-[#00105C] text-2xl sm:text-3xl md:text-4xl font-bold'>Investible Sectors</h1>
        <Link
          to="/allsectors"
          className='text-xs sm:text-sm md:text-base bg-red-500 hover:bg-red-600 text-white px-3 sm:px-4 py-2 rounded-md flex items-center gap-2 w-fit transition-colors duration-200'
        >
          View All Sectors <FaArrowRight />
        </Link>
      </div>

      <div className='relative'>
        {/* Slides */}
        <div 
          className='relative w-full overflow-hidden'
      
        >
          <div className={`flex justify-center gap-4 transition-transform duration-300 ease-in-out`}>
            {getVisibleSectors().map((sector, index) => (
              <div
                key={`${sector.id}-${currentIndex}`}
                className={`flex-shrink-0 w-full ${itemsToShow === 1 ? 'max-w-xs' : itemsToShow === 2 ? 'max-w-md' : 'max-w-sm'} transition-all duration-300`}
              >
                <div className="relative w-full h-[300px] sm:h-80 md:h-96 rounded-xl overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-[300px]  object-cover transition-all duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                    <h1 className='absolute bottom-8 left-4 text-white text-xl sm:text-2xl font-bold z-10'>
                      {sector.title}
                    </h1>
                  </div>

                  <div className="absolute inset-0 bg-white text-[#00105C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 sm:p-6 flex flex-col justify-center">
                    <h1 className="text-lg sm:text-xl font-bold mb-2">{sector.title}</h1>
                    <p className="text-sm sm:text-base line-clamp-3">{sector.description}</p>
                    <Link 
                      to={sector.link} 
                      className="mt-4 px-4 py-2 w-fit bg-red-500 hover:bg-red-600 text-white rounded-md text-center transition-colors duration-200"
                    >
                      {sector.btn}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className='hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-[#FF0000] hover:bg-red-600 text-white rounded-full p-2 shadow-md transition-colors duration-200 z-10'
          aria-label="Previous slide"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className='hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-[#FF0000] hover:bg-red-600 text-white rounded-full p-2 shadow-md transition-colors duration-200 z-10'
          aria-label="Next slide"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className='flex justify-center mt-6 gap-2'>
        {sectors.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${currentIndex === index ? 'bg-red-500 scale-125' : 'bg-gray-300'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Investible;