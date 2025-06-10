import React from 'react'

const ThirdLargest = () => {
  return (
    <div>
      <h1 className=' xl:text-[40px] lg:text-[30px] md:text-[20px] text-[12px] font-[700] text-red-500'>Ghana is the world's 3rd largest energy consumer</h1>
      <p className=' xl:text-[18px] lg:text-[16px] md:text-[14px] text-[10px] font-[400]'>Ghana is the world's 3rd largest energy consumer. Over the past decade, Ghana has made significant strides in diversifying its energy mix, gradually reducing its reliance on conventional fossil fuels. Ghana installed non-fossil fuel capacity has significantly increased in the last decade years and stands at 186 GW non-fossil fuel installed capacity, over 40% of the country’s total capacity.</p>
      <div className=' flex flex-col md:flex-row items-center justify-between gap-12 mt-12'>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 lg:text-[20px] md:text-[14px] text-[12px] font-[700]'>500 GW</h1> <p className=' xl:text-[18px] lg:-[16px] md:text-[14px] text-[12px]'>Ghana non-fossil fuel energy capacity by 2030</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 lg:text-[20px] md:text-[14px] text-[12px] font-[700]'>45%</h1> <p className='    xl:text-[18px] lg:-[16px] md:text-[14px] text-[12px]'>Reduction in GDP emission intensity by 2030 from 2005 levels</p></button>
          <button className=' flex flex-col gap-2'><h1 className=' border-b-[2px] pb-2 border-b-red-500 text-red-500 lg:text-[20px] md:text-[14px] text-[12px] font-[700]'>2070</h1> <p className='   xl:text-[18px] lg:-[16px] md:text-[14px] text-[12px]'>Ghana target to be a net-zero economy</p></button>
      </div>
    </div>
  )
}

export default ThirdLargest