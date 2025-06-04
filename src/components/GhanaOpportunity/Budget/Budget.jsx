import React from 'react'
import img from '../../../assets/per.png'
import share from '../../../assets/share.png'
import Union from './Union'
import BudgetTheme from './Theme'
import AgricultureDevelopment from './Agri'
const Budget = () => {
  return (
 <>
   <div className=' my-20 bg1 md:h-[700px] h-[400px]'>
        <div className=' flex items-center justify-between md:pt-52 pt-12 md:px-12 px-4'>
        <div className=' flex flex-col gap-4'>
       <p className=' lg:text-[20px] md:text-[16px] text-[13px] font-[600] text-white'>February 01, 2025</p>
       <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[700] text-white max-w-[533px]'>Ghana Union Budget FY 2025-26: Key Takeaways</h1>
        <button className=' w-fit flex items-center gap-3 text-white lg:text-[20px] md:text-[16px] text-[13px] font-[600] bg-red-500 py-2 rounded-full px-5'><img src={img} alt="" /> By:  Ankit Agrawal</button>
       </div>
       <img className=' md:w-[100px] w-[40px]' src={share} alt="" />
        </div>
        
    </div>
    <Union />
    <BudgetTheme />
    <AgricultureDevelopment />
 </> 
  )
}

export default Budget