import React, { useState } from 'react'
import Infrastructure from './Infrastructure'
import Cities from './Cities'
import Industrial from './Industrial'
import Health from './Health'
import Tourist from './Tourist'

const Facilities = () => {
    const [select, setSelect] = useState(1)
  return (
    <div className=' my-20 '>
        <div className=' flex items-center justify-between px-12'>
            <h1 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[15px] font-[700] text-black   border-b-[4px] border-b-black   pb-3'>Change Facilities</h1>
            <h2 className=' xl:text-[30px] lg:text-[25px] md:text-[20px] text-[15px] font-[700] text-red-500 border-b-[4px] border-b-red-500 pb-3'>{
                select === 1 ? <>Infrastructure Detail</> : select === 2 ? <>Greenfield Industrial Cities & its features</> : select === 3 ? <>Industrial Corridors driving Industrial Efficiency</> : select === 4 ? <>Healthcare</> : select === 5 ? <>HDI/Human Resource</> : select === 6 ? <>Tourism</> : null
                }</h2>
        </div>

        <div className=' mt-12 relative'>
           <button onClick={() => setSelect(1)} className={` py-3 xl:px-12 px-4 shadow-md ${select === 1 ? "bg-red-500 text-white " : ""} rounded-r-full`}>Infrastructure</button>
           <button onClick={() => setSelect(2)} className={` py-3 xl:px-12 px-4 shadow-md ${select === 2 ? "bg-red-500 text-white rounded-full" : ""} rounded-r-full`}>Greenfield Industrial Cities</button>
           <button onClick={() => setSelect(3)} className={` py-3 xl:px-12 px-4 shadow-md ${select === 3 ? "bg-red-500 text-white rounded-full" : ""} rounded-r-full`}>Industrial Corridors</button>
           <button onClick={() => setSelect(4)} className={` py-3 xl:px-12 px-4 shadow-md ${select === 4 ? "bg-red-500 text-white rounded-full" : ""} rounded-r-full`}>Healthcare</button>
           <button onClick={() => setSelect(5)} className={` py-3 xl:px-12 px-4 shadow-md ${select === 5 ? "bg-red-500 text-white rounded-full" : ""} rounded-r-full`}>HDI/Human Resource</button>
           <button onClick={() => setSelect(6)} className={` py-3 xl:px-12 px-4 shadow-md ${select === 6 ? "bg-red-500 text-white rounded-full" : ""} rounded-r-full`}>Tourism</button>
        </div>

        <div className=' xl:px-12 px-4 mt-12'>
            {
                select === 1 ? <><Infrastructure /></> : select === 2 ? <><Cities /></> : select === 3 ? <><Industrial /></> : select === 4 ? <><Health /></> : select === 5 ? <><Infrastructure /></> : select === 6 ? <><Tourist /></> : null
            }
        </div>
    </div>
  )
}

export default Facilities