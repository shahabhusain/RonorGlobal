import React, { useState, useEffect } from 'react';
import { Search, ChevronDown, ChevronUp, Calendar, Clock, User } from 'lucide-react';
import main from '../../assets/Career/blog.png';
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

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

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
    title: "Women Leading South Africa's Mining Renaissance",
    subtitle: "How female executives are transforming the mining sector in SA",
    category: "Women's Day",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "5 min read"
  },
  {
    id: 2,
    date: "Jan 24, 2025",
    title: "Renewable Energy Boom in the Western Cape",
    subtitle: "Solar and wind investments driving South Africa's energy transition",
    category: "RENEWABLE ENERGY",
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "4 min read"
  },
  {
    id: 3,
    date: "Feb 15, 2025",
    title: "Government's New Industrial Policy Framework 2025",
    subtitle: "Fresh incentives and support for manufacturing sectors",
    category: "MANUFACTURING",
    image: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "6 min read"
  },
  {
    id: 4,
    date: "Jan 16, 2025",
    title: "Fintech Revolution: Cape Town's Silicon Valley Moment",
    subtitle: "How South Africa is becoming Africa's fintech hub",
    category: "FINTECH",
    image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "3 min read"
  },
  {
    id: 5,
    date: "Jan 15, 2025",
    title: "Automotive Exports Surge: SA's Manufacturing Success",
    subtitle: "Local automotive industry breaks export records",
    category: "AUTOMOTIVE",
    image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "7 min read"
  },
  {
    id: 6,
    date: "Feb 14, 2025",
    title: "Platinum Group Metals: Investment Opportunities Ahead",
    subtitle: "SA's strategic advantage in global PGM markets",
    category: "MINING",
    image: "https://images.unsplash.com/photo-1503376784553-8e9df0f5b70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "4 min read"
  },
  {
    id: 7,
    date: "Feb 13, 2025",
    title: "Agri-Processing Zones: Unlocking Rural Investment",
    subtitle: "New agricultural processing hubs create job opportunities",
    category: "AGRICULTURE",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "5 min read"
  },
  {
    id: 8,
    date: "Feb 12, 2025",
    title: "Tourism Recovery: SA's Hospitality Sector Rebounds",
    subtitle: "International visitor numbers reach pre-pandemic levels",
    category: "TOURISM",
    image: "https://images.unsplash.com/photo-1605727218323-013b9c9a1c9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400",
    readTime: "3 min read"
  }
];

  const popularBlogs = [
    {
      date: "Feb 18, 2025",
      title: "Ghana's Union Budget 2024-25: Key Highlights",
      author: "By Aksh Agarwal",
      views: "1.2K"
    },
    {
      date: "Feb 16, 2025",
      title: "Ghana's Union Budget FY 2024-25: Key Takeaways",
      author: "By Aksh Agarwal",
      views: "980"
    },
    {
      date: "Mar 16, 2024",
      title: "The Role of Government Initiatives in Boosting Startups",
      author: "By Swast Dharti",
      views: "1.5K"
    },
    {
      date: "Apr 30, 2024",
      title: "E-Commerce Boom in Ghana: Current Trends and Prospects",
      author: "By Hemang Dharma",
      views: "2.1K"
    }
  ];

  // Filter articles based on search query
  useEffect(() => {
    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArticles(filtered);
  }, [searchQuery]);

  // Pagination logic
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.length > 0 
    ? filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle)
    : articles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil((filteredArticles.length > 0 ? filteredArticles.length : articles.length) / articlesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(prev => (prev < totalPages ? prev + 1 : prev));
  const prevPage = () => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev));

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-[95%] mx-auto py-8">
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full md:w-2/3">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          </div>
          <div className="flex gap-4 w-full md:w-auto">
            <select className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-red-500">
              <option>All Categories</option>
              <option>CHEMICALS</option>
              <option>TEXTILE & APPAREL</option>
              <option>Automotive Energy</option>
              <option>Women's Day</option>
            </select>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors whitespace-nowrap">
              Search Articles
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Latest Articles Header */}
            <div className="flex items-center mb-8">
              <div className="bg-red-600 h-10 w-2 rounded-full mr-4"></div>
              <h2 className="text-2xl font-bold text-gray-800">Latest Articles</h2>
            </div>

            {/* Articles List */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {currentArticles.map((article) => (
                <div key={article.id} className="border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors">
                  <div className="p-6 flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img 
                        src={article.image} 
                        alt={article.title} 
                        className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300" 
                      />
                    </div>
                    <div className="md:w-2/3">
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-xs font-medium px-2 py-1 bg-red-100 text-red-600 rounded-full">
                          {article.category}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="h-4 w-4 mr-1" />
                          {article.date}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Clock className="h-4 w-4 mr-1" />
                          {article.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 hover:text-red-600 cursor-pointer transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{article.subtitle}</p>
                      <Link 
                        to={`/blogdetail/${article.id}`} 
                        className="inline-flex items-center text-red-600 font-medium hover:text-red-700 group transition-colors"
                      >
                        Read more
                        <span className="ml-1 group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <nav className="inline-flex rounded-md shadow">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-l-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 border-t border-b border-gray-300 ${currentPage === number ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
                  >
                    {number}
                  </button>
                ))}
                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-r-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                >
                  Next
                </button>
              </nav>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Archived Articles */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-red-600 px-6 py-4">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  ARCHIVED ARTICLES
                </h3>
              </div>
              <div className="p-6">
                {Object.entries(expandedYears).map(([year, isExpanded]) => (
                  <div key={year} className="mb-3">
                    <button
                      onClick={() => toggleYear(year)}
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-red-600 transition-colors"
                    >
                      <span className="font-medium">{year}</span>
                      {isExpanded ? (
                        <ChevronUp className="h-5 w-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                    {isExpanded && (
                      <div className="mt-2 pl-4 space-y-2">
                        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => (
                          <a
                            key={month}
                            href="#"
                            className="block text-sm text-gray-600 hover:text-red-600 transition-colors"
                          >
                            {month} {year}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Blogs */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-red-600 px-6 py-4">
                <h3 className="font-semibold text-white flex items-center gap-2">
                  <User className="h-5 w-5" />
                  POPULAR BLOGS
                </h3>
              </div>
              <div className="p-6">
                {popularBlogs.map((blog, index) => (
                  <div key={index} className={`pb-4 ${index !== popularBlogs.length - 1 ? 'border-b border-gray-100 mb-4' : ''}`}>
                    <div className="flex items-center text-xs text-gray-500 mb-1 gap-2">
                      <Calendar className="h-3 w-3" />
                      {blog.date}
                    </div>
                    <h4 className="text-sm font-medium text-gray-900 mb-1 hover:text-red-600 cursor-pointer transition-colors">
                      {blog.title}
                    </h4>
                    <div className="flex justify-between items-center">
                      <div className="text-xs text-gray-600">{blog.author}</div>
                      <div className="text-xs text-gray-500">{blog.views} views</div>
                    </div>
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