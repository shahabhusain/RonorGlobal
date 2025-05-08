import React from 'react'
import img from '../../../assets/per.png'
import share from '../../../assets/share.png'
import Union from './Union'
import BudgetTheme from './Theme'
import AgricultureDevelopment from './Agri'
const Budget = () => {
  return (
 <>
   <div className=' my-20 bg1'>
        <div className=' flex items-center justify-between pt-52 px-12'>
        <div className=' flex flex-col gap-4'>
       <p className=' text-[20px] font-[600] text-white'>February 01, 2025</p>
       <h1 className=' text-[40px] font-[700] text-white max-w-[533px]'>Ghana Union Budget FY 2025-26: Key Takeaways</h1>
        <button className=' w-fit flex items-center gap-3 text-white text-[20px] font-[600] bg-red-500 py-2 rounded-full px-5'><img src={img} alt="" /> By:  Ankit Agrawal</button>
       </div>
       <img src={share} alt="" />
        </div>
        
    </div>
    <Union />
    <BudgetTheme />
    <AgricultureDevelopment />
 </> 
  )
}

export default Budget