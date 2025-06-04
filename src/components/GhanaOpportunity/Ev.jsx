import React from 'react'

const Ev = () => {
  return (
    <div>
      <h1 className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px] font-[700] text-red-500'>Electric Vehicle / Automobile</h1>
      <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px] font-[400]'>India’s EV and automotive sector is poised for transformative growth, driven by innovation, government incentives, and rising consumer demand. As the fourth-largest automotive market globally, India is advancing towards sustainable mobility with initiatives like the FAME scheme and Production-Linked Incentives (PLI). The sector offers immense opportunities across EV manufacturing, battery production, and charging infrastructure. With robust domestic demand and export potential, India’s auto sector is a key driver of industrial growth and green transformation.</p>
      <div className=' flex flex-col md:flex-row items-center justify-between gap-12 mt-12'>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 lg:text-[20px] md:text-[15px] text-[12px] font-[700]'>16 Mn</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>2-wheeler EVs by 2030, at 45.5% CAGR of India’s EV sector</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 lg:text-[20px] md:text-[15px] text-[12px] font-[700]'>By 2030</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>India's 30% of private cars, 70% of commercial cars, 70% of buses, and 100% of two- and three-wheelers aims to be EV</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 lg:text-[20px] md:text-[15px] text-[12px] font-[700]'>44,000</h1> <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px]'>Public EV chargers required to support India’s growing EV industry</p></button>
      </div>
    </div>
  )
}

export default Ev