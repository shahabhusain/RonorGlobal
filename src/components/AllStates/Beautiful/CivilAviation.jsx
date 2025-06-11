import React from 'react'
import { Link } from 'react-router-dom'

const CivilAviation = () => {
  return (
    <div className='civill1 md:h-[500px] h-[300px]'>
   <div className='flex items-center justify-between gap-6 w-[90%] md:pt-52 pt-12 mx-auto'>
           <div className=' flex flex-col gap-3 md:max-w-[700px]'>
        <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] text-white font-[800]'>Beauty & Personal Care</h1>
      <p className=' md:text-[20px] text-[12px] font-[600] bg-[#000f5c6b] mf:p-6 p-2 rounded-xl text-white'>Ghana's BPC market currently sized at $20 Bn is set to grow at a CAGR of 10-11%, reaching $34 Bn by 2028</p>
       </div>
      <div className=' flex flex-col gap-3 bg-[#ffffff5a] md:p-5 p-2 rounded-2xl md:max-w-[400px]'>
        <h1 className=' md:text-[24px] text-[15px] font-[700] text-white'>Connect with Sector Expert</h1>
        <Link to="/contactus" className=' text-center md:text-[24px] text-[15px] font-[700] text-white bg-red-500 md:py-3 px-5 py-1  rounded-xl'>Connect</Link>
      </div>
   </div>
    </div>
  )
}

export default CivilAviation