import React, { useState, useEffect } from 'react';
import { LuDownload } from "react-icons/lu";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Resource = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    
const data = [
  {
    title: "FDI Policy (Consolidated)",
    desc: "Aimed to capture and keep pace with the regulatory framework of Foreign Direct Investment (FDI) in Ghana, this document consolidates all policy updates to ensure transparency and investor clarity.",
    pdf: "fdi-policy.pdf"
  },
  {
    title: "Economic Survey 2024-25",
    desc: "Showcases the growth, development, and prospects of Ghana’s economy over the fiscal year, providing sector-wise insights and economic performance evaluations.",
    pdf: "economic-survey.pdf"
  },
  {
    title: "Foreign Trade Policy 2023",
    desc: "Lays down a blueprint to integrate Ghana with the global markets through strategic export promotion, infrastructure enhancement, and improved trade facilitation.",
    pdf: "trade-policy.pdf"
  },
  {
    title: "Budget 2025-26",
    desc: "Presents broad aggregates of the Budget for easy understanding by citizens and investors, highlighting key allocations, fiscal targets, and economic priorities for the year.",
    pdf: "budget.pdf"
  },
  {
    title: "Ghana Integrated Logistics Report",
    desc: "Explores the transformative potential of integrated logistics in Ghana, addressing infrastructure gaps, multimodal transport, and digital supply chain innovations.",
    pdf: "logistics-report.pdf"
  }
];


    // Check if mobile view
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Set initial value
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Slider navigation
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? data.length - 1 : prev - 1));
    };

    return (
        <div className='w-[95%]  mx-auto my-20'>
            <h1 className='text-[#00105C] text-2xl md:text-3xl lg:text-4xl xl:text-[40px] font-extrabold mb-2'>
                Resources Repository
            </h1>

            {/* Desktop Grid View */}
            <div className='hidden md:grid mt-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6'>
                {data.map((item, index) => (
                    <div 
                        key={`desktop-${index}`} 
                        className='bg-[#00105C] border-l-[20px] border-l-red-500 flex flex-col gap-4 p-6 rounded-r-3xl hover:shadow-xl transition-shadow duration-300'
                    >
                        <h1 className='text-white text-lg md:text-base lg:text-lg xl:text-xl font-extrabold'>
                            {item.title}
                        </h1>
                        <p className='text-white text-xs md:text-xs lg:text-sm font-medium'>
                            {item.desc}
                        </p>
                        <a 
                            href={`/downloads/${item.pdf}`} 
                            className='text-white text-sm md:text-xs lg:text-sm xl:text-base flex gap-2 items-center hover:text-red-300 transition-colors duration-200'
                            download
                        >
                            <LuDownload className='text-lg' /> 
                            <span className='font-extrabold'>Download PDF</span>
                        </a>
                    </div>
                ))}
            </div>

            {/* Mobile Slider View */}
            <div className='md:hidden relative mt-12'>
                <div className='overflow-hidden'>
                    <div 
                        className='flex transition-transform duration-300 ease-in-out'
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {data.map((item, index) => (
                            <div 
                                key={`mobile-${index}`}
                                className='w-full flex-shrink-0 px-4'
                            >
                                <div className='bg-[#00105C] border-l-[15px] border-l-red-500 flex flex-col gap-3 p-5 rounded-r-3xl'>
                                    <h1 className='text-white text-lg font-extrabold'>
                                        {item.title}
                                    </h1>
                                    <p className='text-white text-xs font-medium'>
                                        {item.desc}
                                    </p>
                                    <a 
                                        href={`/downloads/${item.pdf}`} 
                                        className='text-white text-sm flex gap-2 items-center hover:text-red-300 transition-colors duration-200'
                                        download
                                    >
                                        <LuDownload className='text-lg' /> 
                                        <span className='font-extrabold'>PDF</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Slider Controls */}
                <div className='flex justify-between items-center mt-6 px-4'>
                    <button 
                        onClick={prevSlide}
                        className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200'
                        aria-label="Previous resource"
                    >
                        <FaChevronLeft size={18} />
                    </button>
                    
                    <div className='flex gap-2'>
                        {data.map((_, index) => (
                            <button
                                key={`dot-${index}`}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full ${currentSlide === index ? 'bg-[#00105C]' : 'bg-gray-300'}`}
                                aria-label={`Go to resource ${index + 1}`}
                            />
                        ))}
                    </div>
                    
                    <button 
                        onClick={nextSlide}
                        className='p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition-colors duration-200'
                        aria-label="Next resource"
                    >
                        <FaChevronRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Resource;