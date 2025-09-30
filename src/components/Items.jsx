import React from "react";

const Card = ({ name, img, link }) => {
  return (
    <a href={link} className="block">
      <div
        className="flex flex-col items-center justify-center w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-56 lg:h-56 
        bg-white rounded-2xl shadow-md cursor-pointer 
        hover:bg-gradient-radial hover:from-pink-600/80 hover:via-green-400 hover:to-cyan-300 
        hover:scale-105 transition-all duration-300"
      >
        <div className="flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mb-3">
          <img src={img} alt={name} className="max-h-full max-w-full object-contain" />
        </div>
        <p className="text-xs sm:text-sm md:text-base font-medium text-gray-800 text-center">
          {name}
        </p>
      </div>
    </a>
  );
};

// ✅ Responsive Services section
const Services = ({ id, title = "Our Services", appliances = [] }) => {
  return (
    <div id={id} className="py-8 sm:py-12 scroll-mt-20">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center sm:text-left mb-8 px-4 sm:px-8 lg:ml-40">
        {title}
      </h2>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 
                      gap-6 sm:gap-8 md:gap-10 w-[90%] sm:w-[85%] lg:w-[80%] mx-auto">
        {appliances.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Services;
