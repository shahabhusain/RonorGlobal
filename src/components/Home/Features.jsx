import React from 'react'
import fea from '../../assets/fea.png'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
const Features = () => {
  return (
    <div className=' bg-[#00105C] px-12 py-6 flex gap-12 mt-20'>
        <div className=' w-[40%]'>
            <img src={fea} alt="" />
            <button className=' text-[25px] font-[800] text-red-500 bg-white py-3 px-5 rounded-md mt-4'>Become the next success story</button>
        </div>

        <div className=' w-[60%] flex flex-col gap-5'>
          <h1 className=' text-[40px] font-[700] text-white border-b-red-500 border-b-[2px]'>Featured Success Stories</h1>
           <p className=' text-[20px] font-[500] text-white'>Inspiring Tales of Achievement and Triumph</p>
           <h1 className='border-b-red-500 border-b-[2px] text-white text-[40px] font-[700]'>ADDVERB</h1>
           <h1 className=' text-[20px] font-medium text-white flex items-center gap-4'><span className=' text-red-500'><MdOutlineKeyboardDoubleArrowRight /></span>Invest ghana helped secure land in 15 days for a quick factory setup</h1>
           <h1  className=' text-[20px] font-medium text-white flex items-center gap-4'><span className=' text-red-500'><MdOutlineKeyboardDoubleArrowRight /></span>ADDVERB chose Uttar Pradesh based on the assessment</h1>
           <h1  className=' text-[20px] font-medium text-white flex items-center gap-4'><span className=' text-red-500'><MdOutlineKeyboardDoubleArrowRight /></span>Fast-tracked clearances, approvals and coordinated meetings with government agencies 
           </h1>

           <h1  className=' text-[20px] font-medium text-white flex items-center gap-4'><span className=' text-red-500'><MdOutlineKeyboardDoubleArrowRight /></span>Provided comprehensive support and guidance, acting as a key catalyst for Adverb's growth and success 
           </h1>

           <div className=' flex items-center justify-between'>
            <button className=' text-white bg-red-500 py-3 px-5 text-[18px] font-[600] rounded-md'>Contact Us Now</button>
              <div className=' bg-white py-3 px-5 rounded-md'>
                <h1 className=' text-red-500 font-[800] text-[40px]'>ADDVERB</h1>
                <div className=' flex items-center gap-4'>
                    <p className=' text-[#00105C] text-[16px] font-[500] border-r-[#00105C] border-r-[2px] pr-4 '>Human</p>
                    <p className=' text-[#00105C] text-[16px] font-[500] border-r-[#00105C] border-r-[2px] pr-4 '>Robot</p>
                    <p className=' text-[#00105C] text-[16px] font-[500] border-r-[#00105C] border-r-[2px] pr-4 '>Possibilities</p>
                </div>
              </div>
           </div>
           
        </div>
    </div>
  )
}

export default Features