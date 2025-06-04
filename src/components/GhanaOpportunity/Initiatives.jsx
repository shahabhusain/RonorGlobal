import React, { useState } from 'react'
import target from '../../assets/target.png'
import National from './National'
import Electric from './Electric'
import Sustain from './Sustain'
import Green from './Green'
const Initiatives = () => {
    const [select, setSelect] = useState(1)
  return (
    <div className=' flex items-center gap-12 mt-5 mx-4 md:mx-0'>
        <img className='xl:w-[50%] w-[40%] md:block hidden' src={target} alt="" />
        <div className=''>
             <div className=' flex items-center gap-6'>
             <h1 className=' text-[#00105C] xl:text-[30px] lg:text-[25px] md:text-[20px] text-[10px] font-[600]'>Initiatives</h1>
               <div className=' border-b-[2px] border-b-[#D3D3D3] flex items-center gap-4'>
                <button onClick={()=>setSelect(1)} className={`  xl:text-[15px] md:text-[12px] text-[8px] pb-2 font-[600] ${select === 1 ? "border-b-[3px] text-[#00105C] border-b-red-500" : "text-[#7A7A7A]"}`}>National Manufacturing Mission</button>
                <button onClick={()=>setSelect(2)} className={`  xl:text-[15px] md:text-[12px] text-[8px] pb-2 font-[600] ${select === 2 ? "border-b-[3px] text-[#00105C] border-b-red-500" : "text-[#7A7A7A]"}`}>Electric Vehicles</button>
                <button onClick={()=>setSelect(3)} className={`  xl:text-[15px] md:text-[12px] text-[8px] pb-2 font-[600] ${select === 3 ? "border-b-[3px] text-[#00105C] border-b-red-500" : "text-[#7A7A7A]"}`}>Sustainable Agriculture</button>
                <button onClick={()=>setSelect(4)} className={`  xl:text-[15px] md:text-[12px] text-[8px] pb-2 font-[600] ${select === 4 ? "border-b-[3px] text-[#00105C] border-b-red-500" : "text-[#7A7A7A]"}`}>Go Green</button>
               </div>
             </div>
             {
                select === 1 ? <><National /></> : select === 2 ? <><Electric /></> : select === 3 ? <><Sustain /></> : select === 4 ? <><Green /></> : null
             }
            <div>
              
            </div>
        </div>
    </div>
  )
}

export default Initiatives