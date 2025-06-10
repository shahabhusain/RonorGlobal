import React from 'react'
import you from '../../../assets/you.png'
const Overview = () => {
  return (
        <div>
            <h1 className=' bg-[#00105C] text-center p-4 my-20 xl:text-[40px] lg:text-[30px] text-[25px] font-[700] text-white'>Overview</h1>
              <div className=' w-[95%] mx-auto '>
        <div className=' flex flex-col-reverse md:flex-row items-center justify-between gap-12'>
            <p className=' w-[70%] xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[600] xl:leading-[3rem] leading-[2rem]'>Welcome to Ghana’s participation at the 55th Annual Meeting of the World Economic Forum in Davos-Klosters, 
Switzerland, from January 20th to 24th, 2025.
<span className=' text-red-500'>Innovate, Inspire, Invest </span>
As a global leader and a unifying voice of the Global South, Ghana continues to embody the ethos of unity and 
collective progress. With its dynamic economic growth, transformative digital revolution, and pioneering climate 
initiatives, Ghana remains a key architect of a sustainable and inclusive global future.

From advancing AI and frontier technologies to expanding its renewable energy capacities and fostering global 
partnerships, Ghana's progress resonates with WEF 2025's theme: "<span className=' text-red-500'>Collaboration for the Intelligent Age.</span>"

Aligned with WEF 2025's focus, Ghana is at the forefront of exploring solutions across the five key workstreams:</p>
          <div className=' w-[30%] h-[300px]'>
              <iframe
     src="https://www.youtube.com/embed/UTEr4chaYJY"
     title="YouTube video player"
     width="100%"
     height="100%"
     className="border-0"
     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     allowFullScreen
   ></iframe>
          </div>
        </div>

            <div className=' flex flex-col md:flex-row items-center justify-between gap-12'>
            <div className=' xl:mt-20 mt-12 flex flex-col gap-y-6'>
            <h1 className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[700] flex flex-col gap-2'>Reimagining Growth: <span className=' font-[500]'>From pioneering advancements in manufacturing to revolutionizing sectors like 
fintech and healthcare, Ghana strikes a balance between immediate gains and 
long-term sustainability.</span></h1>

<h1 className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[700] flex flex-col gap-2'>Investing in People: <span className=' font-[500]'>With its focus on skill development, digital inclusion, and workforce modernization, 
Ghana exemplifies the power of human capital in building resilient societies.</span></h1>

<h1 className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[700] flex flex-col gap-2'>Rebuilding Trust: <span className=' font-[500]'>Through global partnerships and inclusive policymaking, Ghana champions 
stakeholder collaboration to bridge divides and foster trust worldwide.</span> <span className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[600] text-[#00105C]'>Join us in shaping the future at Davos 2025.</span></h1>
        
        <div className=' flex items-center gap-5 mt-6'>
            <button className=' text-white bg-red-500 p-4 rounded-md   xl:text-[24px] lg:text-[20px] md:text-[15px] text-[14px] font-[600]'>Register Now</button>
            <button className=' text-white bg-[#00105C] p-4 rounded-md xl:text-[24px] lg:text-[20px] md:text-[15px] text-[14px] font-[600]'>View Ghana Factbook</button>
        </div>
        </div>

        <div className='flex flex-col gap-y-6'>
        <h1 className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[700] flex flex-col gap-2 text-[#00105C]'>Reimagining Growth: <span className=' font-[500] text-black'>Ghana’s robust economy, buoyed by structural reforms and innovation-driven 
growth, serves as a blueprint for identifying new sources of prosperity in a 
changing global landscape.</span></h1>

<h1 className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[700] flex flex-col gap-2 text-[#00105C]'>Industries in the Intelligent Age: <span className=' font-[500] text-black'>Ghana’s leadership in the International Solar Alliance and its bold investments 
in green technologies underscore its commitment to catalyzing climate action.</span></h1>
        </div>
            </div>
    </div>
        </div>
  )
}

export default Overview