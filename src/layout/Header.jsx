import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import PreNav from "./PreNav";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hidePreNav, setHidePreNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

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
      { name: "#GhanaAtDavos", path: "/ghana" },
      { name: "ABonded Manufacturing", path: "/bonded" },
      { name: "One District One Product", path: "/district" },
      { name: "Tenders", path: "/tender" },
    ],
    allSectors: [
      { name: "All States", path: "/allstates" },
      { name: "Civil Aviation", path: "/civil" },
      { name: "Construction", path: "/construction" },
      { name: "Capital Goods", path: "/capital" },
      { name: "Beauty & Personal Care", path: "/beautiful" },
      { name: "Furniture", path: "/jewelery" },
      { name: "Gems & Jewellery", path: "/germs" },
    ],
  };

  return (
    <header className="bg-white mx-auto w-full fixed top-0 left-0 z-50">
      {!hidePreNav && <PreNav />}

      <div className="w-full flex justify-between items-center py-3 px-2 md:px-4 lg:px-6">
        <Link
          to="/"
          className="text-[#00105C] xl:text-[24px] lg:text-[16px] md:text-[14px] text-[14px] font-[700] flex items-center md:gap-3 gap-1"
        >
          Ronor Group
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-5 xl:gap-12 lg:gap-2 text-[#8B8B8B] text-sm md:text-[13px] lg:text-[14px] xl:text-[17px] font-semibold">
          <Link
            to="/"
            className={`hover:text-[#0C1644] ${isActive("/") ? "text-[#0C1644] font-bold" : ""}`}
          >
            Home
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("investGhana")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#0C1644]">
              Invest Ghana <TiArrowSortedDown className="text-[20px]" />
            </div>
            {activeDropdown === "investGhana" && (
              <div className="absolute top-2 left-0 mt-2 w-56 bg-[#00105C] text-white shadow-lg rounded-md py-2 z-50">
                {dropdownItems.investGhana.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 hover:bg-gray-100 hover:text-black"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/careers"
            className={`hover:text-[#0C1644] ${isActive("/careers") ? "text-[#0C1644] font-bold" : ""}`}
          >
            Careers
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setActiveDropdown("allSectors")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#0C1644]">
              Opportunity <TiArrowSortedDown className="text-[20px]" />
            </div>
            {activeDropdown === "allSectors" && (
              <div className="absolute top-2 left-0 mt-2 w-56 bg-white shadow-lg rounded-md py-2 z-50">
                {dropdownItems.allSectors.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/blog"
            className={`hover:text-[#0C1644] ${isActive("/blog") ? "text-[#0C1644] font-bold" : ""}`}
          >
            Blog
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/contactus">
            <button className="bg-[#F00] text-white xl:px-4 px-1 py-2 rounded-md text-sm">Contact Us</button>
          </Link>

          <Link to="/budget">
            <button className="bg-[#898989] text-white xl:px-4 px-1 py-2 rounded-md text-sm">Budget 2025</button>
          </Link>

          <div className="bg-black text-white px-3 py-1 rounded-md">
            <input
              className="focus:outline-none bg-transparent text-sm"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-[#DC2625] text-2xl"
          onClick={() => setShowMobileMenu(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      {showMobileMenu && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center px-5 pt-10 pb-20 space-y-4 overflow-auto">
          <button
            className="absolute top-4 right-4 text-[#DC2625] text-2xl"
            onClick={() => setShowMobileMenu(false)}
          >
            <FaTimes />
          </button>

          <Link to="/" onClick={() => setShowMobileMenu(false)} className="text-lg font-semibold">
            Home
          </Link>

          <div className="w-full">
            <button
              className="w-full text-left flex justify-between items-center font-medium"
              onClick={() =>
                setMobileDropdown((prev) =>
                  prev === "investGhana" ? null : "investGhana"
                )
              }
            >
              Invest Ghana <TiArrowSortedDown />
            </button>
            {mobileDropdown === "investGhana" && (
              <div className="ml-4 mt-2 space-y-2">
                {dropdownItems.investGhana.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setShowMobileMenu(false)}
                    className="block text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/careers" onClick={() => setShowMobileMenu(false)} className="text-lg font-semibold">
            Careers
          </Link>

          <div className="w-full">
            <button
              className="w-full text-left flex justify-between items-center font-medium"
              onClick={() =>
                setMobileDropdown((prev) =>
                  prev === "allSectors" ? null : "allSectors"
                )
              }
            >
              Opportunity <TiArrowSortedDown />
            </button>
            {mobileDropdown === "allSectors" && (
              <div className="ml-4 mt-2 space-y-2">
                {dropdownItems.allSectors.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    onClick={() => setShowMobileMenu(false)}
                    className="block text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/blog" onClick={() => setShowMobileMenu(false)} className="text-lg font-semibold">
            Blog
          </Link>

          <Link to="/contactus" onClick={() => setShowMobileMenu(false)} className="w-full">
            <button className="w-full bg-[#F00] text-white py-2 rounded-md text-base">
              Contact Us
            </button>
          </Link>

          <Link to="/budget" onClick={() => setShowMobileMenu(false)} className="w-full">
            <button className="w-full bg-[#898989] text-white py-2 rounded-md text-base">
              Budget 2025
            </button>
          </Link>

          <div className="bg-black w-full px-3 py-2 rounded-md">
            <input
              className="w-full bg-transparent text-white focus:outline-none text-sm"
              type="text"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
