import React from 'react'

const Hero = () => {
  return (
    <div className=' bgbb3'>
           <div className=' flex items-center justify-between w-[90%] mx-auto pt-32'>
              <div className=' flex flex-col gap-3'>
        <h1 className=' text-[45px] font-[800] text-white'>CAREERS</h1>
         <button className=' text-white border-t-red-500 py-2 border-b-red-500 border-b-[1px] border-t-[1px] text-[20px] font-[500]'>opportunities</button>
       </div>

        <div className=' flex gap-20'>
              <div className=' flex flex-col gap-3 bg-[#ffffff3e] p-5 rounded-xl w-[350px]'>
        <h1 className=' text-[28px] font-[800] text-white'>Work With Us</h1>
        <div className=' w-full h-[1px] bg-red-500'></div>
        <button className=' bg-red-500 text-white px-5 py-2 text-[20px] rounded-full font-[500]'>View Latest Job</button>
       </div>
              <div className=' flex flex-col gap-3 bg-[#ffffff3e] p-5 rounded-xl w-[350px]'>
        <h1 className=' text-[28px] font-[800] text-white'>Apply for Internship</h1>
        <div className=' w-full h-[1px] bg-red-500'></div>
        <button className=' bg-red-500 text-white px-5 py-2 text-[20px] rounded-full font-[500]'>Apply</button>
       </div>
        </div>
           </div>
    </div>
  )
}

export default Hero