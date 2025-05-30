import React from 'react'
import image from '../../../assets/About/gbg.png'
import logo from '../../../assets/logo.png'
import { FaCalendar, FaLocationArrow } from 'react-icons/fa'
const Hero = () => {
  return (
       <div>
        <div className='bgg'>
            <div className=' w-[95%] mx-auto'>
            <div className=' flex items-center pt-12 justify-between'>
          <img src={image} alt="" />
          <h1 className=' flex items-center gap-3 text-[30px] font-[700] text-white'><img src={logo} alt="" /> Invest Ghana</h1>
          </div>
         <h1 className=' text-[80px] font-[800] text-white text-center pt-12'>
         #GHANA
         AtDavos 
         </h1>
            </div>
    </div>
    <h1 className=' text-[30px] font-[600] text-white bg-red-500 py-3 px-32 flex items-center justify-between'><span className=' flex items-center gap-4'><FaLocationArrow />Promenade 67 & 73, Davos, Switzerland </span>  <span className=' flex items-center gap-4'><FaCalendar /> January 20th-24th, 2025</span></h1>
       </div>
  )
}

export default Hero