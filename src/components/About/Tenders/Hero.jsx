import React from 'react'

const Hero = () => {
  return (
    <div className='bgg44 flex flex-col gap-4 pt-32 pl-20 '>
        <h1 className=' text-[42px] font-[700] text-white'>TENDERS</h1>
        <p className=' text-white text-[20px] font-[600]'>REQUEST FOR PROPOSAL</p>
        <div className=' flex flex-col gap-5 bg-[#ffffff59] max-w-[422px] p-8 rounded-xl mt-6'>
            <h1 className=' text-white text-[24px] font-[600]'>Contact Us</h1>
            <p className=' text-[20px] font-[600] text-white'>procurement@investindia.org.in</p>
            <button className=' bg-red-500 text-white text-[24px] font-[600] p-4 rounded-lg'>Connect</button>
        </div>
    </div>
  )
}

export default Hero