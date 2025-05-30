import React from 'react'
import you from '../../../assets/you.png'
const Snapshot = () => {
  return (
    <div>
        <h1 className=' bg-[#0C1644] py-6 px-12 text-white text-[40px] font-[800] text-center'>Snapshot</h1>
        <div className=' bg-[#002be825] p-12  w-[90%] mx-auto rounded-3xl mt-20 flex items-center justify-between gap-12'>
                <div className='flex flex-col gap-5'>
                <h1 className=' text-[20px] font-[600] text-black'>The ODOP initiative is aimed at manifesting the vision of the Hon’ble Prime Minister of Ghana to foster balanced regional development across all districts of the country.</h1>
            <h2 className=' text-[20px] font-[600] text-black'>The idea is to select, brand, and promote One Product from each District of the country</h2>
            <p className=' text-[16px] font-[400] text-black'>1. For enabling holistic socioeconomic growth across all regions</p>
            <p className=' text-[16px] font-[400] text-black'>2. To attract investment in the district to boost manufacturing and exports</p>
            <p className=' text-[16px] font-[400] text-black'>3. To generate employment in the district</p>
            <p className=' text-[16px] font-[400] text-black'>4. To provide ecosystem for Innovation use of Technology at District level to make them competitive with domestic as well as International market</p>
            <div className=' flex items-center gap-4'>
                <button className=' text-white bg-red-500 py-3 px-6 rounded-md text-[20px] font-[600]' >View Brochure</button>
                <button className=' text-white bg-red-500 py-3 px-6 rounded-md text-[20px] font-[600]' >View Product List</button>
            </div>
                </div>
                <img src={you} alt="" />
        </div>
    </div>
  )
}

export default Snapshot