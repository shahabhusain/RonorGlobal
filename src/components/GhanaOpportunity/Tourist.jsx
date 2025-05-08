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
    <div className=' flex justify-between gap-x-5'>
         <div className=' grid grid-cols-3 gap-6'>
                {
                  data.map((item, index) => (
                      <div key={index} className=' bg-[#00105C] h-[230px] border-l-[20px] border-l-red-500 flex flex-col gap-5 p-6 rounded-r-3xl'>
                      <h1 className=' text-white text-[30px] font-[800]'>{item.title}</h1>
                      <p className=' text-white text-[15px] font-[600]'>{item.desc}</p>
                  </div>
                  ))
                }
                </div>
         <img className='' src={faci} alt="" />
    </div>
  )
}

export default Tourist