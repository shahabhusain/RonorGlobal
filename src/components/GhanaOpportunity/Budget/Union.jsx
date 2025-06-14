import React from 'react'
import union from '../../../assets/union.png'
import uni from '../../../assets/uni.png'
const Union = () => {
  return (
     <div className='mt-20 mx:px-12 px-4'>
         <div className=' flex flex-col md:flex-row gap-7  '>
        <img className=' md:w-[70%]' src={union} alt="" />
          <div className='md:w-[30%]'>
          <div className=' border-[1px] flex flex-col items-center gap-4 border-[#7A7A7A] rounded-md p-4 '>
           <p className=' text-[18px] text-center font-[500] text-black'>We are Ghana national investment
           facilitation agency.</p>
           <img className=' w-[200px]' src={uni} alt="" />
           <p className=' text-[18px] text-center font-[500] text-black'>For further queries on this Subject, Please
           Get in Touch With Us @Ghana Ghana.</p>
           <button className=' text-white text-[18px] font-[600] bg-red-500 py-2 px-5 rounded-full'>Raise your query</button>
        </div>
          </div>
    </div>
        <p className=' md:text-[20px] text-[12px] font-[500] mt-3'>Union Budget for the financial year 2025-26 was presented in the parliament earlier today. The budget continues the government’s efforts to accelerate growth, secure inclusive development, invigorate private sector investments, uplift household sentiments, and enhance the spending power of Ghana’s rising middle class. Below are the edited excerpts from the budget speech made by Nirmala Sitharaman, Hon’ble Finance Minister of Ghana.</p>
     </div>
  )
}

export default Union