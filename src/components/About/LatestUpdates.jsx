import React from 'react'
import main from '../../assets/modi.png'
import { FaCircle } from 'react-icons/fa';

const LatestUpdates = () => {

  const newsData = [
    {
      title: 'Major Achievements under Make in Ghana',
      date: '25-09-2024',
    },
    {
      title: 'Cabinet approves one more semiconductor unit under India Semiconductor Mission (ISM)',
      date: '02-09-2024',
    },
    {
      title: 'Coal Production in the Country Grows 7.12% YoY to Reach 370 MT in FY 2024–25',
      date: '27-08-2024',
    },
    {
      title: 'Ghana IIP records a growth of 4.2% in the June 2024',
      date: '12-08-2024',
    },
    {
      title: 'Overall Coal Stock Reaches 88.01 MT Registering an Increase of 24.7%',
      date: '28-08-2023',
    },
    {
      title: 'Major step of MoPSW towards Public–Private Partnership with INR 4,243.64 crore Mega Terminal Project at Kandla, Gujarat',
      date: '28-08-2023',
    },
    {
      title: "Chandrayaan–3 has proved India's capability for cost–effective Space missions",
      date: '28-08-2023',
    },
    {
      title: 'SOP signed for exchange of White Shipping Information between Indian Navy & Philippine Coast Guard',
      date: '24-08-2023',
    },
  ];
  return (
    <div className=' mt-20'>
        <img src={main} alt="" />

           <div className=' xl:p-20 lg:p-10 border-[2px] bg-[#f8f8f8] border-[#0000004f] rounded-2xl border-inside-blur w-[90%] mx-auto my-20 '> 
          <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[700] text-[#00105C]'>Latest Updates</h1>
          <div className=" mx-auto px-4 py-10">
      <ul className="space-y-12">
        {newsData.map((item, index) => (
          <li key={index} className=" flex justify-between items-start">
            <div className="flex items-center gap-6">
                <div className=' w-[50px] h-[50px] bg-[#AFDCFF] flex items-center justify-center rounded-full'>
                <div className='bg-[#00105C] md:w-[28px] md:h-[28px] w-[18px] h-[18px] rounded-full'></div>
                </div>
              <span className="xl:text-[20px] lg:text-[17px] md:text-[15px] text-[14px] text-[#00105C] font-medium max-w-[600px]">{item.title}</span>
            </div>
            <span className="text-[00105C] text-[#00105C] whitespace-nowrap">{item.date}</span>
          </li>
        ))}
      </ul>
        </div>
           </div>
    </div>
  )
}

export default LatestUpdates