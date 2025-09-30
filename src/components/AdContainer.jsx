import React from "react";

const Banner = ({ 
  image, 
  alt = "Banner", 
  gradientFrom = "from-blue-600/10", 
  gradientTo = "to-purple-600/10" 
}) => {
  return (
    <div className="group relative aspect-[91/20] bg-gray-100 rounded-3xl overflow-hidden h-60 w-[80%] mx-auto mt-10 mb-10">
      {/* Banner Image */}
      <img
        src={image}
        alt={alt}
        className="object-cover w-full h-full transition-all duration-700 group-hover:scale-110"
      />

      {/* Gradient Overlay (shows on hover) */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${gradientFrom} via-transparent ${gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      ></div>

      {/* Shiny Light Effect */}
      <div className="absolute inset-0 -skew-x-12 -translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full"></div>
    </div>
  );
};

export default Banner;
