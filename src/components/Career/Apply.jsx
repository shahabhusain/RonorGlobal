import React, { useState } from 'react'
import logo from "../../assets/logo.png"
import { MdOutlineDepartureBoard } from "react-icons/md";
import { PiIdentificationCard } from "react-icons/pi";
import { AiOutlineShareAlt } from 'react-icons/ai'
import { MdMessage } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import Model from './Model';


const Apply = () => {
    const [openModel, setOpenModel] = useState(false)
  return (
        <div>
             <div className=' w-[95%] mx-auto my-20 absolute top-[23rem] left-8'>
        <div className=' bg- shadow-md p-12 rounded-xl bg-white'>
           <div className=' flex items-center justify-between'>
             <div className=' flex items-center gap-4'>
            <img src={logo} alt="" />
              <div>
                <h1 className=' text-[28px] font-[700] text-[#00105C]'>Junior Specialist</h1>
                <p className=' text-[20px] font-[500] text-black'>Company Secretary</p>
              </div>
           </div>
          <div className=' flex items-center gap-4'>
                <button onClick={()=> setOpenModel(true)} className=' text-white bg-red-500 px-5 py-2 rounded-lg text-[20px] font-[500]'>Apply</button>
           <span className=' bg-[#E2F0F9] p-3 rounded-md'><AiOutlineShareAlt size={20} /></span>
          </div>
          
           </div>
           <div className=' w-full h-[2px] bg-[#6b6a6a67] mt-4'></div>
            <div className=' flex items-center justify-between mt-6'>
                           <div className=' flex items-center gap-3'>
            <span className=' bg-[#E2F0F9] p-3 rounded-md'><MdOutlineDepartureBoard size={20} /></span>
             <div>
                <h1 className=' text-[18px] font-[400] text-[#00105C]'>Department</h1>
                <p className=' text-[18px] font-[700] text-black'>Invest Ghana</p>
              </div>
           </div>

                      <div className=' flex items-center gap-3'>
            <span className=' bg-[#E2F0F9] p-3 rounded-md'><PiIdentificationCard size={20} /></span>
             <div>
                <h1 className=' text-[18px] font-[400] text-[#00105C]'>Job ID</h1>
                <p className=' text-[18px] font-[700] text-black'>406</p>
              </div>
           </div>

                      <div className=' flex items-center gap-3'>
            <span className=' bg-[#E2F0F9] p-3 rounded-md'><MdMessage size={20} /></span>
             <div>
                <h1 className=' text-[18px] font-[400] text-[#00105C]'>Experience</h1>
                <p className=' text-[18px] font-[700] text-black'>5-6 Years</p>
              </div>
           </div>


                      <div className=' flex items-center gap-3'>
            <span className=' bg-[#E2F0F9] p-3 rounded-md'><MdLocationOn size={20} /></span>
             <div>
                <h1 className=' text-[18px] font-[400] text-[#00105C]'>Location</h1>
                <p className=' text-[18px] font-[700] text-black'>Delhi</p>
              </div>
           </div>

                      <div className=' flex items-center gap-3'>
            <span className=' bg-[#E2F0F9] p-3 rounded-md'><FaCalendarAlt size={20} /></span>
             <div>
                <h1 className=' text-[18px] font-[400] text-[#00105C]'>Date Posted</h1>
                <p className=' text-[18px] font-[700] text-black'>Posted 1 week ago</p>
              </div>
           </div>
            </div>
        </div>
        
        
    </div>
  {
  openModel ? <Model onClose={() => setOpenModel(false)} /> : null
}

        </div>
  )
}

export default Apply