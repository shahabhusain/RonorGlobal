import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import PreNav from "./PreNav";
import logo from '../assets/logo.png'
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hidePreNav, setHidePreNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setHidePreNav(true);
      } else {
        setHidePreNav(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const dropdownItems = {
    investGhana: [
      { name: "About Us", path: "/about" },
      { name: "#GhanaAtDavos", path: "/" },
      { name: "ABonded Manufacturing", path: "/" },
      { name: "One District One Product", path: "/" },
      { name: "Tenders", path: "/" },
    ],
    allSectors: [
      { name: "All States", path: "/allstates" },
      { name: "Civil Aviation", path: "/" },
      { name: "Construction", path: "/" },
      { name: "Consumer Goods", path: "/" },
      { name: "Beauty & Personal Care", path: "/" },
      { name: "Gems & Jewellery", path: "/" },
      { name: "Furniture", path: "/" },
    ],
  };

  return (
    <header className="bg-white mx-auto w-full fixed top-0 left-0 z-50">
      {!hidePreNav && <PreNav />}

      <div className="w-full flex justify-between items-center py-3 px-2 md:px-4 lg:px-10">
        <h1 className="text-[#00105C] text-[24px] font-[700] flex items-center gap-3"><img src={logo} alt="" />Invest gana</h1>
        
        <nav className="hidden md:flex gap-5 md:gap-3 lg:gap-12 text-[#8B8B8B] text-sm md:text-[14px] lg:text-[17px] font-semibold">
          {/* Home Link */}
          <Link
            to="/"
            className={`hover:text-[#0C1644] ${
              isActive("/") ? "text-[#0C1644] font-bold" : "text-[#8B8B8B]"
            }`}
          >
            Home
          </Link>
          
          {/* Invest Ghana with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("investGhana")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#0C1644]">
              Invest Ghana <TiArrowSortedDown className="text-[20px]" />
            </div>
            {activeDropdown === "investGhana" && (
              <div className="absolute top-3 left-0 mt-2 w-56 bg-[#00105C] text-white shadow-lg rounded-md py-2 z-50">
                {dropdownItems.investGhana.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-white hover:bg-gray-100 hover:text-black"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Careers Link */}
          <Link
            to="/careers"
            className={`hover:text-[#0C1644] ${
              isActive("/careers") ? "text-[#0C1644] font-bold" : "text-[#8B8B8B]"
            }`}
          >
            Careers
          </Link>
          
          {/* All Sectors with Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("allSectors")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#0C1644]">
              Opportunity <TiArrowSortedDown className="text-[20px]" />
            </div>
            {activeDropdown === "allSectors" && (
              <div className="absolute top-3.5 left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                {dropdownItems.allSectors.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          {/* Blog Link */}
          <Link
            to="/blog"
            className={`hover:text-[#0C1644] ${
              isActive("/blog") ? "text-[#0C1644] font-bold" : "text-[#8B8B8B]"
            }`}
          >
            Blog
          </Link>
        </nav>
      
        <div className="flex items-center gap-5">
          <Link to="/conatctus">
            <button className="hidden md:block bg-[#F00]  text-white px-4 md:px-5 py-1 md:py-3 text-xs md:text-[14px] lg:text-[15px] font-normal rounded-md">
              Contact Us
            </button>
          </Link>

          <Link to="/budget">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="Block bg-[#898989] text-white px-4 md:px-5 py-1 md:py-3 text-xs md:text-[15px] lg:text-[15px] font-normal rounded-md"
            >
              Budget 2025
            </button>
          </Link>
          
          <div className="bg-black text-white md:px-5 py-1 md:py-2 rounded-md">
            <input className="focus:outline-none border-none bg-transparent" type="text" placeholder="search ..." />
          </div>
        </div>
        
        <button
          className="md:hidden text-[#DC2625] text-2xl"
          onClick={() => setShowMobileMenu(true)}
        >
          <FaBars />
        </button>
      </div>
      
      {showMobileMenu && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center py-10 space-y-5 shadow-lg">
          <button
            className="absolute top-4 right-6 text-[#DC2625] text-2xl"
            onClick={() => setShowMobileMenu(false)}
          >
            <FaTimes />
          </button>
          
          {["/", "/invest-ghana", "/careers", "/all-sectors", "/blog"].map(
            (path, index) => (
              <Link
                key={index}
                to={path}
                className={`hover:text-[#0C1644] ${
                  isActive(path) ? "text-[#0C1644] font-bold" : "text-[#8B8B8B]"
                }`}
                onClick={() => setShowMobileMenu(false)}
              >
                {path === "/"
                  ? "Home"
                  : path.substring(1).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
            )
          )}
          
          <Link to="/contactus">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="Block bg-[#F00] w-[194px] h-[48px] text-white px-4 md:px-5 py-1 md:py-2 text-xs md:text-[18px] lg:text-[18px] font-normal rounded-md"
            >
              Contact Us
            </button>
          </Link>

          <Link to="/budget">
            <button
              onClick={() => setShowMobileMenu(false)}
              className="Block bg-[#F00] w-[194px] h-[48px] text-white px-4 md:px-5 py-1 md:py-2 text-xs md:text-[18px] lg:text-[18px] font-normal rounded-md"
            >
              Budget 2025
            </button>
          </Link>

          <div className="bg-black text-white md:px-5 py-1 md:py-2">
            <input className="focus:outline-none border-none" type="text" placeholder="search ..." />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;