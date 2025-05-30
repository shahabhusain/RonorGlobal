import React from 'react'
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
  return (
    <div className=' flex flex-col gap-5 mt-20'>
      <h1 className=' py-3 px-6 bg-[#0C1644] text-white text-[42px] font-[800] text-center'>What Do We Do</h1>
         <div className=' flex justify-between gap-12 w-[90%] mx-auto mt-20'>
           <div className=' bg-[#0C1644] p-12 rounded-2xl w-[30%]'>
        <h1 className=' text-[24px] font-[600] text-white'>Product Development</h1>
        <ul className=' flex flex-col gap-3 mt-3'>
          <li className=' text-[16px] font-[400] text-white'>Diversification</li>
          <li className=' text-[16px] font-[400] text-white'>Packaging & Branding</li>
          <li className=' text-[16px] font-[400] text-white'>Technology</li>
          <li className=' text-[16px] font-[400] text-white'>Upskilling</li>
          <li className=' text-[16px] font-[400] text-white'>Quality Standardization</li>
        </ul>
      </div>

      <div className=' bg-[#0C1644] p-12 rounded-2xl w-[30%]'>
        <h1 className=' text-[24px] font-[600] text-white'>Sales Improvement</h1>
        <ul className=' flex flex-col gap-3 mt-3'>
          <li className=' text-[16px] font-[400] text-white'>Domestic and International Market</li>
          <li className=' text-[16px] font-[400] text-white'>E2E E-commerce Onboarding and Fulfillment Assistance</li>
          <li className=' text-[16px] font-[400] text-white'>International Expos</li>
        </ul>
      </div>


      <div className=' bg-[#0C1644] p-12 rounded-2xl w-[30%]'>
        <h1 className=' text-[24px] font-[600] text-white'>Awareness</h1>
        <ul className=' flex flex-col gap-3 mt-3'>
          <li className=' text-[16px] font-[400] text-white'>Market Opportunities</li>
          <li className=' text-[16px] font-[400] text-white'>Buyer Needs</li>
          <li className=' text-[16px] font-[400] text-white'>Certifications (Organic/ as per exports standards)</li>
        </ul>
      </div>
         </div>
          <Link to="/collaborate" className=' flex items-center justify-center mt-5'>
             <button className=' py-3 px-5 bg-red-500 rounded-lg text-white text-[24px] font-[600]'>Collaborate With Us </button>
          </Link>
    </div>
  )
}

export default WhatWeDo