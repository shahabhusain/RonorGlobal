import React from 'react'

const Texttile = () => {
  return (
    <div>
      <h1 className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px] font-[700] text-red-500'>Textiles</h1>
      <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px] font-[400]'>Ghana is among the top five producers, commanding 4% of the global trade in textiles and apparel, 23% of world cotton and 95% of handwoven fabric hail from Ghana. With a 2.3% contribution to Ghana's Gross Domestic Product (GDP) and being the second-largest employer, this sector holds strategic significance for Ghana, playing a crucial role in trade, investment, and the sustenance of livelihoods for approximately 6.5 Mn cotton farmers.</p>
      <div className=' flex flex-col md:flex-row items-center justify-between gap-12 mt-12'>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>$100 Bn</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>Ghana’s textile exports by 2030</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>10% CAGR</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>Of Ghana’s textile industry, reaching $350 Bn by 2030</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>$10 Bn</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>Ghana’s export of technical textiles by 2030</p></button>
      </div>
    </div>
  )
}

export default Texttile