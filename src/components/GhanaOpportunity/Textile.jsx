import React from 'react'

const Texttile = () => {
  return (
    <div>
      <h1 className=' text-[40px] font-[700] text-red-500'>Textiles</h1>
      <p className=' text-[18px] font-[400]'>India is among the top five producers, commanding 4% of the global trade in textiles and apparel, 23% of world cotton and 95% of handwoven fabric hail from India. With a 2.3% contribution to India's Gross Domestic Product (GDP) and being the second-largest employer, this sector holds strategic significance for India, playing a crucial role in trade, investment, and the sustenance of livelihoods for approximately 6.5 Mn cotton farmers.</p>
      <div className=' flex items-center justify-between gap-12 mt-12'>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 text-[20px] font-[700]'>$100 Bn</h1> <p className=' text-[18px]'>India’s textile exports by 2030</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 text-[20px] font-[700]'>10% CAGR</h1> <p className=' text-[18px]'>Of India’s textile industry, reaching $350 Bn by 2030</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 text-[20px] font-[700]'>$10 Bn</h1> <p className=' text-[18px]'>India’s export of technical textiles by 2030</p></button>
      </div>
    </div>
  )
}

export default Texttile