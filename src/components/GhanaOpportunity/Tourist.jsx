import React from 'react'
import faci from '../../assets/faci.png'
const Tourist = () => {
    const data = [
        {
            title:"4000+",
            desc:"Healthcare Startups"
        },

        {
            title:"60%",
            desc:"Of global vaccine production"
        },

        {
            title:"15%",
            desc:"CAGR of the Medtech industry"
        },
    ]
  return (
   <div className='  flex items-center gap-x-12'>
          <div className=' grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                  {
                    data.map((item, index) => (
                        <div key={index} className=' bg-[#00105C] md:h-[230px] h-[130px] border-l-[20px] border-l-red-500 flex flex-col xl:gap-5 gap-2 xl:p-6 p-2 rounded-r-3xl'>
                        <h1 className=' text-white xl:text-[30px] lg:text-[20px] md:text-[20px] text-[15px] font-[800]'>{item.title}</h1>
                        <p className=' text-white xl:text-[15px] text-[12px] font-[600]'>{item.desc}</p>
                    </div>
                    ))
                  }
                  </div>
           <img className='md:block hidden' src={faci} alt="" />
      </div>
  )
}

export default Tourist