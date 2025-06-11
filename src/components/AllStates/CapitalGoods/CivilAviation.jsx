import React from 'react'
import { Link } from 'react-router-dom'

const CivilAviation = () => {
  return (
    <div className='civill2 md:h-[500px] h-[300px] '>
   <div className='flex items-center justify-between gap-6 w-[90%] md:pt-52 pt-20 mx-auto'>
           <div className=' flex flex-col gap-3 max-w-[700px]'>
        <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[20px] text-white font-[800]'>Capital  Goods</h1>
      <p className=' md:text-[20px] text-[12px] font-[600] bg-[#000f5c6b] md:p-6 p-2 rounded-xl text-white'>Ghana's capital goods sector is a robust growth engine, driven by government infrastructure investments and manufacturing focus, offering significant investment potential.</p>
       </div>
      <div className=' flex flex-col gap-3 bg-[#ffffff5a] md:p-5 p-2 rounded-2xl md:max-w-[400px]'>
        <h1 className=' md:text-[24px] text-[15px] font-[700] text-white'>Connect with Sector Expert</h1>
        <Link to="/contactus" className=' text-center md:text-[24px] text-[17px] font-[700] text-white bg-red-500 md:py-3 py-1 md:px-5 px-2 rounded-xl'>Connect</Link>
      </div>
   </div>
    </div>
  )
}

export default CivilAviation