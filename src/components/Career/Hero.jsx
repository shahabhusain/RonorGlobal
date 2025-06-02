import React from 'react'

const Hero = () => {
  return (
    <div className=' bgbb3'>
           <div className=' flex items-center justify-between w-[90%] mx-auto pt-32'>
              <div className=' flex flex-col gap-3'>
        <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[800] text-white'>CAREERS</h1>
         <button className=' text-white border-t-red-500 py-2 border-b-red-500 border-b-[1px] border-t-[1px] xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[500]'>opportunities</button>
       </div>

        <div className=' flex xl:gap-20 gap-4'>
              <div className=' flex flex-col gap-3 bg-[#ffffff3e] p-5 rounded-xl w-[350px]'>
        <h1 className='xl:text-[28px] lg:text-[20px] font-[800] text-white'>Work With Us</h1>
        <div className=' w-full h-[1px] bg-red-500'></div>
        <button className=' bg-red-500 text-white px-5 py-2 xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] rounded-full font-[500]'>View Latest Job</button>
       </div>
              <div className=' flex flex-col gap-3 bg-[#ffffff3e] p-5 rounded-xl w-[350px]'>
        <h1 className=' xl:text-[28px]  lg:text-[20px]font-[800] text-white'>Apply for Internship</h1>
        <div className=' w-full h-[1px] bg-red-500'></div>
        <button className=' bg-red-500 text-white px-5 py-2 xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] rounded-full font-[500]'>Apply</button>
       </div>
        </div>
           </div>
    </div>
  )
}

export default Hero