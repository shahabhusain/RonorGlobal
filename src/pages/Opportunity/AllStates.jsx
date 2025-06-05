import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from "react-icons/fa6";

const AllStates = () => {
  return (
    <div className='bg-[#00105C] md:pt-40 pt-20 pb-12 md:px-12 px-4'>
      <ul>
        <li className='text-[#FF0000] md:text-[30px] text-[20px] font-[700] flex items-center gap-5'>
          All States <span><FaChevronRight /></span>
        </li>
        <li className='md:text-[30px] text-[20px] font-[500] text-white mt-4'>
          <Link to="/agriculture" className="hover:underline">Agriculture & Allied Sector</Link>
        </li>
        <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/oil" className="hover:underline">Oil & Gas</Link>
        </li>
        <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/health" className="hover:underline">Health</Link>
        </li>
        <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/ict" className="hover:underline">ICT And Fintech</Link>
        </li>
        <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/manufacture" className="hover:underline">Manufacturing</Link>
        </li>
        <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/mining" className="hover:underline">Mining And Mineral Processing</Link>
        </li>
        <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/property" className="hover:underline">Property Development</Link>
        </li>
        <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/recreation" className="hover:underline">Recreation And Tourism</Link>
        </li>

         <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/energy" className="hover:underline">Energy</Link>
        </li>

         <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/education" className="hover:underline">Education</Link>
        </li>

         <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/financial" className="hover:underline">Financial Services</Link>
        </li>

          <li className='md:text-[30px] text-[20px] font-[500] text-white'>
          <Link to="/transport" className="hover:underline">Transport Infrastructure</Link>
        </li>

      </ul>
    </div>
  );
};

export default AllStates;
