import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import client from "../../assets/client.png"
const Client = () => {
  return (
    <div className=' bg-[#0C1644] p-12 my-20'>
 <Swiper  slidesPerView={1.2} spaceBetween={30} pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
        <div>
            <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[700] text-white flex items-center gap-2'><RiDoubleQuotesL /> Paypal</h1> 
            <div className=' flex items-center gap-3 mt-4'>
              <img src={client} alt="" />
              <div className=' flex flex-col gap-3'>
                <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] text-white font-[700]'>I congratulate Invest India on being an amazing catalyst in helping businesses grow in gHANA. Companies lik... </h1>
                <h2 className=' xl:text-[32px] lg:text-[25px] md:text-[20px] text-[16px] font-[600] text-red-500'>-ANUPAM PAHUJA</h2>
                <p className=' xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] font-[600] text-white'>Vice President - South East Asia, Middle East & Africa, PayPal </p>
              </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
             <div>
            <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-[700] text-white flex items-center gap-2'><RiDoubleQuotesL /> Paypal</h1> 
            <div className=' flex items-center gap-3 mt-4'>
              <img src={client} alt="" />
              <div className=' flex flex-col gap-3'>
                <h1 className=' xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] text-white font-[700]'>I congratulate Invest India on being an amazing catalyst in helping businesses grow in gHANA. Companies lik... </h1>
                <h2 className=' xl:text-[32px] lg:text-[25px] md:text-[20px] text-[16px] font-[600] text-red-500'>-ANUPAM PAHUJA</h2>
                <p className=' xl:text-[18px] lg:text-[16px] md:text-[15px] text-[14px] font-[600] text-white'>Vice President - South East Asia, Middle East & Africa, PayPal </p>
              </div>
            </div>
            </div>

        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Client