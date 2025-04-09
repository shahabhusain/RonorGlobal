import React from 'react'
import { LuDownload } from "react-icons/lu";
const Resource = () => {
    const data = [
        {
            title:"FDI Policy (Consolidated)",
            desc:"Aimed to capture and keep pace with the regulatory......"
        },

        {
            title:"Economic Survey 2024-25",
            desc:"Showcases the growth, development and prospects......"
        },

        {
            title:"Foreign Trade Policy 2023",
            desc:"Lays down a blueprint to integrate ghana with the global markets......"
        },

        {
            title:"Budget 2025-26",
            desc:"Presents broad aggregates of the Budget for easy understanding......"
        },

        {
            title:"India Integrated Logistics Report",
            desc:"Transformative potential of integrated logistics in India......"
        }
    ]
  return (
    <div className=' w-[95%] mx-auto my-20'>
       <h1 className=' text-[#00105C] text-[40px] font-[800]'>Resources Repository</h1>

          <div className=' mt-12 grid grid-cols-5 gap-6'>
          {
            data.map((item, index) => (
                <div key={index} className=' bg-[#00105C] border-l-[20px] border-l-red-500 flex flex-col gap-5 p-6 rounded-r-3xl'>
                <h1 className=' text-white text-[20px] font-[800]'>{item.title}</h1>
                <p className=' text-white text-[12px] font-[500]'>{item.desc}</p>
                <button className=' text-[20px] text-white flex gap-3 items-center'> <LuDownload /> <span className=' font-[800]'>Pdf</span></button>
            </div>
            ))
          }
          </div>
    </div>
  )
}

export default Resource
