import React from 'react'

const Chemical = () => {
  return (
    <div>
      <h1 className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px] font-[700] text-red-500'>Chemicals</h1>
      <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px] font-[400]'>
      India's chemicals sector is a vital industry that contributes significantly to the country's economy. It encompasses a wide range of products, including petrochemicals, agrochemicals, and speciality chemicals. The sector benefits from strong domestic demand, low-cost production, and a skilled workforce. Government initiatives like the "Make in India" campaign are further boosting the industry's growth. The sector offers promising opportunities for investors seeking exposure to a diverse and dynamic industry.
      </p>
      <div className=' flex flex-col md:flex-row items-center justify-between gap-12 mt-12'>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>USD 383 Bn</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>Projected market size by 2030</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>2nd</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>largest manufacturer and exporter of dyes</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>3rd</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>largest consumer of polymers</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>4th</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>largest producer of agrochemicals</p></button>
      </div>
    </div>
  )
}

export default Chemical