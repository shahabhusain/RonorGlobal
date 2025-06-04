import React from 'react'

const Pharmace = () => {
  return (
    <div>
      <h1 className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px] font-[700] text-red-500'>Pharmaceuticals</h1>
      <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]  font-[400]'>India is known as the “Pharmacy of the World." With a robust manufacturing base, skilled workforce, and cost efficiency, it supplies over 50% of global vaccine demand and 40% of generic drugs to the U.S. market. Government initiatives like the PLI scheme and investments in R&D foster innovation and growth. The sector offers significant opportunities in generics, biosimilars, and emerging markets, driving global healthcare and economic resilience.</p>
      <div className=' flex flex-col md:flex-row items-center justify-between gap-12 mt-12'>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 lg:text-[20px] md:text-[15px] text-[10px] font-[700]'>~11% CAGR</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] '>~11% CAGR of India’s pharma sector, poised to reach $130 Bn by 2030</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 lg:text-[20px] md:text-[15px] text-[10px] font-[700]'>3rd</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] '>largest destination for clinical trials, with ~8% of global CTs registered in India</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 lg:text-[20px] md:text-[15px] text-[10px] font-[700]'>20%</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] '>of Global Biosimiliar development pipeline is in India</p></button>
      </div>
    </div>
  )
}

export default Pharmace