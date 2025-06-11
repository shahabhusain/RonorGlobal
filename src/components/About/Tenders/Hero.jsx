import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bgg44 md:h-[628px] h-[503px] flex flex-col md:gap-4 gap-2 pt-32 md:pl-20 p-5 '>
        <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[35px] font-[700] text-white'>TENDERS</h1>
        <p className=' text-white md:text-[20px] text-[15px] font-[600]'>REQUEST FOR PROPOSAL</p>
        <div className=' flex flex-col gap-5 bg-[#ffffff59] max-w-[422px] md:p-8 p-4 rounded-xl mt-6'>
            <h1  className=' text-white text-[24px] font-[600]'>Contact Us</h1>
            <p className=' md:text-[20px] text-[15px] font-[600] text-white'>procurement@investghana.org.in</p>
            <Link to="/contactus" className=' text-center bg-red-500 text-white md:text-[24px] text-[18px] font-[600] p-4 rounded-lg'>Connect</Link>
        </div>
    </div>
  )
}

export default Hero