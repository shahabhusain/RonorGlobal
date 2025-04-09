import React, { useState } from 'react'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import img1 from '../../assets/sec1.png'
import img2 from '../../assets/sec2.png'
import img3 from '../../assets/sec3.png'
import { Link } from 'react-router-dom'

const Investible = () => {
  const sectors = [
    {
      id: 1,
      title: "Capital Goods",
      image: img1,
      description:
        "Capital Goods sector is experiencing significant growth, focusing on industrial equipment and infrastructure."
    },
    {
      id: 2,
      title: "Electric Mobility",
      image: img2,
      description:
        "Electric Mobility is revolutionizing transportation with eco-friendly electric vehicles and innovations."
    },
    {
      id: 3,
      title: "Electronic Components and Materials",
      image: img3,
      description:
        "This sector supports the backbone of electronics with vital components and advanced materials."
    },
    {
      id: 4,
      title: "Agriculture",
      image: img1,
      description:
        "Agriculture remains the foundation of rural economy and is embracing technology-driven growth."
    },
    {
      id: 5,
      title: "Biotechnology",
      image: img2,
      description:
        "Biotechnology drives advancements in medicine, agriculture, and sustainability."
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

  const visibleSectors = []
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % sectors.length
    visibleSectors.push(sectors[index])
  }

  return (
    <div className='mt-20 w-[90%] mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-[#00105C] text-[32px] md:text-[42px] font-[700]'>Investible Sectors</h1>
        <Link to="/allsectors" className='text-[16px] md:text-[20px] text-white font-[600] bg-red-500 py-2 px-4 md:py-3 md:px-5 rounded-md flex items-center gap-2 md:gap-4'>
          View All Sectors <FaArrowRight />
        </Link>
      </div>

      <div className='relative'>
        <div className='flex overflow-hidden'>
          <div className='flex w-full items-center justify-around transition-transform duration-300'>
            {visibleSectors.map((sector, index) => (
              <div
                key={sector.id}
                className={` w-[400px] h-[520px] px-2 ${index === 1 ? 'scale-105' : ''}`}
              >
                <div className="relative w-full  rounded-xl overflow-hidden group shadow-lg">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />

                   <h1 className=' absolute top-40 text-white text-[40px] font-[700] p-6'>{sector.title}</h1>

                  <div className="absolute inset-0 bg-white shadow-lg text-[#00105C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-center items-start">
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{sector.title}</h3>
                    <p className="text-sm md:text-base">{sector.description}</p>
                    <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
                      Know More
                    </button>
                  </div>
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
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hover:text-black bg-[#FF0000] text-white rounded-full p-2 shadow-md hover:bg-gray-100 border-[#ffffff4d] border-[2px]'
        >
          <FaChevronRight />
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
