import React from 'react'
import target from '../../assets/target.png'
const Target = () => {
    const data = [
        {
            title:"1 Bn Tonnes",
            desc:"Reduction in carbon emissions by 2030"
        },

        {
            title:"0 Emissions",
            desc:"Achieve net zero emissions by 2070"
        },
    ]
  return (
    <div className=' flex items-center gap-20 mt-5'>
        <img className=' w-[50%] md:block hidden' src={target} alt="" />
        <div className=''>
            <button className=' bg-red-500 py-1 md:mx-0 mx-5 px-5 rounded-full text-white xl:text-[30px] lg:text-[25px] md:text-[20px] text-[20px] font-[600]'>Target</button>
            <div>
               <div className=' md:mt-12 mt-6 grid grid-cols-2 gap-6 md:px-0 px-5'>
                       {
                         data.map((item, index) => (
                             <div key={index} className=' bg-[#00105C] border-l-[20px] border-l-red-500 flex flex-col gap-5 p-6 rounded-r-3xl'>
                             <h1 className=' text-white xl:text-[20px] lg:text-[16px] md:text-[14px] text-[10px] font-[700] border-b-red-500 border-b-[4px] pb-4'>{item.title}</h1>
                             <p className=' text-white lg:text-[12px] md:text-[10px] text-[8px] font-[500]'>{item.desc}</p>
                         </div>
                         ))
                       }
                       </div>
            </div>
        </div>
    </div>
  )
}

export default Target