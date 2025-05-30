import React from 'react'

const OnlineApplication = () => {
  return (
    <div className=' flex flex-col gap-5 mt-20'>
        <h1 className=' text-[40px] font-[800] text-red-500 text-center'>Online Application</h1>
        <p className=' text-[#00105C] text-[20px] font-[500] text-center'>Application for License for a Private bonded warehouse and Permission for Manufacturing and Other Operations.</p>
        <div className=' bg-[#00105C] p-12 flex flex-col gap-3 mt-6 items-center'>
            <h1 className=' text-[38px] font-[800] text-white '>Ministry of Finance- Depatment of Revenue</h1>
            <p className='text-[40px] font-[800] text-red-500'>Central Baord of Indirect Taxesand Customs</p>
            <h2 className=' text-[38px] font-[800] text-white mt-4 '>Goods and Services Tax</h2>
            <p className=' text-[20px] font-[500] text-white '>Application for License for a Private Bonded Warehouse and Permission for Manufacturing and Other Operations</p>
            <div className='grid grid-cols-3 gap-12 mt-12'>
                <h1 className=' text-[24px] font-[500] text-white flex items-center gap-4'><span className=' w-[32px] h-[32px] bg-[#f8f8f8] rounded-full'></span> Bussiness Details</h1>
                 <h1 className=' text-[24px] font-[500] text-white flex items-center gap-4'><span className=' w-[32px] h-[32px] bg-[#f8f8f8] rounded-full'></span> Details of proposed facility</h1>
                  <h1 className=' text-[24px] font-[500] text-white flex items-center gap-4'><span className=' w-[32px] h-[32px] bg-[#f8f8f8] rounded-full'></span> Applicant details</h1>
                   <h1 className=' text-[24px] font-[500] text-white flex items-center gap-4'><span className=' w-[32px] h-[32px] bg-[#f8f8f8] rounded-full'></span> Review</h1>
                    <h1 className=' text-[24px] font-[500] text-white flex items-center gap-4'><span className=' w-[32px] h-[32px] bg-[#f8f8f8] rounded-full'></span> Submit</h1>
            </div>
        </div>
    </div>
  )
}

export default OnlineApplication