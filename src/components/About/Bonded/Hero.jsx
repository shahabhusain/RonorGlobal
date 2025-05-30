import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bgb'>
         <div className=' pt-12 w-[95%] mx-auto'>
         <h1 className=' text-white text-[40px] font-[800]'>Bonded Manufacturing</h1>
        <p className=' text-[20px] font-[500] text-white'>Scheme for Manufacturing and processing in a Bonded Facility</p>
        <div className=' bg-[#ffffff26] p-12 flex flex-col gap-4 mt-12 w-fit'>
            <h1 className=' text-[30px] font-[600] text-white'>Online Application (Annexure A)</h1>
            <p className=' text-[20px] font-[500] text-white max-w-[422px]'>Application for licensing private bonded facility and permission for 
            manufacturing & other operations</p>
            <Link to="/newapplication" className=' text-white bg-red-500 p-3 text-[20px] font-[600]'>New Application</Link>
        </div>
         </div>
    </div>
  )
}

export default Hero