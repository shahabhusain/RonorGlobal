import React from 'react';

const Blog = () => {
  const blogPosts = [
    {
      category: "Civil Aviation",
      date: "Sep 28, 2024",
      title: "100 days of progress: How PM Modi's third term...",
      author: "Jaydeep Saha"
    },
    {
      category: "Civil Aviation", 
      date: "Feb 23, 2024",
      title: "Ghana push for infrastructure development",
      author: "Dewangi Sharma"
    },
    {
      category: "Civil Aviation",
      date: "Feb 1, 2024", 
      title: "Highlights of the interim budget 2024-2025",
      author: "Ankit Agrawal"
    }
  ];

  const latestUpdates = [
    "Aviation major, Air Ghana enters into codeshare partnership with Virgin Australia",
    "Himalayan Heli Services orders 2 Airbus H125 helicopters",
    "JSW Group to invest INR 16,000 Cr in power project in Bengal",
    "Air Ghana Express launches daily direct flight service between Mangaluru and Delhi",
    "JSW Defence to invest INR 800 Cr in Telangana for drone manufacturing",
    "Hospitality sector Confident Hotel & Resorts open Telangana OURONE"
  ];

  const importantLinks = [
    "Brocheres",
    "Gona Opportunity", 
    "About Us",
    "Team Gona Blog"
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-red-500 mt-20 text-white text-center py-4">
        <h1 className="xl:text-[42px] lg:text-[35px] md:text-[30px] text-[25px]  font-bold">Latest Updates</h1>
      </div>

      <div className=" md:w-[80%] w-full mx-auto  md:px-4 py-8 mt-12">
        <div className="">

          {/* Right Section - Latest Updates */}
          <div className="">
            <div className="bg-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Updates</h2>
              
              <div className="space-y-4">
               {blogPosts.map((item, index) => (
          <li key={index} className=" flex justify-between items-start">
            <div className="flex items-center gap-6">
                <div className=' w-[50px] h-[50px] bg-[#AFDCFF] flex items-center justify-center rounded-full'>
                <div className='bg-[#00105C] w-[28px] h-[28px] rounded-full'></div>
                </div>
              <span className="text-[20px] text-[#00105C] font-medium max-w-[600px]">{item.title}</span>
            </div>
            <span className="text-[00105C] text-[#00105C] whitespace-nowrap">{item.date}</span>
          </li>
        ))}
              </div>
            </div>
          </div>
        </div>

        {/* Important Links Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Important Links</h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {importantLinks.map((link, index) => (
              <button 
                key={index}
                className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600 transition-colors font-medium"
              >
                {link}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;