import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import main from '../../assets/Career/blog.png'
import { Link } from 'react-router-dom';
const NewsUI = () => {
  const [expandedYears, setExpandedYears] = useState({
    2025: true,
    2024: false,
    2023: false,
    2022: false,
    2021: false,
    2020: false,
    2019: false,
    2018: false
  });

  const toggleYear = (year) => {
    setExpandedYears(prev => ({
      ...prev,
      [year]: !prev[year]
    }));
  };

  const articles = [
    {
      id: 1,
      date: "Mar 17, 2025",
      title: "Women Shaping the future of pharma industries",
      subtitle: "How Women Highlighting in Anne Reilly in pharma Sectors",
      category: "Women's Day",
      image: main
    },
    {
      id: 2,
      date: "Jan 24, 2025",
      title: "Pharma and Growing Synergies in Chemicals Sector",
      subtitle: "The economic relationship between pharma and chem inds.",
      category: "CHEMICALS",
      image: main
    },
    {
      id: 3,
      date: "Feb 15, 2025",
      title: "Union Budget 2025-26: Strengthening the fabric of the textile Industry",
      subtitle: "Govt's fresh impetus to and contributions to the...",
      category: "TEXTILE & APPAREL",
      image:main
    },
    {
      id: 4,
      date: "Jan 16, 2025",
      title: "Liquid for success: A stitch in time for leather and footwear sector",
      subtitle: "The liquid chain buoght the current using Organisation.",
      category: "CHEMICALS",
      image: main
    },
    {
      id: 5,
      date: "Jan 15, 2025",
      title: "Union Budget 2025-26: Strengthening the fabric of the textile Industry",
      subtitle: "Govt's fresh impetus to and contributions to the...",
      category: "TEXTILE & APPAREL",
      image: main
    },
    {
      id: 6,
      date: "Feb 14, 2025",
      title: "Liquid for success: A stitch in time for leather and footwear sector",
      subtitle: "The liquid chain buoght the current using Organisation.",
      category: "Automotive Energy",
      image: main
    },
    {
      id: 7,
      date: "Feb 13, 2025",
      title: "Union Budget 2025-26: Strengthening the fabric of the textile Industry",
      subtitle: "Govt's fresh impetus to and contributions to the...",
      category: "Multi Processing",
      image: main
    },
    {
      id: 8,
      date: "Feb 12, 2025",
      title: "Liquid for success: A stitch in time for leather and footwear sector",
      subtitle: "The liquid chain buoght the current using Organisation.",
      category: "CHEMICALS",
      image: main
    }
  ];

  const popularBlogs = [
    {
      date: "Feb 18, 2025",
      title: "India's Union Budget 2024-25: Key Highlights",
      author: "By Aksh Agarwal"
    },
    {
      date: "Feb 16, 2025",
      title: "India's Union Budget FY 2024-25: Key Takeaways",
      author: "By Aksh Agarwal"
    },
    {
      date: "Mar 16, 2024",
      title: "The Role of Government Initiatives in Boosting Startups",
      author: "By Swast Dharti"
    },
    {
      date: "Apr 30, 2024",
      title: "E-Commerce Boom in India: Current Trends and Prospects",
      author: "By Hemang Dharma"
    }
  ];

  return (
    <div className="">
      <div className="w-[95%] mx-auto p-4">
        {/* Header */}
        <div className="flex items-center flex-col md:flex-row justify-between mb-6">
          <div className="flex items-center md:gap-12 gap-2 justify-between w-full">
            <div className="relative w-full pl-4 pr-10 py-3 border border-gray-300 rounded-md  focus:outline-none focus:ring-2 focus:ring-blue-500">
              <input
                type="text"
                placeholder="Search Here..."
                className=" focus:outline-none"
              />
              <Search className="absolute right-3 top-3.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors">
              Apply
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Latest Articles Header */}
            <div className=" mb-12 flex items-center gap-6">
              <h2 className=" font-semibold bg-red-600 md:w-[500px] w-[300px] text-white px-4 py-2 rounded-r-md md:text-[36px] text-[25px]">Latest Articles</h2>
              <div className='bg-red-600 w-full h-[2px]'></div>
            </div>

            {/* Articles List */}
            <div className="bg-white border border-gray-200 rounded-b-md">
              {articles.map((article, index) => (
                <div key={article.id} className={`p-4 ${index !== articles.length - 1 ? 'border-b border-gray-200' : ''}`}>
                  <div className="flex flex-col md:flex-row items-start space-x-4">
                    {/* Article Image */}
                  <img className=' md:w-[200px]' src={article.image} alt="" />

                    {/* Article Content */}
                    <div className="flex-1 mt-4 md:mt-0">
                      <div className="text-sm text-gray-500 mb-1">{article.date}</div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-blue-600 cursor-pointer">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">{article.subtitle}</p>
                      <Link to="/blogdetail" className="text-red-600 text-sm font-medium hover:text-red-700">
                        Know More →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-6 space-x-2">
              {[1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  className={`w-8 h-8 rounded ${
                    page === 5 ? 'bg-blue-600 text-white' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="px-3 py-1 border border-gray-300 rounded text-gray-700 hover:bg-gray-50">
                →
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Archived Articles */}
            <div className="bg-white border border-gray-200 rounded-md mb-6">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">ARCHIVED ARTICLE</h3>
              </div>
              <div className="p-4">
                {Object.entries(expandedYears).map(([year, isExpanded]) => (
                  <div key={year} className="mb-2">
                    <button
                      onClick={() => toggleYear(year)}
                      className="flex items-center justify-between w-full text-left text-blue-600 hover:text-blue-800"
                    >
                      <span>{year}</span>
                      {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Blogs */}
            <div className="bg-white border border-gray-200 rounded-md">
              <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
                <h3 className="font-semibold text-gray-900">POPULAR BLOGS</h3>
              </div>
              <div className="p-4">
                {popularBlogs.map((blog, index) => (
                  <div key={index} className={`pb-4 ${index !== popularBlogs.length - 1 ? 'border-b border-gray-200 mb-4' : ''}`}>
                    <div className="text-xs text-gray-500 mb-1">{blog.date}</div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1 hover:text-blue-600 cursor-pointer">
                      {blog.title}
                    </h4>
                    <div className="text-xs text-gray-600">{blog.author}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsUI;