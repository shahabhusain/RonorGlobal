import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import img1 from '../../assets/sli1.png'
import img2 from '../../assets/sli2.png'
import img3 from '../../assets/sli3.png'
import img4 from '../../assets/sli4.png'
import img5 from '../../assets/sli5.png'
const Slider = () => {
          const sectors = [
            {image: img1},
            {image: img2},
            {image: img3},
            {image: img4},
            {image: img5,}
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
          for (let i = 0; i < 4; i++) {
            const index = (currentIndex + i) % sectors.length
            visibleSectors.push(sectors[index])
          }
  return (
    <div className=' w-[90%] mx-auto mb-20'>
        <div>
                   <div className='  '>
              <div className='relative'>
                <div className='flex overflow-hidden'>
                  <div className='flex w-full items-center bg-[#f8f8f8] border-[1px] p-12 rounded-2xl border-[#00000013] justify-around transition-transform duration-300'>
                    {visibleSectors.map((sector, index) => (
                        <div key={index}>
                          <img
                            src={sector.image}
                            alt="image"
                          />
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
            </div>
                   </div>
           
                <div className=' flex flex-col gap-y-8 mt-20'>
                <h1 className=' flex items-center gap-4 text-[37px] font-[800] text-[#00105C]'><span className=' border-r-[8px] pr-3 border-red-500'>About</span> <span className=' border-r-[8px] pr-3 border-red-500'>Contact</span> <span className=' border-r-[8px] pr-3 border-red-500'>Cookies Policy</span> <span className=' border-r-[8px] pr-3 border-red-500'>DownloadsLinks</span> <span className=' border-r-[8px] pr-3 border-red-500'>Terms Of Service</span></h1>

<h1  className='text-[37px] font-[800] text-[#00105C]'>Use of the 'Make in Ghana’s logo is strictly prohibited without 
permission of <span className=' text-red-500'>DPIIT</span></h1>
                </div>
    </div>
  )
}

export default Slider