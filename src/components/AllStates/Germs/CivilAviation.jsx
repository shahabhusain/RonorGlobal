import React from 'react'
import { Link } from 'react-router-dom'

const CivilAviation = () => {
  return (
    <div className='civill4 md:h-[500px] h-[300px] '>
   <div className='flex items-center justify-between gap-6 w-[90%] md:pt-52 pt-12 mx-auto'>
           <div className=' flex flex-col gap-3 md:max-w-[700px]'>
        <h1 className=' xl:text-[42px] lg:text-[35px] md:text-[30px] text-[25px] text-white font-[800]'>Gems & Jewellery</h1>
      <p className=' md:text-[20px] text-[12px] font-[600] bg-[#000f5c6b] md:p-6 p-2 rounded-xl text-white'>The gems and jewellery sector contributes 7% to Ghana's GDP and 15% of the country's total merchandise exports</p>
       </div>
      <div className=' flex flex-col gap-3 bg-[#ffffff5a] md:p-5 p-2 rounded-2xl md:max-w-[400px]'>
        <h1 className=' md:text-[24px] text-[15px] font-[700] text-white'>Connect with Sector Expert</h1>
        <Link to="/contactus" className=' md:text-[24px] text-[15px] font-[700] text-white bg-red-500 md:py-3 py-1 px-5 rounded-xl'>Connect</Link>
      </div>
   </div>
    </div>
  )
}

export default CivilAviation