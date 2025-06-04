import React, { useState } from 'react'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import img1 from '../../assets/AllSectors/agri.webp'
import img2 from '../../assets/AllSectors/oil.webp'
import img3 from '../../assets/AllSectors/health.jpg'
import img4 from '../../assets/AllSectors/ict.jpg'
import img5 from '../../assets/AllSectors/manu.jpeg'
import img6 from '../../assets/AllSectors/mining.webp'
import img7 from '../../assets/AllSectors/property.jpg'
import img8 from '../../assets/AllSectors/recreation.jpg'
import img9 from '../../assets/AllSectors/energy.jpg'
import img10 from '../../assets/AllSectors/education.jpg'
import img11 from '../../assets/AllSectors/finan.jpg'
import img12 from '../../assets/AllSectors/trans.png'

const sectors = [
  { id: 1, title: "Agriculture & Agro Processing", image: img1, description: "Ghana’s electricity supply is derived...", link: "/agriculture" },
  { id: 2, title: "Oil & Gas", image: img2, description: "AfCFTA presents an opportunity for intra-regional growth...", link: "/oil" },
  { id: 3, title: "Health", image: img3, description: "It is estimated that health expenditure reached USD2.3bn...", link: "/health" },
  { id: 4, title: "ICT And Fintech", image: img4, description: "International arrivals of tourist increased...", link: "/ict" },
  { id: 5, title: "Manufacturing", image: img5, description: "Ghana is ranked the second most peaceful country...", link: "/manufacture" },
  { id: 6, title: "Mining And Mineral Processing", image: img6, description: "Newly discovered deposits of lithium...", link: "/mining" },
  { id: 7, title: "Property Development", image: img7, description: "Water is provided to citizens through...", link: "/property" },
  { id: 8, title: "Recreation And Tourism", image: img8, description: "Government incentives include tax holidays...", link: "/recreation" },
  { id: 9, title: "Energy", image: img9, description: "Ghana is blessed with a very youthful population...", link: "/energy" },
  { id: 10, title: "Education", image: img10, description: "Ghana has a robust education system...", link: "/education" },
  { id: 11, title: "Financial Services", image: img11, description: "Government incentives include tax holidays...", link: "/financial" },
  { id: 12, title: "Transport Infrastructure", image: img12, description: "Water is provided to citizens through...", link: "/transport" },
]

const Investible = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => setCurrentIndex((prev) => (prev === sectors.length - 1 ? 0 : prev + 1))
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? sectors.length - 1 : prev - 1))

  const visibleSectors = []
  const itemsToShow = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3

  for (let i = 0; i < itemsToShow; i++) {
    const index = (currentIndex + i) % sectors.length
    visibleSectors.push(sectors[index])
  }

  return (
    <div className='mt-20 w-[95%] max-w-screen-xl mx-auto'>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4'>
        <h1 className='text-[#00105C] text-3xl sm:text-4xl font-bold'>Investible Sectors</h1>
        <Link
          to="/allsectors"
          className='text-sm sm:text-base bg-red-500 text-white px-4 py-2 rounded-md flex items-center gap-2 w-fit'
        >
          View All Sectors <FaArrowRight />
        </Link>
      </div>

      <div className='relative'>
        {/* Slides */}
        <div className='flex overflow-hidden'>
          <div className='flex flex-wrap justify-center w-full transition-transform duration-300 gap-4'>
            {visibleSectors.map((sector, index) => (
              <div
                key={sector.id}
                className={`w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[500px] ${index === 1 ? 'scale-105' : ''} transition-transform`}
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden group shadow-md">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />
                  <h1 className='absolute top-24 left-4 text-white text-xl sm:text-2xl md:text-3xl font-bold z-10'>
                    {sector.title}
                  </h1>

                  <div className="absolute inset-0 bg-white text-[#00105C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 sm:p-6 flex flex-col justify-center items-start">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2">{sector.title}</h3>
                    <p className="text-sm sm:text-base">{sector.description}</p>
                    <Link to={sector.link} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className='hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hover:text-black bg-[#FF0000] text-white rounded-full p-2 shadow-md hover:bg-gray-100'
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className='hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hover:text-black bg-[#FF0000] text-white rounded-full p-2 shadow-md hover:bg-gray-100'
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots */}
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
