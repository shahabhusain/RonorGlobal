import React from 'react';

const Blog = () => {
 const blogPosts = [
  {
    category: "Investment Opportunities",
    date: "May 12, 2025",
    title: "Ghana's Rising Sectors: Where to Invest in 2025",
    author: "Kwame Boateng"
  },
  {
    category: "Infrastructure Development",
    date: "April 27, 2025",
    title: "Ghana Pushes for Major Infrastructure Growth",
    author: "Abena Mensah"
  },
  {
    category: "Economic Insights",
    date: "March 15, 2025",
    title: "Ghana's Budget 2025: Boosting Private Sector Investment",
    author: "Yaw Osei"
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
        <h1 className="xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] font-bold">Blogs</h1>
      </div>

      <div className=" w-[80%] mx-auto px-4 py-8 mt-12">
          {/* Left Section - Blog Posts */}
          <div className="">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Blogs</h2>
            
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-4 border">
                  <div className="flex justify-between items-start mb-3">
                    <span className="bg-red-500 text-white px-3 py-1 rounded text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-red-500 text-sm font-medium">
                      {post.date}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-gray-600">
                    By: <span className="text-red-500">{post.author}</span>
                  </p>
                </div>
              ))}
              
              <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors">
                More Blogs
              </button>
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