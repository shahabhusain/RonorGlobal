import React, { useState } from 'react'
import { FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import img1 from '../../assets/AllSectors/agri.webp'
import img2 from '../../assets/AllSectors/oil.webp'
import img3 from '../../assets/AllSectors/health.jpg'
import img4 from '../../assets/AllSectors/ict.jpg'
import img5 from '../../assets/AllSectors/manu.jpeg'
import img6 from '../../assets/AllSectors/mining.webp'
import img7 from '../../assets/AllSectors/property.jpg'
import img8 from '../../assets/AllSectors/recreation.jpg'
import img9 from '../../assets/AllSectors/energy.jpg'
import img10 from '../../assets/AllSectors/education.jpg'
import img11 from '../../assets/AllSectors/finan.jpg'
import img12 from '../../assets/AllSectors/trans.png'
import { Link } from 'react-router-dom'

const Investible = () => {
  const sectors = [
    {
      id: 1,
      title: "Agriculture & Agro Processing",
      image: img1,
      description:
        "Ghana’s electricity supply is derived from hydropower generated from the Akosombo, Bui Power and Kpong dams, and 10 thermal plants at Aboadze in Western Region.",
        link:"/agriculture"
    },
    {
      id: 2,
      title: "Oil & Gas",
      image: img2,
      description:
        "AfCFTA presents an opportunity for intra-regional growth by leveraging access to common markets and knowledge transfer through labour mobility, thereby attracting foreign direct investments into the region.",
        link:"/oil"
    },
    {
      id: 3,
      title: "Health",
      image: img3,
      description:
        "It is estimated that health expenditure reached USD2.3bn in 2020, representing 3.0% of GDP. Health expenditure has fallen,with a CAGR of -3.4%, since 2015. It is estimated that per capita health expenditure reached USD61.4 in 2020. Around 58%of expenditure is met by the private sector. Private health insurance only accounts for less than 1% of private spending.",
        link:"/health"
    },
    {
      id: 4,
      title: "ICT And Fintech",
      image: img4,
      description:
        "International arrivals of tourist increased from 932,579 in 2016 to 1,130,307 in 2019, however 2020 saw a reduction to 355,108 due to lockdown measures in response to Covid -19.",
        link:"/ict"
    },
    {
      id: 5,
      title: "Manufacturing",
      image: img5,
      description:
        "Ghana is ranked the second most peaceful country in Africa and the 38th most peaceful country in the world as per the 2021 Global Peace Index.",
        link:"/manufacture"
    },

     {
      id: 6,
      title: "Mining And Mineral Processing",
      image: img6,
      description:
        "Newly discovered deposits of lithium in 2021 amounting to 30.1million tonnes, setting Ghana up to become West Africa’s first lithium producer.",
        link:"/mining"
    },

     {
      id: 7,
      title: "Property Development",
      image: img7,
      description:
        "Water is provided to citizens through the Ghana Water Company Limited, Community Water and Sanitation Agency and private water producers.",
        link:"/property"
    },

     {
      id: 8,
      title: "Recreation And Tourism",
      image: img8,
      description:
        "Government incentives include tax holidays, rebates, provision of industrial parks, provision of finance through partnering agencies and interest subsidies",
        link:"/recreation"
    },

     {
      id: 9,
      title: "Energy",
      image: img9,
      description:
        "Ghana is blessed with a very youthful population, about 67% of the population is within the ages of 15 to 64 years.",
        link:"/energy"
    },

     {
      id: 10,
      title: "Education",
      image: img10,
      description:
        "Ghana has a robust education system that caters to students at various levels. The official language of instruction is English, however local languages and French are taught as subjects",
        link:"/education"
    },

     {
      id: 11,
      title: "Financial Services",
      image: img11,
      description:
        "Government incentives include tax holidays, rebates, provision of industrial parks, provision of finance through partnering agencies and interest subsidies.",
        link:"/financial"
    },

     {
      id: 12,
      title: "Transport Infrastructure",
      image: img12,
      description:
        "Water is provided to citizens through the Ghana Water Company Limited, Community Water and Sanitation Agency and private water producers.",
        link:"/transport"
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === sectors.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? sectors.length - 1 : prevIndex - 1
    )
  }

  const visibleSectors = []
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % sectors.length
    visibleSectors.push(sectors[index])
  }

  return (
    <div className='mt-20 w-[90%] mx-auto'>
      <div className='flex items-center justify-between mb-8'>
        <h1 className='text-[#00105C] text-[32px] md:text-[42px] font-[700]'>Investible Sectors</h1>
        <Link to="/allsectors" className='text-[16px] md:text-[20px] text-white font-[600] bg-red-500 py-2 px-4 md:py-3 md:px-5 rounded-md flex items-center gap-2 md:gap-4'>
          View All Sectors <FaArrowRight />
        </Link>
      </div>

      <div className='relative'>
        <div className='flex overflow-hidden'>
          <div className='flex w-full items-center justify-around transition-transform duration-300'>
            {visibleSectors.map((sector, index) => (
              <div
                key={sector.id}
                className={` w-[400px] h-[520px] px-2 ${index === 1 ? 'scale-105' : ''}`}
              >
                <div className="relative w-full  rounded-xl overflow-hidden group shadow-lg">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-[600px] object-cover transition-opacity duration-500 group-hover:opacity-0"
                  />

                   <h1 className=' absolute top-40 text-white text-[40px] font-[700] p-6'>{sector.title}</h1>

                  <div className="absolute inset-0 bg-white shadow-lg text-[#00105C] opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-center items-start">
                    <h3 className="lg:text-xl md:text-md xl:text-2xl font-bold mb-2">{sector.title}</h3>
                    <p className="text-sm md:text-base">{sector.description}</p>
                    <Link to={sector.link} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">
                      Know More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className='absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 hover:text-black bg-[#FF0000] text-white rounded-full p-2 shadow-md hover:bg-gray-100'
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={nextSlide}
          className='absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 hover:text-black bg-[#FF0000] text-white rounded-full p-2 shadow-md hover:bg-gray-100 border-[#ffffff4d] border-[2px]'
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Dots indicator */}
      <div className='flex justify-center mt-6 space-x-2'>
        {sectors.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-red-500' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Investible
