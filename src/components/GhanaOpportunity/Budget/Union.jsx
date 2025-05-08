import React from 'react'
import union from '../../../assets/union.png'
import uni from '../../../assets/uni.png'
const Union = () => {
  return (
     <div className='mt-20 px-12'>
         <div className=' flex gap-7  '>
        <img className=' w-[70%]' src={union} alt="" />
          <div className='w-[30%]'>
          <div className=' border-[1px] flex flex-col items-center gap-4 border-[#7A7A7A] rounded-md p-4 '>
           <p className=' text-[18px] text-center font-[500] text-black'>We are Ghana national investment
           facilitation agency.</p>
           <img className=' w-[200px]' src={uni} alt="" />
           <p className=' text-[18px] text-center font-[500] text-black'>For further queries on this Subject, Please
           Get in Touch With Us @Ghana India.</p>
           <button className=' text-white text-[18px] font-[600] bg-red-500 py-2 px-5 rounded-full'>Raise your query</button>
        </div>
          </div>
    </div>
        <p className=' text-[20px] font-[500] mt-3'>Union Budget for the financial year 2025-26 was presented in the parliament earlier today. The budget continues the government’s efforts to accelerate growth, secure inclusive development, invigorate private sector investments, uplift household sentiments, and enhance the spending power of India’s rising middle class. Below are the edited excerpts from the budget speech made by Nirmala Sitharaman, Hon’ble Finance Minister of India.</p>
     </div>
  )
}

export default Union