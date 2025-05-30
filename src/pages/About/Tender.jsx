import React, { useState } from 'react'
import Latest from '../../components/About/Tenders/Latest'
import Achives from '../../components/About/Tenders/Achives'
import Hero from '../../components/About/Tenders/Hero'

const Tender = () => {
  const [open, setOpen] = useState(1)
  return (
    <div className=' mt-20'>
        <Hero />
        <div className='bg-[#0C1644] py-3 px-6 rounded-full flex items-center justify-between w-[50%] mx-auto my-12'>
          <button onClick={()=>setOpen(1)} className={` text-[32px] font-[700] py-3 px-12 rounded-full text-white ${open === 1 ? "bg-red-500" : ""}`}>Latest Tenders</button>
           <button onClick={()=>setOpen(2)} className={` text-[32px] font-[700] py-3 px-12 rounded-full text-white ${open === 2 ? "bg-red-500" : ""}`}>Archives</button>
        </div>
            {
              open === 1 ?  <Latest /> : <Achives />
            }
        
    </div>
  )
}

export default Tender