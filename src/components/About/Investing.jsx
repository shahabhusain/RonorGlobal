import React from 'react'
import { FaArrowRight } from "react-icons/fa6";
import preside from '../../assets/About/preside.png'
import { Link } from 'react-router-dom';
const Investing = () => {
  return (
    <div className=' flex items-center gap-12 bg-[#00105C] py-12 md:px-0 px-4 w-[95%] mx-auto md:my-20 my-5 rounded-3xl'>
             <div>
             <h1 className=' xl:text-[38px] lg:text-[30px] md:text-[25px] text-[20px] font-[700] text-white bg-red-500 py-3 md:px-5 px-2'>Your one-stop shop for investing in ghana</h1>
          <div className=' flex flex-col gap-12 mt-8 xl:px-12 lg:px-4'>
        <p className=' xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px] font-[400] text-white'>As ghana’s national investment promotion agency, Invest ghana acts as a concierge, gateway, and facilitator for every investor, trader, and R&D partner looking to engage with Ghana.</p>
        <p className=' xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px] font-[400] text-white'>The organization, formed in 2009 as a partnership of the Ministry of Commerce and Industry and Industry Associations, is committed to guiding and assisting both domestic and global investors, strategic planning and execution of policies, incentives and initiatives that foster investment, streamline business processes and support investors throughout their business lifecycle.</p>
        <p className=' xl:text-[16px] lg:text-[14px] md:text-[12px] text-[10px] font-[400] text-white'>In the new mandate, Invest ghana is entrusted with three key responsibilities: Facilitating investments; Facilitating trade growth and working with the investors and supporting them till they see a return on investments; and Identifying and enabling research and development collaborations, with a focus on deep technology and AI across all sectors from electronics, energy, automotive, agriculture and pharmaceuticals</p>
        <div>
          <div className=' flex items-center gap-5'>
          <Link to="/allstates" className='xl:text-[20px] lg:text-[17px] md:text-[15px] text-[10px] font-[700] rounded-full text-[#00105C] bg-white py-2 px-5 flex items-center gap-4'>VIEW Ghana OPPORTUNITY <FaArrowRight /></Link>

<Link to="/contactus" className='xl:text-[20px] lg:text-[17px] md:text-[15px] text-[10px] font-[700] rounded-full text-[#00105C] bg-white py-2 px-5 flex items-center gap-4'>CONTACT US NOW<FaArrowRight /></Link>
          </div>
        </div>
          </div>
             </div>
          <img className=' xl:px-12 lg:px-2 md:block hidden' src={preside} alt="" />
    </div>
  )
}

export default Investing