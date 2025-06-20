import React from 'react'

const Food = () => {
  return (
    <div>
      <h1 className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px] font-[700] text-red-500'>Food Processing</h1>
      <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px] font-[400]'>Ghana's food processing sector is a dynamic and rapidly growing industry, driven by increasing urbanisation, rising disposable incomes, and changing consumer preferences. The government's focus on food security and value addition has led to significant investments in the sector. Ghana's diverse agricultural produce and its large population create a huge market for processed food products. Ghana’s dominance in agricultural production—leading in milk, spices, pulses etc.—ensures a steady, cost-efficient supply of high-quality raw materials, fuelling global food brands. The sector offers promising opportunities for investors seeking to capitalise on the growing demand for processed and packaged food products.</p>
      <div className=' flex flex-col md:flex-row items-center justify-between gap-12 mt-12'>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>100% FDI</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>in food processing and retail, backed by investor-friendly policies, incentives, and growth opportunities.</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>43.75%</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>increase in GVA of Ghana’s food processing sector, ~USD 16 Bn in 2014-15 to ~USD 23 Bn in 2022-23, reinforcing its role in industrial growth and job creation.</p></button>
         
      </div>
    </div>
  )
}

export default Food