import React from 'react'
import { Link } from 'react-router-dom'

const WhatWeDo = () => {
  const services = [
    {
      title: "Product Development",
      items: [
        "Diversification",
        "Packaging & Branding",
        "Technology",
        "Upskilling",
        "Quality Standardization"
      ]
    },
    {
      title: "Sales Improvement",
      items: [
        "Domestic and International Market",
        "E2E E-commerce Onboarding and Fulfillment Assistance",
        "International Expos"
      ]
    },
    {
      title: "Awareness",
      items: [
        "Market Opportunities",
        "Buyer Needs",
        "Certifications (Organic/ as per exports standards)"
      ]
    }
  ]

  return (
    <div className='flex flex-col gap-5 mt-20'>
      <h1 className='py-3 px-6 bg-[#0C1644] text-white xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[800] text-center'>What Do We Do</h1>
      
      {/* Desktop View - Flex Grid */}
      <div className='hidden md:flex justify-between gap-12 w-[90%] mx-auto mt-20'>
        {services.map((service, index) => (
          <div key={index} className='bg-[#0C1644] p-12 rounded-2xl w-[30%]'>
            <h1 className='text-[24px] font-[600] text-white'>{service.title}</h1>
            <ul className='flex flex-col gap-3 mt-3'>
              {service.items.map((item, i) => (
                <li key={i} className='text-[16px] font-[400] text-white'>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Mobile View - Slider */}
      <div className='md:hidden mt-12 overflow-x-auto px-4'>
        <div className='flex space-x-4 pb-4' style={{ width: `${services.length * 320}px` }}>
          {services.map((service, index) => (
            <div key={index} className='bg-[#0C1644] p-6 rounded-2xl w-[300px] flex-shrink-0'>
              <h1 className='text-[20px] font-[600] text-white'>{service.title}</h1>
              <ul className='flex flex-col gap-3 mt-3'>
                {service.items.map((item, i) => (
                  <li key={i} className='text-[14px] font-[400] text-white'>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Link to="/collaborate" className='flex items-center justify-center mt-5'>
        <button className='py-3 px-5 bg-red-500 rounded-lg text-white text-[24px] font-[600]'>Collaborate With Us</button>
      </Link>
    </div>
  )
}

export default WhatWeDo