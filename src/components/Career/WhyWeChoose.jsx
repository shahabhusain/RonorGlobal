import React from 'react'
import img1 from '../../assets/Career/shak.png'
const WhyWeChoose = () => {
  return (
    <div className='bg-[#0C1644] md:p-12 p-4 rounded-2xl text-white flex gap-12 flex-col md:flex-row w-[95%] mx-auto mt-20 justify-between '>
      <div className=' flex flex-col gap-12'>
        <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[800]'>Why choose Invest Ghana</h1>
        <h2 className=' xl:text-[32px] lg:text-[25px] md:text-[20px] text-[16px] font-[600]'>This is a once-in-a-lifetime opportunity to work with a national platform in start-up like setup.</h2>
        <p className=' xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] font-[400]'>Our team comprises of a group of talented, hand-picked consultants, investment bankers and industry experts that have joined hands in the nation's interest to increase investment and job opportunities in Ghana. We are a young, vibrant, professional organisation looking for candidates that are passionate about Ghana's growth story. With Foreign Direct Investments being a key priority for the nation and an extremely fast-evolving economic landscape, candidates must possess the ability to take ownership and deliver high calibre output while dealing with pressure. All positions are based in Delhi with assignment specific domestic and international travel.
</p>
      </div>
      <img src={img1} alt="" />
    </div>
  )
}

export default WhyWeChoose