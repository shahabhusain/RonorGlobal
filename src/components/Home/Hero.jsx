import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
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
 const slidesData = [
  {
    background: hero1,
    title: "Ghana",
    buttonText: "A LAND OF ECONOMIC OPPORTUNITIES",
    stats: [
      {
        icon: img1,
        title: "5th Largest Economy",
        description: "Estimated GDP Growth: 6.4% (FY25) — Fastest Among Large Economies"
      },
      {
        icon: img2,
        title: "Robust FDI",
        description: "69.14% of total FDI inflows (since April 2000) came after 2014"
      },
      {
        icon: img3,
        title: "Booming Exports",
        description: "Total: 433.09 Bn during FY 2023-24"
      }
    ]
  },
  {
    background: hero2,
    title: "Education Sector",
    buttonText: "INVEST IN FUTURE MINDS",
    stats: [
      {
        icon: img1,
        title: "Global Talent",
        description: "Home to world-renowned institutions and skilled graduates"
      },
      {
        icon: img2,
        title: "E-Learning Growth",
        description: "Digital education market to grow 3x by 2027"
      },
      {
        icon: img3,
        title: "Government Support",
        description: "Public-private partnerships are rapidly growing"
      }
    ]
  },
  {
    background: hero3,
    title: "Transport Infrastructure",
    buttonText: "DRIVING DEVELOPMENT",
    stats: [
      {
        icon: img1,
        title: "Railway Expansion",
        description: "Dedicated freight corridors boosting logistics"
      },
      {
        icon: img2,
        title: "Smart Cities",
        description: "Connected transport systems under Smart City mission"
      },
      {
        icon: img3,
        title: "Highway Network",
        description: "Massive highway expansions across regions"
      }
    ]
  }
];


  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ 
          delay: 5000,
          disableOnInteraction: false 
        }}
        loop
        speed={1000}
        pagination={{ 
          clickable: true,
          dynamicBullets: true 
        }}
        navigation
        className="hero-swiper"
      >
       {slidesData.map((slide, index) => (
  <SwiperSlide key={index}>
    <div 
      className="h-screen bg-cover bg-center flex items-center relative"
      style={{ backgroundImage: `url(${slide.background})` }}
    >
      <div className="absolute inset-0 md:bg-black/30"></div>

      <div className="md:container mx-auto md:px-4 z-10">
        <div className="flex flex-col md:gap-6 gap-3 items-center text-center backdrop-blur-sm md:bg-white/10 p-2 sm:p-8 md:p-10 rounded-xl md:border border-none md:border-white/20 max-w-4xl mx-auto transform transition-all duration-700 hover:scale-[1.02]">
          <h1 className="text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold text-white drop-shadow-lg animate-fadeIn">
            {slide.title}
          </h1>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-yellow-500 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200"></div>
            <button className="relative text-sm md:text-xl lg:text-2xl rounded-lg font-bold text-white py-2 md:py-3 px-5 md:px-7 bg-red-600 hover:bg-red-700 transition-all duration-300">
              {slide.buttonText}
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full mt-4">
            {slide.stats.map((stat, i) => (
              <div 
                key={i}
                className="bg-white/10 border border-white/20 rounded-xl p-4 flex flex-col items-center gap-3 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="p-3 bg-white/20 rounded-full">
                  <img 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain" 
                    src={stat.icon} 
                    alt={stat.title} 
                  />
                </div>
                <h3 className="text-sm md:text-lg font-bold text-white">{stat.title}</h3>
                <p className="text-xs md:text-sm text-white/90 text-center">{stat.description}</p>
              </div>
            ))}
          </div>

          <Link
            to="/opportunity"
            className="mt-6 text-sm md:text-base font-semibold bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-lg flex items-center gap-2 hover:gap-3 hover:shadow-lg transition-all duration-300 group"
          >
            Know More 
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </div>
  </SwiperSlide>
))}

      </Swiper>

    </div>
  );
};

export default Hero;