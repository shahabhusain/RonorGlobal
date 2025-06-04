import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import PreNav from "./PreNav";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hidePreNav, setHidePreNav] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setHidePreNav(window.scrollY > 50);
    };

    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
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

  const navVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <header className="bg-white mx-auto w-full fixed top-0 left-0 z-50 shadow-sm">
      {!hidePreNav && <PreNav />}

      <div className="w-full flex justify-between items-center py-3 px-4 md:px-6 lg:px-8 xl:px-10">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/"
            className="text-[#00105C] text-xl md:text-2xl font-bold flex items-center gap-2"
          >
RONOR
            <span>Group</span>
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav 
          className="hidden md:flex gap-6 xl:gap-8 items-center"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <motion.div variants={navItemVariants}>
            <Link
              to="/"
              className={`relative px-2 py-1 hover:text-[#0C1644] transition-colors ${
                isActive("/") ? "text-[#0C1644] font-bold" : "text-[#8B8B8B]"
              }`}
            >
              Home
              {isActive("/") && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F00]"
                  layoutId="underline"
                />
              )}
            </Link>
          </motion.div>

          <motion.div 
            className="relative"
            variants={navItemVariants}
            onMouseEnter={() => setActiveDropdown("investGhana")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer px-2 py-1 hover:text-[#0C1644] text-[#8B8B8B]">
              Invest Ghana <TiArrowSortedDown className="text-lg" />
            </div>
            <AnimatePresence>
              {activeDropdown === "investGhana" && (
                <motion.div 
                  className="absolute top-full left-0 mt-2 w-56 bg-[#00105C] text-white shadow-xl rounded-md py-2 z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {dropdownItems.investGhana.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 hover:bg-white hover:text-[#00105C] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={navItemVariants}>
            <Link
              to="/careers"
              className={`relative px-2 py-1 hover:text-[#0C1644] transition-colors ${
                isActive("/careers") ? "text-[#0C1644] font-bold" : "text-[#8B8B8B]"
              }`}
            >
              Careers
              {isActive("/careers") && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F00]"
                  layoutId="underline"
                />
              )}
            </Link>
          </motion.div>

          <motion.div 
            className="relative"
            variants={navItemVariants}
            onMouseEnter={() => setActiveDropdown("allSectors")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <div className="flex items-center gap-1 cursor-pointer px-2 py-1 hover:text-[#0C1644] text-[#8B8B8B]">
              Opportunity <TiArrowSortedDown className="text-lg" />
            </div>
            <AnimatePresence>
              {activeDropdown === "allSectors" && (
                <motion.div 
                  className="absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md py-2 z-50 border border-gray-200"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {dropdownItems.allSectors.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-700 hover:bg-[#00105C] hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div variants={navItemVariants}>
            <Link
              to="/blog"
              className={`relative px-2 py-1 hover:text-[#0C1644] transition-colors ${
                isActive("/blog") ? "text-[#0C1644] font-bold" : "text-[#8B8B8B]"
              }`}
            >
              Blog
              {isActive("/blog") && (
                <motion.span 
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-[#F00]"
                  layoutId="underline"
                />
              )}
            </Link>
          </motion.div>
        </motion.nav>

        {/* Desktop Buttons */}
        <motion.div 
          className="hidden md:flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div ref={searchRef} className="relative">
            {searchOpen ? (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 200 }}
                exit={{ width: 0 }}
                className="bg-black text-white px-3 py-2 rounded-md overflow-hidden"
              >
                <input
                  className="w-full bg-transparent text-white focus:outline-none text-sm"
                  type="text"
                  placeholder="Search..."
                  autoFocus
                />
              </motion.div>
            ) : (
              <button 
                onClick={() => setSearchOpen(true)}
                className="text-gray-600 hover:text-[#F00] transition-colors"
              >
                <FaSearch size={18} />
              </button>
            )}
          </div>

          <Link to="/contactus">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#F00] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#D00] transition-colors"
            >
              Contact Us
            </motion.button>
          </Link>

          <Link to="/budget">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#898989] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#777] transition-colors"
            >
              Budget 2025
            </motion.button>
          </Link>
        </motion.div>

        {/* Mobile Menu Icon */}
        <motion.button
          className="md:hidden text-[#DC2625] text-2xl"
          onClick={() => setShowMobileMenu(true)}
          whileTap={{ scale: 0.9 }}
        >
          <FaBars />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {showMobileMenu && (
          <motion.div 
            className="fixed inset-0 bg-white z-50 flex flex-col px-6 pt-16 pb-8 space-y-6 overflow-auto"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <button
              className="absolute top-6 right-6 text-[#DC2625] text-2xl"
              onClick={() => setShowMobileMenu(false)}
            >
              <FaTimes />
            </button>

            <Link 
              to="/" 
              onClick={() => setShowMobileMenu(false)} 
              className="text-xl font-semibold py-2 border-b border-gray-200"
            >
              Home
            </Link>

            <div className="w-full border-b border-gray-200 pb-4">
              <button
                className="w-full text-left flex justify-between items-center text-xl font-semibold py-2"
                onClick={() => setMobileDropdown(prev => prev === "investGhana" ? null : "investGhana")}
              >
                Invest Ghana <TiArrowSortedDown className={`transition-transform ${mobileDropdown === "investGhana" ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {mobileDropdown === "investGhana" && (
                  <motion.div 
                    className="ml-4 mt-2 space-y-3"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dropdownItems.investGhana.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setShowMobileMenu(false)}
                        className="block text-lg text-gray-700 hover:text-[#F00]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/careers" 
              onClick={() => setShowMobileMenu(false)} 
              className="text-xl font-semibold py-2 border-b border-gray-200"
            >
              Careers
            </Link>

            <div className="w-full border-b border-gray-200 pb-4">
              <button
                className="w-full text-left flex justify-between items-center text-xl font-semibold py-2"
                onClick={() => setMobileDropdown(prev => prev === "allSectors" ? null : "allSectors")}
              >
                Opportunity <TiArrowSortedDown className={`transition-transform ${mobileDropdown === "allSectors" ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {mobileDropdown === "allSectors" && (
                  <motion.div 
                    className="ml-4 mt-2 space-y-3"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {dropdownItems.allSectors.map((item, index) => (
                      <Link
                        key={index}
                        to={item.path}
                        onClick={() => setShowMobileMenu(false)}
                        className="block text-lg text-gray-700 hover:text-[#F00]"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/blog" 
              onClick={() => setShowMobileMenu(false)} 
              className="text-xl font-semibold py-2 border-b border-gray-200"
            >
              Blog
            </Link>

            <div className="mt-8 space-y-4">
              <Link to="/contactus" onClick={() => setShowMobileMenu(false)}>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#F00] text-white py-3 rounded-lg text-lg font-bold"
                >
                  Contact Us
                </motion.button>
              </Link>

              <Link to="/budget" onClick={() => setShowMobileMenu(false)}>
                <motion.button 
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-[#898989] mt-5 text-white py-3 rounded-lg text-lg font-bold"
                >
                  Budget 2025
                </motion.button>
              </Link>
            </div>

            <div className="relative mt-4">
              <input
                className="w-full bg-gray-100 px-4 py-3 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-[#F00]"
                type="text"
                placeholder="Search..."
              />
              <FaSearch className="absolute right-4 top-4 text-gray-500" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;