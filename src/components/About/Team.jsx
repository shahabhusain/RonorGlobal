import React, { useState } from 'react'
import meet1 from '../../assets/meet1.png'
import meet2 from '../../assets/meet2.png'
import meet3 from '../../assets/meet3.png'
import meet4 from '../../assets/meet4.png'
import meet5 from '../../assets/meet5.png'
import meet6 from '../../assets/meet6.png'
import meet7 from '../../assets/meet7.png'
import meet8 from '../../assets/meet8.png'
import meet9 from '../../assets/meet9.png'
import meet10 from '../../assets/meet10.png'
import meet11 from '../../assets/meet11.png'
import LeaderShip from './LeaderShip'
const Team = () => {
    const [open, setOpen] = useState(0)
    const data = [
        {
            img:meet1,
            title:"Shri Amardeep Singh Bhatia",
            desc:"Secretary, DPIIT & Chairman, Invest Ghana"
        },

        {
            img:meet2,
            title:"Shri Anand Mahindra",
            desc:"Chairman, Mahindra Group and Executive"
        },

        {
            img:meet3,
            title:"Shri Amardeep Singh Bhatia",
            desc:"Secretary (Coordination), Cabinet Secretaria"
        },

        {
            img:meet4,
            title:"Ms Nivruti Rai",
            desc:"Managing Director and CEO"
        },

        {
            img:meet5,
            title:"Smt. Arti Bhatnagar",
            desc:"AS & FA, DPIIT"
        },

        {
            img:meet6,
            title:"Shri Abhishek Singh",
            desc:"Joint Secretary (Economic Diplomacy)"
        },

        {
            img:meet7,
            title:"Shri Chandrajit Banerjee",
            desc:"Director General, Confederation of Ghana Industry"
        },

        {
            img:meet8,
            title:"Shri Pankaj R Patel",
            desc:"Chairman, Zydus Lifesciences Ltd"
        },

        {
            img:meet9,
            title:"Shri Pramod Bhasin",
            desc:"Former Chairman, NASSCOM"
        },

        {
            img:meet10,
            title:"Shri Rajesh Nambiar",
            desc:"President, Nasscom"
        },

        {
            img:meet11,
            title:"Shri Harshavardhan Neotia",
            desc:"Entrepreneur and Chairman of Ambuja Neotia Group"
        },
    ]
  return (
    <div className=' w-[95%] mx-auto my-20'>
         <div className=' flex items-center justify-center'>
         <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[700] text-white bg-red-500 py-2 px-5 rounded-2xl'>Meet Our Team</h1>
         </div>
         {
  open === 0 ? (
    <>
      {/* Desktop Grid */}
      <div className='hidden md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mt-12'>
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt="" />
            <div className='border-[2px] border-[#0000003f] py-4 h-[150px] flex flex-col gap-3'>
              <h1 className='text-[#00105C] xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[600] px-6'>{item.title}</h1>
              <div className='w-full h-[1px] bg-[#70707079]'></div>
              <p className='xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px] font-[400] text-red-500 px-6'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className='md:hidden flex gap-4 overflow-x-auto mt-12'>
        {data.map((item, index) => (
          <div key={index} className='min-w-[250px] flex-shrink-0'>
            <img src={item.img} alt="" className='w-full' />
            <div className='border-[2px] border-[#0000003f] py-4 h-[150px] flex flex-col gap-3'>
              <h1 className='text-[#00105C] text-[16px] font-[600] px-4'>{item.title}</h1>
              <div className='w-full h-[1px] bg-[#70707079]'></div>
              <p className='text-[14px] font-[400] text-red-500 px-4'>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : open === 1 ? (
    <LeaderShip />
  ) : null
}

         <div className=' flex items-center justify-center gap-12 md:mt-52 mt-12'>
            <button onClick={()=>setOpen(0)} className={` ${open === 0 ? "text-white xl:text-[40px] lg:text-[35px] md:text-[30px] text-[12px] font-[700] bg-red-500 py-2 px-5 rounded-full" : "border-[2px] border-red-500 rounded-full xl:text-[40px] lg:text-[35px] md:text-[30px] text-[12px] py-2 px-5 font-[700] text-[#00105C]"}`}>Board of Directors</button>
            <button onClick={()=>setOpen(1)} className={` ${open === 1 ? "text-white xl:text-[40px] lg:text-[35px] md:text-[30px] text-[12px] font-[700] bg-red-500 py-2 px-5 rounded-full" : "border-[2px] border-red-500 rounded-full xl:text-[40px] lg:text-[35px] md:text-[30px] text-[12px] py-2 px-5 font-[700] text-[#00105C]"} border-[2px] border-red-500 rounded-full xl:text-[40px] lg:text-[35px] md:text-[30px] text-[12px] py-2 px-5 font-[700] text-[#00105C]`}>Leadership Team</button>
         </div>
    </div>
  )
}

export default Team