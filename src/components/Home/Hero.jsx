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
            <div className="flex flex-col gap-5 items-center w-[90%] sm:w-[80%] md:w-[70%] mx-auto text-center backdrop-blur-sm p-5 sm:p-8 md:p-10 rounded-lg">
              <h1 className="text-[22px] md:text-[42px] lg:text-[72px] xl:text-[98px] font-[800] text-white drop-shadow-lg">
                Ghana
              </h1>

              <button className="text-[10px] md:text-[20px] lg:text-[25px] xl:text-[27px] rounded-md font-[600] text-white py-2 md:py-3 px-4 md:px-6 bg-red-500">
                A LAND OF ECONOMIC OPPORTUNITIES
              </button>

              <div className="bg-[#ffffff31] border-[#ffffff61] border-[2px] rounded-lg flex flex-col md:flex-row items-center justify-center p-4 sm:p-6 gap-4 sm:gap-6 w-full">
                {/* Box 1 */}
                <div className="flex flex-col items-center justify-center gap-3 border-b-[1px] md:border-b-0 md:border-r-[2px] border-[#ffffff77] pb-4 md:pb-0 md:pr-6 w-full md:w-auto">
                  <img className="w-[50px] sm:w-[60px] md:w-[70px]" src={img1} alt="" />
                  <h1 className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-[700] text-white">5th Largest Economy</h1>
                  <p className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-[500] text-white max-w-[300px] text-center">
                    Estimated GDP Growth: 6.4% (FY25) — Fastest Among Large Economies
                  </p>
                </div>

                {/* Box 2 */}
                <div className="flex flex-col items-center justify-center gap-3 border-b-[1px] md:border-b-0 md:border-r-[2px] border-[#ffffff77] pb-4 md:pb-0 md:pr-6 w-full md:w-auto">
                  <img className="w-[50px] sm:w-[60px] md:w-[70px]" src={img2} alt="" />
                  <h1 className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-[700] text-white">Robust FDI</h1>
                  <p className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-[500] text-white max-w-[300px] text-center">
                    69.14% of total FDI inflows (since April 2000) came after 2014
                  </p>
                </div>

                {/* Box 3 */}
                <div className="flex flex-col items-center justify-center gap-3 w-full md:w-auto">
                  <img className="w-[50px] sm:w-[60px] md:w-[70px]" src={img3} alt="" />
                  <h1 className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-[700] text-white">Booming Exports</h1>
                  <p className="text-[11px] md:text-[13px] lg:text-[14px] xl:text-[16px] font-[500] text-white max-w-[300px] text-center">
                    Total: 433.09 Bn during FY 2023-24
                  </p>
                </div>
              </div>

              <Link
                to="/opportunity"
                className="text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] font-[600] bg-red-500 text-white py-2 md:py-3 px-4 md:px-5 rounded-md flex items-center gap-3 hover:px-8 transition-all duration-300 ease-in-out"
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
