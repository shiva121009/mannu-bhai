import React, { useState } from "react";
import { FaBolt, FaUsers, FaAward, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const StatsSection = () => {
  const [stats] = useState([
    {
      icon: <FaBolt className="w-6 h-6 text-white" />,
      value: "25+",
      label: "Live Services",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-white" />,
      value: "30 Lac+",
      label: "Customers Served",
    },
    {
      icon: <FaAward className="w-6 h-6 text-white" />,
      value: "3000",
      label: "Verified Experts",
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6 text-white" />,
      value: "50+",
      label: "Service Outlets",
    },
    {
      icon: <FaStar className="w-6 h-6 text-white" />,
      value: "4.5",
      label: "Average Rating",
    },
  ]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
      <div className="bg-white rounded-2xl shadow-lg grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 py-10 px-4 sm:px-6 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center transform transition duration-300 hover:scale-105"
          >
            {/* Icon with gradient bg */}
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 mb-4 shadow-md">
              {item.icon}
            </div>
            {/* Value */}
            <h3 className="text-xl sm:text-2xl font-bold text-blue-600">{item.value}</h3>
            {/* Label */}
            <p className="text-gray-600 text-xs sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
