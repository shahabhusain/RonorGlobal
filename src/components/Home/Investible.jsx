import React, { useState } from 'react'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import img1 from '../../assets/sec1.png'
import img2 from '../../assets/sec2.png'
import img3 from '../../assets/sec3.png'

const Investible = () => {
  const sectors = [
    {
      id: 1,
      title: "Capital Goods",
      image: img1
    },
    {
      id: 2,
      title: "Electric Mobility",
      image: img2
    },
    {
      id: 3,
      title: "Electronic Components and Materials",
      image: img3
    },
    // Add more sectors as needed
    {
      id: 4,
      title: "Agriculture",
      image: img1 // Replace with actual image
    },
    {
      id: 5,
      title: "Biotechnology",
      image: img2 // Replace with actual image
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === sectors.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? sectors.length - 1 : prevIndex - 1
    )
  }

  // Determine which sectors to display based on currentIndex
  const visibleSectors = []
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % sectors.length
    visibleSectors.push(sectors[index])
  }

  return (
    <div className='mt-20 w-[90%] mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-[#00105C] text-[32px] md:text-[42px] font-[700]'>Investible Sectors</h1>
        <button className='text-[16px] md:text-[20px] text-white font-[600] bg-red-500 py-2 px-4 md:py-3 md:px-5 rounded-md flex items-center gap-2 md:gap-4'>
          View All Sectors <FaArrowRight />
        </button>
      </div>

      <div className='relative'>
        <div className='flex overflow-hidden'>
          <div className='flex w-full transition-transform duration-300'>
            {visibleSectors.map((sector, index) => (
              <div 
                key={sector.id} 
                className={`flex-shrink-0 w-full md:w-1/3 px-2 ${index === 1 ? 'scale-105' : ''}`}
              >
                <div>
                  <img 
                    src={sector.image} 
                    alt={sector.title} 
                    className='w-full object-cover relative'
                  />
                 
                    <h3 className='text-[#fff] text-lg md:text-[42px] font-semibold absolute top-[17rem] leading-[3rem] p-4'>{sector.title}</h3>
                 
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hover:text-black bg-[#FF0000] text-white rounded-full p-2 shadow-md hover:bg-gray-100'
        >
          <FaChevronLeft  />
        </button>
        <button 
          onClick={nextSlide}
          className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hover:text-black bg-[#FF0000] text-white rounded-full p-2 shadow-md hover:bg-gray-100 border-[#ffffff4d] border-[2px]'
        >
          <FaChevronRight  />
        </button>
      </div>

      {/* Dots indicator */}
      <div className='flex justify-center mt-6 space-x-2'>
        {sectors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-red-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Investible