import React, { useState, useEffect } from 'react';
import slider from '../../../assets/AllStates/slider.png'
import img1 from '../../../assets/AllStates/img1.png'
import img2 from '../../../assets/AllStates/img2.png'
import img3 from '../../../assets/AllStates/img3.png'
import img4 from '../../../assets/AllStates/img4.png'
import img5 from '../../../assets/AllStates/img5.png'
const PolicyArchiveAndSuccessStories = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Success stories data
  const successStories = [
    {
      title: "Safran Aircraft Engines and Safran Electrical and power",
      points: [
        "Invest Ghana supported with regulatory advisors on the industrial licenses and offset procedures",
        "Safran inaugurated manufacturing facilities in July 2022",
        "Conducted location analysis in 7 states before finalising Hyderabad on the investment destination"
      ]
    },
    {
      title: "Boeing India Engineering & Technology Center",
      points: [
        "Established largest Boeing engineering center outside the US",
        "Invested over $200 million in India operations",
        "Created over 4,000 high-skilled engineering jobs"
      ]
    },
    {
      title: "Airbus India Operations",
      points: [
        "Set up engineering center in Bangalore with 6,000+ engineers",
        "Contributed to design of A350 and A320neo aircraft families",
        "Partnered with Indian suppliers for global supply chain integration"
      ]
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % successStories.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [successStories.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % successStories.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="">

      {/*  */}
      <div className=' mt-20'>
          <div className="bg-red-600 text-white text-center py-3 mb-6">
          <h2 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-bold">Major Investors</h2>
        </div>
        <div className=' flex flex-col md:flex-row items-center gap-12 mt-12 justify-between bg-[#002be855] md:p-12 w-[95%] mx-auto '>
            <img className=' w-[200px]' src={img1} alt="" />
              <img className=' w-[200px]' src={img2} alt="" />
              <img className=' w-[200px]' src={img3} alt="" />
              <img className=' w-[200px]' src={img4} alt="" />
              <img className=' w-[200px]' src={img5} alt="" />
        </div>
      </div>

      {/* Policy Cards Section */}
      <div className=" mt-20">


        {/* Policy Archive Section */}
        <div className="bg-red-600 text-white mt-20 text-center py-3 mb-6">
          <h2 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-bold">Policy Archive</h2>
        </div>

        {/* Policy Archive Cards */}
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 w-[95%] mx-auto">
          {/* Archive Card 1 */}
          <div className="bg-[#00105C] text-white p-4 rounded-lg border-l-8 border-red-500">
            <div className="md:text-[20px] text-[15px] font-[600]  text-white mb-1">RCS - UDAN Scheme 2022</div>
            <div className="md:text-[20px] text-[15px] font-normal mb-2">RCS - UDAN Scheme 2022</div>
            <div className="flex items-center md:text-[20px] text-[15px] font-[600]">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              pdf
            </div>
          </div>

          {/* Archive Card 2 */}
          <div className="bg-[#00105C] text-white p-4 rounded-lg border-l-8 border-red-500">
            <div className="md:text-[20px] text-[15px] font-[600]  text-white mb-1">National Logistics Policy 2022</div>
            <div className="md:text-[20px] text-[15px] font-normal mb-2">The guideline aim to enable private and public</div>
            <div className="flex items-center md:text-[20px] text-[15px] font-[600]">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              pdf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyArchiveAndSuccessStories;