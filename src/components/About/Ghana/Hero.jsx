import React from 'react'
import image from '../../../assets/About/gbg.png'
import logo from '../../../assets/logo.png'
import { FaCalendar, FaLocationArrow } from 'react-icons/fa'
const Hero = () => {
  return (
       <div>
        <div className='bgg md:h-[540px] h-[333px]'>
            <div className=' w-[95%] mx-auto'>
            <div className=' flex items-center pt-12 justify-between'>
          <img className=' md:w-[200px] w-[100px]' src={image} alt="" />
          <h1 className=' flex items-center md:gap-3 gap-1 xl:text-[30px] lg:text-[25px] md:text-[20px] text-[16px] font-[700] text-white'><img src={logo} alt="" /> Invest Ghana</h1>
          </div>
         <h1 className=' xl:text-[80px] lg:text-[60px] md:text-[50px] text-[30px] font-[800] text-white text-center pt-12'>
         #GHANA
         AtDavos 
         </h1>
            </div>
    </div>
    <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[15px]  font-[600] text-white bg-red-500 py-3 md:px-32 px-4 flex items-center justify-between'><span className=' flex items-center gap-4'><FaLocationArrow />Promenade 67 & 73, Davos, Switzerland </span>  <span className=' flex items-center gap-4'><FaCalendar /> January 20th-24th, 2025</span></h1>
       </div>
  )
}

export default Hero