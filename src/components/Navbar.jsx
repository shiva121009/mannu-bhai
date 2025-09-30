// src/components/Navbar.jsx
import { FaSearch, FaPhone } from "react-icons/fa";
import { HiOutlineShoppingCart,HiOutlineUserCircle } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-5 shadow-md bg-white ">
      
      <div className="flex items-center gap-5">
        <img
          src="https://www.mannubhai.com/_next/image?url=%2Flogo.png&w=256&q=75"
          alt=""
          srcset=""
          height="160px"
          width="160px"
        />
             <ul className="hidden md:flex items-center gap-8 text-gray-700 text-sm  font-medium">
       <li className="cursor-pointer hover:text-blue-500">Appliance</li>
        <li className="cursor-pointer hover:text-blue-500">Beauty</li>
        <li className="cursor-pointer hover:text-blue-500">Homecare</li>
        <li className="cursor-pointer hover:text-blue-500">Handyman</li>
        <li className="cursor-pointer hover:text-blue-500">
          Become Franchise Partner
        </li>
      </ul>
      </div>

 
 

      <div className="flex items-center gap-4">
       
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 ">
          <FaSearch className="text-gray-500 mr-2 h-5" />
          <input
            type="text"
            placeholder="Search services..."
            className="outline-none text-sm w-32 md:w-52"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center border border-gray-300 text-sm font-medium text-gray-700 px-3 py-2 rounded-lg">
          <FaPhone className="mr-2 text-gray-700" />
          <span>+917065012902</span>
        </div>

        {/* Icons */}
        <HiOutlineShoppingCart className="text-xl cursor-pointer hover:text-blue-600" />
        <HiOutlineUserCircle className="text-xl cursor-pointer hover:text-blue-600" />
      </div>
    </nav>
  );
};

export default Navbar;
