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
    { image: "https://images.openai.com/thumbnails/6532680b0cd7e46dff6967f4184b2122.jpeg" },
    { image: "https://i0.wp.com/ghana-invest.org/wp-content/uploads/2021/12/ghana-01.png?fit=2084%2C859&ssl=1" },
    { image: "https://images.squarespace-cdn.com/content/v1/64350f273f788a47f330939f/8321157a-d3a0-4714-9adf-0e4ccbdf0748/Logo%2BNEW.png" },
    { image: "https://academy.itu.int/sites/default/files/styles/image_rectangular/public/media2/image/GIFEC_0.jpg?itok=vPlXhN-J" },
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
    <div className='bg-[#00105C] p-4 md:p-6 rounded-3xl w-[95%] mx-auto mt-20 flex flex-col lg:flex-row gap-6 items-start justify-between'>
      {/* Left Section */}
      <div className='w-full lg:w-[70%]'>
        <div className='flex justify-center'>
          <button className='text-[22px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-bold text-white bg-red-500 py-2 px-5 rounded-md'>
            Initiatives
          </button>
        </div>

        <div className='bg-white p-4 md:p-6 rounded-3xl mt-6'>
          <h1 className='uppercase text-[20px] sm:text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-semibold text-[#00105C] border-b-4 border-b-red-500 pb-2 w-fit'>
            Make in Ghana
          </h1>

          <div className='flex flex-col md:flex-row items-center gap-6 mt-6 justify-between'>
            <div className='flex flex-col gap-4'>
              <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium text-black'>
                The Make in Ghana initiative was launched by the Prime Minister in September 2014 as part of a wider set of nation-building initiatives. Devised to transform ghana into a global design and manufacturing hub, Make in ghana was a timely response to a critical situation.
              </p>
              <Link to="/latest" className='flex items-center w-fit gap-2 text-white bg-[#00105C] py-2 px-5 rounded-full text-[14px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-semibold'>
                More Detail <FaArrowRight />
              </Link>
            </div>
          </div>

          <div className='bg-[#00000070] h-[2px] w-full mt-5'></div>

          <div className='mt-5 relative'>
            <div className='flex overflow-hidden'>
              <div className='flex w-full items-center justify-around transition-transform duration-300'>
                {visibleSectors.map((sector, index) => (
                  <div key={index}>
                    <img
                      src={sector.image}
                      alt="sector"
                      className='w-[60px] sm:w-[80px] md:w-[100px] lg:w-[150px] xl:w-[200px]'
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

      {/* Right Section */}
      <div className='w-full lg:w-[30%] relative'>
        <img src={shak} alt="shak" className='w-full rounded-xl' />
        <div className='absolute top-10 px-4 md:px-6 lg:px-8 text-center flex flex-col items-center justify-center gap-y-6'>
          <h1 className='text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold text-red-500'>
            Come Work With Us
          </h1>
          <p className='text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] font-medium text-white'>
            We are an organisation of young & vibrant professionals, looking for candidates who are passionate about ghana...
          </p>
          <button className='flex items-center w-fit gap-2 text-white bg-[#00105C] py-2 px-5 rounded-full text-[14px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-semibold'>
            Know more <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Initiatives
