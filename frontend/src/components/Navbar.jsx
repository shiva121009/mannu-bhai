// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { FaSearch, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { HiOutlineShoppingCart, HiOutlineUserCircle } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Check token on mount + when path changes
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, [location.pathname]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // If on login or signup page → show only logo
  const isAuthPage =
    location.pathname === "/login" || location.pathname === "/signup";

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 md:py-4 max-w-7xl mx-auto ">
        {/* Logo always visible */}
        <a href="/" className="flex-shrink-0">
          <img
            src="https://www.mannubhai.com/_next/image?url=%2Flogo.png&w=256&q=75"
            alt="MannuBhai Logo"
            className="h-10 sm:h-12 w-auto"
          />
        </a>

        {/* Show rest of navbar ONLY if not on login/signup */}
        {!isAuthPage && (
          <>
            {/* Desktop Menu */}
            <ul className="hidden md:flex items-center gap-6 text-gray-700 text-sm font-medium">
              <li>
                <a href="/services/appliance" className="hover:text-blue-500">
                  Appliance
                </a>
              </li>
              <li>
                <a href="/services/beauty" className="hover:text-blue-500">
                  Beauty
                </a>
              </li>
              <li>
                <a href="/services/homecare" className="hover:text-blue-500">
                  Homecare
                </a>
              </li>
              <li>
                <a href="/services/handyman" className="hover:text-blue-500">
                  Handyman
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Become Franchise Partner
                </a>
              </li>
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search */}
              <div className="hidden sm:flex items-center border border-gray-300 rounded-lg px-2 sm:px-3 py-1.5 ml-5">
                <FaSearch className="text-gray-500 mr-2 h-4 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search services..."
                  className="outline-none text-sm w-28 sm:w-52"
                />
              </div>

              {/* Phone */}
              <a
                href="tel:+917065012902"
                className="hidden sm:flex items-center border border-gray-300 text-xs sm:text-sm font-medium text-gray-700 px-2 sm:px-3 py-2 rounded-lg"
              >
                <FaPhone className="mr-1 text-gray-700" />
                <span>+917065012902</span>
              </a>

              {/* Icons */}
              <a href="#" aria-label="Cart">
                <HiOutlineShoppingCart className="text-xl cursor-pointer hover:text-blue-600" />
              </a>
              <a href="#" aria-label="User">
                <HiOutlineUserCircle className="text-xl cursor-pointer hover:text-blue-600" />
              </a>

              {/* Logout (only if logged in) */}
              {isLoggedIn && (
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-600"
                >
                  Logout
                </button>
              )}

              {/* Mobile Menu Toggle */}
              <button
                aria-label="Toggle menu"
                className="md:hidden text-2xl text-gray-700"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </>
        )}
      </div>

      {/* Mobile Dropdown Menu (only if not login/signup) */}
      {!isAuthPage && menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-700 text-base font-medium">
            <li>
              <a href="#appliance-care" className="hover:text-blue-500">
                Appliance
              </a>
            </li>
            <li>
              <a href="#beauty-care" className="hover:text-blue-500">
                Beauty
              </a>
            </li>
            <li>
              <a href="#home-care" className="hover:text-blue-500">
                Homecare
              </a>
            </li>
            <li>
              <a href="#handyman" className="hover:text-blue-500">
                Handyman
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Become Franchise Partner
              </a>
            </li>
            {isLoggedIn && (
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-red-600"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
