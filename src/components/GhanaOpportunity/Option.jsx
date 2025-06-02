import React, { useState } from 'react'
import AmrithCallVision from './AmrithCallVision'
import GhanaInside from './GhanaInside.jsx/GhanaInside'
import { useNavigate } from 'react-router-dom'

const Option = () => {
    const [select, setSelect] = useState(1)
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate("/budget")
    }
  return (
    <div className=' mt-12'>
        <div className='  w-[80%] mx-auto border-[1px] rounded-full border-[#7A7A7A]  flex items-center justify-between'>
            <button onClick={()=>setSelect(1)} className={`xl:text-[30px] lg:text-[25px] md:text-[20px] text-[17px] xl:px-12 px-5 py-3 font-[500] ${select === 1 ? " bg-red-600 text-white rounded-full" : ""}`}>Amrit Kaal Vision</button>
            <button onClick={()=>setSelect(2)} className={`xl:text-[30px] lg:text-[25px] md:text-[20px] text-[17px] xl:px-12 px-5 py-3 font-[500] ${select === 2 ? " bg-red-600 text-white rounded-full" : ""}`}>Ghana Insights</button>
            <button onClick={handleNavigate} className={`  xl:text-[30px] lg:text-[25px] md:text-[20px] text-[17px] xl:px-12 px-5 py-3 font-[500] ${select === 3 ? " bg-red-600 text-white rounded-full" : ""}`}>Budget 2025 Updates</button>
        </div>
          <div className=' mt-20'>
          {
            select === 1 ? <><AmrithCallVision /></> : select === 2 ? <><GhanaInside /></> : null
        }
          </div>
    </div>
  )
}

export default Option