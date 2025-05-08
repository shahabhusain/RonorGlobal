import React from 'react'
import hero from '../../assets/image.png'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className=' bg1'>
       <div className='flex flex-col gap-5 items-center w-[70%] mx-auto'>
       <h1 className='text-[98px] font-[800] text-stroke mt-12 floating-text'>Ghana</h1>

       <button className=' text-[27px] rounded-md font-[600] text-white py-3 px-6 bg-red-500'>A LAND OF ECONOMIC OPPORTUNITIES</button>

       <div className=' bg-[#ffffff31] border-[#ffffff61] border-[2px]  rounded-lg flex items-center justify-center  p-6 gap-6'>
        <div className=' flex flex-col gap-5 border-r-[2px] rounded-sm border-r-[#ffffff77] pr-6'>
          <img className=' w-[70px]' src={img1} alt="" />
          <h1 className=' text-[18px] font-[700] text-white'>5th Largest Economy</h1>
          <p className=' text-[16px] font-[500] text-white max-w-[333px] '>Estimated GDP Growth: 6.4% (FY25)
          Fastest Among Large Economies</p>
        </div>

        <div className=' flex flex-col gap-5 border-r-[2px] rounded-sm border-r-[#ffffff77] pr-6'>
          <img className=' w-[70px]' src={img2} alt="" />
          <h1 className=' text-[18px] font-[700] text-white'>Robust FDI</h1>
          <p className=' text-[16px] font-[500] text-white max-w-[333px]'>69.14% of total FDI inflows (since April 2000) came after 2014</p>
        </div>

        <div className=' flex flex-col gap-5'>
          <img className=' w-[70px]' src={img3} alt="" />
          <h1 className=' text-[18px] font-[700] text-white'>Booming Exports</h1>
          <p className=' text-[16px] font-[500] text-white'>Total: 433.09 Bn during FY 2023-24</p>
        </div>
       </div>
        <Link to="/opportunity" className=' text-[20px] font-[600] bg-red-500 text-white py-3 px-5 rounded-md flex items-center gap-5 hover:px-12 transition-all duration-300 ease-in-out'>Know More <FaArrowRight /></Link>
       </div>
    </div>
  )
}

export default Hero