import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bgb md:h-[700px] h-[400px]'>
         <div className=' pt-12 w-[95%] mx-auto'>
         <h1 className=' text-white xl:text-[40px] lg:text-[35px] md:text-[30px] text-[20px] font-[800]'>Bonded Manufacturing</h1>
        <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[14px] font-[500] text-white'>Scheme for Manufacturing and processing in a Bonded Facility</p>
        <div className=' bg-[#ffffff26] md:p-12 p-5 flex flex-col gap-4 mt-12 w-fit'>
            <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[16px] font-[600] text-white'>Online Application (Annexure A)</h1>
            <p className=' md:text-[20px] text-[12px] font-[500] text-white max-w-[422px]'>Application for licensing private bonded facility and permission for 
            manufacturing & other operations</p>
            <Link to="/newapplication" className=' text-white bg-red-500 p-3 md:text-[20px] text-[12px] font-[600]'>New Application</Link>
        </div>
         </div>
    </div>
  )
}

export default Hero