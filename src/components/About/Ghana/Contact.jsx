import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className=' bg-[#00105C] text-center p-4 my-20 xl:text-[40px] lg:text-[30px] md:text-[25px] text-[25px] font-[700] text-white'>Contact</h1>
          <div className=' w-[95%] mx-auto'>
          <p className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[16px] font-[500]'>For more information on the sessions or to request a meeting, please write to us at:</p>
        <div className=' flex flex-col md:flex-row items-center gap-5 mt-12'>
            <button className=' text-white bg-red-500 p-4 rounded-md xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] font-[600]'>Register Now</button>
            <button className=' text-white bg-[#00105C] p-4 rounded-md xl:text-[24px] lg:text-[22px] md:text-[20px] text-[18px] font-[600]'>Email: ghanaatdavos@investghana.org.in</button>
        </div>
          </div>
    </div>
  )
}

export default Contact