import React from 'react'
import { Link } from 'react-router-dom'

const CivilAviation = () => {
  return (
    <div className='civil md:h-[500px] h-[300px] '>
   <div className='flex items-center gap-6 justify-between w-[90%] md:pt-52 pt-8 mx-auto'>
           <div className=' flex flex-col gap-3 md:max-w-[700px]'>
        <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] text-white font-[800]'>Civil Aviation</h1>
      <p className=' md:text-[20px] text-[12px] font-[600] md:max-w-full max-w-[300px] bg-[#000f5c6b] md:p-6 p-2 rounded-xl text-white'>Rapid growth, driven by increased air travel demand, government initiatives, and infrastructure development, positioning the country as a global aviation hub</p>
       </div>
      <div className=' flex flex-col gap-3 bg-[#ffffff5a] md:p-5 p-2 rounded-2xl max-w-[400px]'>
        <h1 className=' md:text-[24px] text-[15px] font-[700] text-white'>Connect with Sector Expert</h1>
        <Link to="/contactus" className=' text-center md:text-[24px] text-[15px] text-white bg-red-500 md:py-3 py-1 md:px-5 px-2 rounded-xl'>Connect</Link>
      </div>
   </div>
    </div>
  )
}

export default CivilAviation