import React from 'react'
import invest from '../../assets/invest.png'
import { div } from 'framer-motion/client'
const Invest = () => {
  return (
       <div className=' w-full mt-20 flex '>
         <div className=' bg-[#00105C] px-6 pt-6 w-[60%]'>
       <div className=' flex gap-12'>
           <div className=''>
           <h1 className=' xl:text-[42px] lg:text-[35px] md:text-[29px] text-[24px] font-[700] text-white'><span className=' font-[500]'>Invest and Build 
        </span> Your Business in GHANA</h1>
          <button className=' bg-red-500 text-white py-3 px-5 xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-semibold rounded-md my-8'>Know More</button>
           </div>
           <img className='xl:w-[400px] lg:w-[300px] md:w-[300px] w-[200px]' src={invest} alt="" />
       </div>
    </div>
    <div className='border-[#7A7A7A] border-[2px] lg:w-[40%] p-4'>
  <h1 className='xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[700] text-[#00105C]'>Latest News</h1>

  <div className='w-full xl:h-[200px] h-[250px] overflow-y-auto scrollbar-custom pr-2'>
    {Array(4).fill(0).map((_, i) => (
      <div key={i} className='border-b-black border-b-[2px] pb-6 mt-6'>
        <h2 className='text-black xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[500]'>
          Swedish home furnishing retailer, IKEA, marks strategic e-commerce foray in Ghana
        </h2>
        <button className='flex items-center gap-3'>
          28-5-2025 .<span className='text-red-500 underline'>Know more</span>
        </button>
      </div>
    ))}
  </div>
</div>

       </div>
  )
}

export default Invest