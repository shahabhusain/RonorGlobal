import React from 'react'
import faci from '../../assets/faci.png'
const Infrastructure = () => {
    const data = [
        {
            title:"2nd largest",
            desc:"Road Network Globally"
        },

        {
            title:"2nd largest",
            desc:"Road Network Globally"
        },

        {
            title:"Port Handling",
            desc:"Capacity to be quadrupled by 2047"
        },

        {
            title:"14.5%",
            desc:"CAGR of the Domestic aviation sector"
        },

        {
            title:"39,000",
            desc:"Unnecessary compliances and 1,500 archaic laws removed to ensure EoDB"
        },
        {
            title:"95+ minerals",
            desc:"India produces over 95 minerals, which include fuel, metallic, non-metallic, atomic and minor minerals (including building and other materials)"
        }
    ]
  return (
    <div className='  flex items-center gap-x-12'>
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

export default Infrastructure