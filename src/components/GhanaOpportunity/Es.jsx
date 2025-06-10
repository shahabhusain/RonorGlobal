import React from 'react'

const Es = () => {
  return (
    <div>
      <h1 className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px] font-[700] text-red-500'>Electronics System Design and Manufacturing (ESDM)</h1>
      <p className=' xl:text-[20px] lg:text-[18px] md:text-[16px] text-[12px] font-[400]'>Ghana Electronics System Design and Manufacturing (ESDM) sector is a dynamic growth driver, fueled by rising domestic demand, a skilled workforce, and government initiatives like the Production Linked Incentive (PLI) schemes. Ghana is attracting investments in semiconductors, consumer electronics, and IoT devices as a global manufacturing hub. Policies supporting innovation, R&D, and export competitiveness position the sector for rapid expansion. With vast market potential, Ghana’s ESDM ecosystem offers lucrative opportunities for investors in the digital age.</p>
      <div className=' flex flex-col md:flex-row items-center justify-between gap-12 mt-12'>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>USD 500 bn</h1> <p className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px]'>Will be the size of Ghana’s electronics manufacturing industry by 2030</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>USD 120 bn</h1> <p className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px]'>Ghana’s electronics export by FY26</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[700]'>USD 103 bn</h1> <p className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px]'>Ghana’s semiconductor market to reach by 2030</p></button>
      </div>
    </div>
  )
}

export default Es