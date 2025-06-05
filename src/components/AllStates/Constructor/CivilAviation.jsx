import React from 'react'

const CivilAviation = () => {
  return (
    <div className='civill md:h-[500px] h-[300px] '>
   <div className='flex items-center justify-between gap-12 w-[90%] md:pt-52 pt-12 mx-auto'>
           <div className=' flex flex-col gap-3 max-w-[700px]'>
        <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] text-white font-[800]'>Construction</h1>
      <p className=' md:text-[20px] text-[12px] font-[600] bg-[#000f5c6b] md:p-6 p-2 rounded-xl text-white'>Ghana's construction sector drives economic growth, with robust infrastructure investments, expanding logistics, and a focus on sustainable development.</p>
       </div>
      <div className=' flex flex-col gap-3 bg-[#ffffff5a] md:p-5 p-2 rounded-2xl max-w-[400px]'>
        <h1 className=' md:text-[24px] text-[15px] font-[700] text-white'>Connect with Sector Expert</h1>
        <button className=' md:text-[24px] text-[15px] font-[700] text-white bg-red-500 py-3 px-5 rounded-xl'>Connect</button>
      </div>
   </div>
    </div>
  )
}

export default CivilAviation