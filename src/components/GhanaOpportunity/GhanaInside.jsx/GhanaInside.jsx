import React from 'react'
import rono from '../../../assets/imgh2.png'
import Transforming from '../Transforming'
import Facilities from '../Facilities'
import Initaitive from '../Initaitive'
import Features from '../../Home/Features'
const GhanaInside = () => {
  return (
   <>
    <div className=' bg-[#00105C] md:px-12 px-4 py-8'>
          <div className=' flex  items-center justify-between md:gap-12 gap-4'>
          <div className=' flex flex-col gap-4'>
          <h1 className=' text-[#FF0000] font-[700] xl:text-[30px] lg:text-[25px] md:text-[20px] text-[12px] '>Ghana Insights</h1>
          <p className='  md:text-[18px] text-[8px] font-[400] text-white'>The dynamic economic landscape of Ghana, where innovation, diversity, and growth intersect to shape a compelling narrative of progress and opportunity.</p>
          </div>
          <img className=' w-[150px] md:w-[500px]' src={rono} alt="" />
          </div>

          <div className="overflow-x-auto mt-12 rounded-2xl">
  <table className="min-w-full text-left text-sm">
    <thead className="bg-red-500 text-white ">
      <tr>
        <th className="py-3 px-4  xl:text-[30px] lg:text-[25px] md:text-[20px] text-[12px] font-[700]">6.4%</th>
        <th className="py-3 px-4  xl:text-[30px] lg:text-[25px] md:text-[20px] text-[12px] font-[700]">$4.27 Tn</th>
        <th className="py-3 px-4  xl:text-[30px] lg:text-[25px] md:text-[20px] text-[12px] font-[700]">$11,94,000</th>
        <th className="py-3 px-4  xl:text-[30px] lg:text-[25px] md:text-[20px] text-[12px] font-[700]">$2,94,000</th>
      </tr>
    </thead>
    <tbody className=''>
      <tr className="">
        <td className="py-2 px-4  md:text-[18px] text-[8px] text-white pt-5 text-center">Ghana real GDP growth estimation in FY25</td>
        <td className="py-2 px-4  md:text-[18px] text-[8px] text-white pt-5 text-center">GDP (5th largest in the world)</td>
        <td className="py-2 px-4  md:text-[18px] text-[8px] text-white pt-5 text-center">GDP PPP</td>
        <td className="py-2 px-4  md:text-[18px] text-[8px] text-white pt-5 text-center">Per Capita Income (doubled in the last decade)</td>
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
 
export default GhanaInside