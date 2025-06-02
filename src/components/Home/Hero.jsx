import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import hero1 from '../../assets/image.png';
import hero2 from '../../assets/AllSectors/education.jpg';
import hero3 from '../../assets/AllSectors/trans.jpeg';

import img1 from '../../assets/img1.png';
import img2 from '../../assets/img2.png';
import img3 from '../../assets/img3.png';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Hero = () => {
  const heroImages = [hero1, hero2, hero3];

  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      navigation
      loop
      className="h-screen"
    >
      {heroImages.map((bg, index) => (
        <SwiperSlide key={index}>
          <div
            className="h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${bg})` }}
          >
            <div className="flex flex-col gap-5 items-center w-[70%] mx-auto text-center backdrop-blur-sm p-10 rounded-lg">
              <h1 className="xl:text-[98px] lg:text-[72px] md:text-[52px] text-[32px] font-[800] text-white drop-shadow-lg">Ghana</h1>

              <button className="xl:text-[27px] lg:text-[25px] md:text-[22px] text-[20px] rounded-md font-[600] text-white py-3 px-6 bg-red-500">
                A LAND OF ECONOMIC OPPORTUNITIES
              </button>

              <div className="bg-[#ffffff31] border-[#ffffff61] border-[2px] rounded-lg flex items-center justify-center p-6 gap-6">
                <div className="flex flex-col items-center justify-center gap-5 border-r-[2px] rounded-sm border-r-[#ffffff77] pr-6">
                  <img className="w-[70px]" src={img1} alt="" />
                  <h1 className="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] font-[700] text-white">5th Largest Economy</h1>
                  <p className="xl:text-[16px] lg:text-[14px] md:text-[13px] text-[11px] font-[500] text-white max-w-[333px]">
                    Estimated GDP Growth: 6.4% (FY25)
                    Fastest Among Large Economies
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-5 border-r-[2px] rounded-sm border-r-[#ffffff77] pr-6">
                  <img className="w-[70px]" src={img2} alt="" />
                  <h1 className="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] font-[700] text-white">Robust FDI</h1>
                  <p className="xl:text-[16px] lg:text-[14px] md:text-[13px] text-[11px]font-[500] text-white max-w-[333px]">
                    69.14% of total FDI inflows (since April 2000) came after 2014
                  </p>
                </div>

                <div className="flex flex-col items-center justify-center gap-5">
                  <img className="w-[70px]" src={img3} alt="" />
                  <h1 className="xl:text-[18px] lg:text-[16px] md:text-[14px] text-[12px] font-[700] text-white">Booming Exports</h1>
                  <p className="xl:text-[16px] lg:text-[14px] md:text-[13px] text-[11px] font-[500] text-white">
                    Total: 433.09 Bn during FY 2023-24
                  </p>
                </div>
              </div>

              <Link
                to="/opportunity"
                className="xl:text-[20px] lg:text-[16px] md:text-[14px] text-[12px] font-[600] bg-red-500 text-white py-3 px-5 rounded-md flex items-center gap-5 hover:px-12 transition-all duration-300 ease-in-out"
              >
                Know More <FaArrowRight />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
