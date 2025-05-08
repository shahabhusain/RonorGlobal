import React from 'react'
import faci from '../../assets/faci.png'
const Cities = () => {
    const data = [
        {
            title:"4",
            desc:"Greenfield Industrial Smart Cities being developed"
        },

        {
            title:"Key Features",
            desc:"Planned from Scratch; Holistic and integrated approach to infrastructure and urban planning; Plug-and-Play Efficiency; Focus on sustainability, business and Advanced Infrastructure"
        },

    ]
  return (
    <div className=' flex justify-between gap-x-5'>
         <div className=' grid grid-cols-2 gap-6'>
                {
                  data.map((item, index) => (
                      <div key={index} className=' bg-[#00105C] border-l-[20px] h-[230px] border-l-red-500 flex flex-col gap-5 p-6 rounded-r-3xl'>
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

export default Cities