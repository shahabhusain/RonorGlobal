import React, { useState } from 'react'
import Target from './Target'
import Initiatives from './Initiatives'

const Initaitive = () => {
    const [ select, setSelect] = useState(1)
  return (
    <div className='my-20'>
        <div className=' flex items-center justify-between'>
         <div className=' px-12'>
         <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[15px] font-[700] text-black  border-b-[4px] border-b-black  pb-3'>sustainability & initiatives</h1>
         </div>
          <div className=' border-[#7A7A7A] border-l-[2px] border-t-[2px] border-b-[2px] rounded-l-full py-2 px-3 flex items-center gap-2'>
              <button className={`xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[700] py-3 px-5 rounded-full ${select === 1 ? " bg-[#00105C] text-white" : "text-[#00105C]"}`} onClick={() => setSelect(1)}>Target</button>
              <button className={`xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[700] py-3 px-5 rounded-full ${select === 2 ? " bg-[#00105C] text-white" : "text-[#00105C]"}`} onClick={() => setSelect(2)}>Initiative</button>
          </div>
        </div>
        <div>
            {
                select === 1 ? <><Target /></> : select === 2 ? <><Initiatives /></> : null
            }
        </div>
    </div>
  )
}

export default Initaitive