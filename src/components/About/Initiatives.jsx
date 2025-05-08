import React, { useState } from 'react'
import lion from '../../assets/lion.png'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import img1 from '../../assets/sli1.png'
import img2 from '../../assets/sli2.png'
import img3 from '../../assets/sli3.png'
import img4 from '../../assets/sli4.png'
import img5 from '../../assets/sli5.png'
import shak from '../../assets/shak.png'
import { Link } from 'react-router-dom'
const Initiatives = () => {
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
    <div className=' bg-[#00105C] p-6 rounded-3xl w-[90%] mx-auto mt-20 flex items-center gap-6 justify-between'>
        <div className=' w-[70%]'>
        <div className=' flex items-center justify-center'>
       <button className=' text-[40px] font-[700] text-white bg-red-500 py-2 px-5 rounded-md'>Initiatives</button> 
       </div>
       <div className=' bg-white p-6 rounded-3xl mt-6'>
           <h1 className=' uppercase text-[40px] font-[600] text-[#00105C] border-b-[3px] border-b-red-500 pb-2 w-fit'>Make in Ghana</h1>
           <div className=' flex items-center gap-12 mt-6 justify-between'>
            <img src={lion} alt="" />
            <div className=' flex flex-col gap-4'>
            <p className=' text-[18px] font-[500] text-black'>The Make in Ghana initiative was launched by the Prime Minister in September 2014 as part of a wider set of nation-building initiatives. Devised to transform India into a global design and manufacturing hub, Make in India was a timely response to a critical situation.</p>
            <Link to="/latest" className=' flex items-center w-fit gap-2 text-white bg-[#00105C] py-2 px-5 rounded-full text-[20px] font-[600]'>More Detail <FaArrowRight /></Link>
            </div>
           </div>
         
           <div className=' bg-[#00000070] h-[2px] w-full mt-5'></div>
           
           <div>
           <div className=' mt-5'>
      <div className='relative'>
        <div className='flex overflow-hidden'>
          <div className='flex w-full items-center justify-around transition-transform duration-300'>
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
       </div>
        </div>


       <div className=' w-[30%] relative'>
           <img src={shak} alt="" />
             <div className=' absolute top-12 px-12 text-center flex flex-col items-center justify-center gap-y-20'>
             <h1 className=' text-[32px] font-[700] text-red-500'>Come Work With Us</h1>
             <p className=' text-[18px] font-[500] text-white'>We are an organisation of young & vibrant professionals, looking for candidates who are passionate about India’s...</p>
             <button className=' flex items-center w-fit gap-2 text-white bg-[#00105C] py-2 px-5 rounded-full text-[20px] font-[600]'>Know more <FaArrowRight /></button>
             </div>
       </div>
    </div>
  )
}

export default Initiatives