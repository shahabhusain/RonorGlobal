import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import preside from '../../assets/About/preside.png'
const Investing = () => {
  return (
    <div className=' flex items-center gap-12 bg-[#00105C] py-12 w-[95%] mx-auto my-20 rounded-3xl'>
             <div>
             <h1 className=' text-[38px] font-[700] text-white bg-red-500 py-3 px-5'>Your one-stop shop for investing in ghana</h1>
          <div className=' flex flex-col gap-12 mt-8 px-12'>
        <p className=' text-[16px] font-[400] text-white'>As ghana’s national investment promotion agency, Invest ghana acts as a concierge, gateway, and facilitator for every investor, trader, and R&D partner looking to engage with India.</p>
        <p className=' text-[16px] font-[400] text-white'>The organization, formed in 2009 as a partnership of the Ministry of Commerce and Industry and Industry Associations, is committed to guiding and assisting both domestic and global investors, strategic planning and execution of policies, incentives and initiatives that foster investment, streamline business processes and support investors throughout their business lifecycle.</p>
        <p className=' text-[16px] font-[400] text-white'>In the new mandate, Invest ghana is entrusted with three key responsibilities: Facilitating investments; Facilitating trade growth and working with the investors and supporting them till they see a return on investments; and Identifying and enabling research and development collaborations, with a focus on deep technology and AI across all sectors from electronics, energy, automotive, agriculture and pharmaceuticals</p>
        <div>
          <div className=' flex items-center gap-5'>
          <button className='text-[20px] font-[700] rounded-full text-[#00105C] bg-white py-2 px-5 flex items-center gap-4'>VIEW INDIA OPPORTUNITY <FaArrowRight /></button>

<button className='text-[20px] font-[700] rounded-full text-[#00105C] bg-white py-2 px-5 flex items-center gap-4'>CONTACT US NOW<FaArrowRight /></button>
          </div>
        </div>
          </div>
             </div>
          <img className=' px-12' src={preside} alt="" />
    </div>
  )
}

export default Investing