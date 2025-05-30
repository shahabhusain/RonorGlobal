import React, { useState, useEffect } from 'react';
import slider from '../../assets/AllStates/slider.png'
import img1 from '../../assets/AllStates/img1.png'
import img2 from '../../assets/AllStates/img2.png'
import img3 from '../../assets/AllStates/img3.png'
import img4 from '../../assets/AllStates/img4.png'
import img5 from '../../assets/AllStates/img5.png'
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
          <h2 className="text-[42px] font-bold">Major Investors</h2>
        </div>
        <div className=' flex items-center gap-12 mt-12 justify-between bg-[#002be855] p-12 w-[95%] mx-auto '>
            <img className=' w-[200px]' src={img1} alt="" />
              <img className=' w-[200px]' src={img2} alt="" />
              <img className=' w-[200px]' src={img3} alt="" />
              <img className=' w-[200px]' src={img4} alt="" />
              <img className=' w-[200px]' src={img5} alt="" />
        </div>
      </div>

      {/* Policy Cards Section */}
      <div className=" mt-20">
           <div className="bg-red-600 text-white text-center py-3 mb-6">
          <h2 className="text-[42px] font-bold">Incentives & Schemes</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-12 lg:grid-cols-5 gap-4 mb-6 w-[95%] mx-auto">
          {/* Policy Card 1 */}
          <div className="bg-[#00105C] text-white border-b-red-600 border-b-[6px] p-4 rounded-lg relative">
            <div className="absolute top-2 right-2">
              <div className="bg-white p-1 rounded">
                <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-[20px] max-w-[200px]  font-medium">
              Production-linked Incentive (PLI) Scheme for Drone and Drone Components
            </div>
          </div>

          {/* Policy Card 2 */}
          <div className="bg-[#00105C] text-white border-b-red-600 border-b-[6px] p-4 rounded-lg relative">
            <div className="absolute top-2 right-2">
              <div className="bg-white p-1 rounded">
                <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-[20px] max-w-[200px]  font-medium">
              Guidelines for setting up of Greenfield Airports
            </div>
          </div>

          {/* Policy Card 3 */}
          <div className="bg-[#00105C] border-b-red-600 border-b-[6px] text-white p-4 rounded-lg relative">
            <div className="absolute top-2 right-2">
              <div className="bg-white p-1 rounded">
                <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-[20px] max-w-[200px]  font-medium">
              National Monetisation Pipeline 2022
            </div>
          </div>

          {/* Policy Card 4 */}
          <div className="bg-[#00105C] border-b-red-600 border-b-[6px] text-white p-4 rounded-lg relative">
            <div className="absolute top-2 right-2">
              <div className="bg-white p-1 rounded">
                <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-[20px] max-w-[200px]  font-medium">
              Drones Rule 2021
            </div>
          </div>

          {/* Policy Card 5 */}
          <div className="bg-[#00105C] border-b-red-600 border-b-[6px] text-white p-4 rounded-lg relative">
            <div className="absolute top-2 right-2">
              <div className="bg-white p-1 rounded">
                <svg className="w-4 h-4 text-blue-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="text-[20px] max-w-[200px] font-medium">
              Revised MRO guideline
            </div>
          </div>
        </div>

        {/* Policy Archive Section */}
        <div className="bg-red-600 text-white mt-20 text-center py-3 mb-6">
          <h2 className="text-[42px] font-bold">Policy Archive</h2>
        </div>

        {/* Policy Archive Cards */}
        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 w-[95%] mx-auto">
          {/* Archive Card 1 */}
          <div className="bg-[#00105C] text-white p-4 rounded-lg border-l-8 border-red-500">
            <div className="text-[20px] font-[600]  text-white mb-1">RCS - UDAN Scheme 2022</div>
            <div className="text-[20px] font-normal mb-2">RCS - UDAN Scheme 2022</div>
            <div className="flex items-center text-[20px] font-[600]">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              pdf
            </div>
          </div>

          {/* Archive Card 2 */}
          <div className="bg-[#00105C] text-white p-4 rounded-lg border-l-8 border-red-500">
            <div className="text-[20px] font-[600]  text-white mb-1">National Logistics Policy 2022</div>
            <div className="text-[20px] font-normal mb-2">The guideline aim to enable private and public</div>
            <div className="flex items-center text-[20px] font-[600]">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              pdf
            </div>
          </div>

          {/* Archive Card 3 */}
          <div className="bg-[#00105C] text-white p-4 rounded-lg border-l-8 border-red-500">
            <div className="text-[20px] font-[600]  text-white mb-1">National UTM policy Framework - 2021</div>
            <div className="text-[20px] font-normal mb-2">National UTM policy Framework - 2021</div>
            <div className="flex items-center text-[20px] font-[600]">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              pdf
            </div>
          </div>

          {/* Archive Card 4 */}
          <div className="bg-[#00105C] text-white p-4 rounded-lg border-l-8 border-red-500">
            <div className="text-[20px] font-[600]  text-white mb-1">Drone Import policy 2022</div>
            <div className="text-[20px] font-normal mb-2">Drone Import policy 2022</div>
            <div className="flex items-center text-[20px] font-[600]">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              pdf
            </div>
          </div>

          {/* Archive Card 5 */}
          <div className="bg-[#00105C] text-white p-4 rounded-lg border-l-8 border-red-500">
            <div className="text-[20px] font-[600]  text-white mb-1">National Air Sports policy, 2022</div>
            <div className="text-[20px] font-normal mb-2">National Air Sports policy, 2023</div>
            <div className="flex items-center text-[20px] font-[600]">
              <svg className="w-6 h-6 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              pdf
            </div>
          </div>
        </div>

        {/* Featured Success Stories Section */}
        <div className="bg-red-600 text-white text-center py-3 mb-6 mt-20">
          <h2 className="text-[42px] font-bold">Featured Success Stories</h2>
        </div>

        {/* Success Stories Container */}
        <div className="bg-[#00105C] mt-12 text-white p-6 rounded-lg relative overflow-hidden w-[95%] mx-auto">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200 z-10"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-[42px] font-bold mb-2">Featured Success Stories</h3>
              <div className=" text-white text-[18px] font-[500] border-b border-red-400 inline-block">
                Inspiring Tales of Achievement and Triumph
              </div>
            </div>
           <img src={slider} alt="" />
          </div>

          {/* Slider Container */}
          <div className="relative h-64">
            <div 
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {successStories.map((story, index) => (
                <div key={index} className="w-full flex-shrink-0 mt-8">
                  <div className="bg-white text-blue-900 p-3 mr-12 rounded mb-4 font-medium">
                    {story.title}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-3">
                      {story.points.slice(0, 2).map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-center ">
                          <div className="bg-white w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <div className="bg-white text-blue-900 p-3 rounded  font-medium">{point}</div>
                        </div>
                      ))}
                    </div>
                    {story.points[2] && (
                      <div className="flex items-center">
                        <div className="bg-white w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <div className="bg-white text-blue-900 p-3 rounded  font-medium">{story.points[2]}</div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
            <button className="bg-white text-blue-900 px-6 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
              Become the next success story
            </button>
            <button className="bg-red-600 text-white px-6 py-2 rounded font-medium text-sm hover:bg-red-700 transition-colors">
              CONTACT US NOW
            </button>
          </div>

          {/* Pagination dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {successStories.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-red-500' : 'bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyArchiveAndSuccessStories;