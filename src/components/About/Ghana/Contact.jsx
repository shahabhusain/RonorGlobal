import React from 'react'

const Contact = () => {
  return (
    <div>
        <h1 className=' bg-[#00105C] text-center p-4 my-20 text-[40px] font-[700] text-white'>Contact</h1>
          <div className=' w-[95%] mx-auto'>
          <p className=' text-[30px] font-[500]'>For more information on the sessions or to request a meeting, please write to us at:</p>
        <div className=' flex items-center gap-5 mt-12'>
            <button className=' text-white bg-red-500 p-4 rounded-md text-[24px] font-[600]'>Register Now</button>
            <button className=' text-white bg-[#00105C] p-4 rounded-md text-[24px] font-[600]'>Email: indiaatdavos@investindia.org.in</button>
        </div>
          </div>
    </div>
  )
}

export default Contact