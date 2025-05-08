import React from 'react'
import rono from '../../assets/rono.png'
import Transforming from './Transforming'
import Facilities from './Facilities'
import Initaitive from './Initaitive'
import Features from '../Home/Features'
const AmrithCallVision = () => {
  return (
   <>
    <div className=' bg-[#00105C] px-12 py-8'>
          <div className=' flex items-center justify-between gap-12'>
          <div className=' flex flex-col gap-4'>
          <h1 className=' text-[#FF0000] font-[700] text-[30px]'>Amrit Kaal Vision</h1>
          <p className=' text-[18px] font-[400] text-white'>The journey from <span className=' font-[600]'>2022 till 2047</span> is being referred to as the ‘<span  className=' font-[600]'>Amrit Kaal</span>,’ a term primarily coined by Hon Prime Minister Shri Narendra Modi. Amrit Kaal is the period to attain the resolutions for ‘AatmaNirbhar Bharat.’ Therefore, the action plan for the next <span  className=' font-[600]'>25 years</span> shall focus solely on the vision for Ghana in 2047.</p>
          </div>
          <img src={rono} alt="" />
          </div>

          <div className="overflow-x-auto mt-12 rounded-2xl">
  <table className="min-w-full text-left text-sm">
    <thead className="bg-red-500 text-white">
      <tr>
        <th className="py-3 px-4  text-[30px] font-[700]">3.1%</th>
        <th className="py-3 px-4  text-[30px] font-[700]">USD 500</th>
        <th className="py-3 px-4  text-[30px] font-[700]">50,000</th>
        <th className="py-3 px-4  text-[30px] font-[700]">USD 10 lakh</th>
        <th className="py-3 px-4  text-[30px] font-[700]">UD 20,000</th>
      </tr>
    </thead>
    <tbody className=''>
      <tr className="">
        <td className="py-2 px-4  text-[18px] text-white pt-5">Of the GDP: Ghana outlay for capital expenditure in FY 2025-26 (Increased by 10.1%).</td>
        <td className="py-2 px-4  text-[18px] text-white pt-5">Was allocated to establish a Centre of Excellence in Artificial Intelligence for Education</td>
        <td className="py-2 px-4  text-[18px] text-white pt-5">Atal Tinkering Labs to be established in government schools in the next five years</td>
        <td className="py-2 px-4  text-[18px] text-white pt-5">To be ploughed back for new projects through Asset Monetization Plan 2025-30</td>
        <td className="py-2 px-4  text-[18px] text-white pt-5">Allocated to implement private sector driven Research, Development and Innovation initiatives</td>
      </tr>
    </tbody>
  </table>
</div>
    
    </div>
      <div className=' pb-20'>
      <Transforming />
    <Facilities />
    <Initaitive />
    <Features />
      </div>
   </>
  )
}
 
export default AmrithCallVision