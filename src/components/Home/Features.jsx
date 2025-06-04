import React from 'react'
import fea from '../../assets/fea.png'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const Features = () => {
  return (
    <div className='bg-[#00105C] px-4 md:px-8 lg:px-12 py-6 flex flex-col lg:flex-row gap-8 mt-20'>
      
      {/* Left Section */}
      <div className='w-full lg:w-[40%] flex flex-col items-center lg:items-start'>
        <img src={fea} alt="Featured" className='w-full max-w-[350px] object-contain' />
        <button className='text-[14px] md:text-[15px] lg:text-[20px] xl:text-[25px] font-[800] text-red-500 bg-white py-3 px-5 rounded-md mt-4 text-center'>
          Become the next success story
        </button>
      </div>

      {/* Right Section */}
      <div className='w-full lg:w-[60%] flex flex-col gap-4'>
        <h1 className='text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-[700] text-white border-b-[2px] border-b-red-500'>
          Featured Success Stories
        </h1>
        <p className='text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] font-[500] text-white'>
          Inspiring Tales of Achievement and Triumph
        </p>

        <h1 className='text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-[700] text-white border-b-[2px] border-b-red-500'>
          ADDVERB
        </h1>

        {[
          "Invest ghana helped secure land in 15 days for a quick factory setup",
          "ADDVERB chose Uttar Pradesh based on the assessment",
          "Fast-tracked clearances, approvals and coordinated meetings with government agencies",
          "Provided comprehensive support and guidance, acting as a key catalyst for Adverb's growth and success"
        ].map((text, index) => (
          <h1 key={index} className='text-[14px] md:text-[15px] lg:text-[17px] xl:text-[20px] font-medium text-white flex items-start gap-3'>
            <span className='text-red-500 mt-1'><MdOutlineKeyboardDoubleArrowRight /></span>
            {text}
          </h1>
        ))}

        <div className='flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-4'>
          <button className='text-[15px] md:text-[16px] lg:text-[17px] xl:text-[20px] font-[600] text-white bg-red-500 py-3 px-5 rounded-md'>
            Contact Us Now
          </button>

          <div className='bg-white py-3 px-5 rounded-md w-full md:w-auto'>
            <h1 className='text-[25px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-[800] text-red-500'>
              ADDVERB
            </h1>
            <div className='flex flex-wrap items-center gap-3 mt-2'>
              {["Human", "Robot", "Possibilities"].map((label, i) => (
                <p
                  key={i}
                  className='text-[#00105C] text-[14px] md:text-[16px] font-[500] pr-4 border-r-2 last:border-r-0'
                >
                  {label}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
