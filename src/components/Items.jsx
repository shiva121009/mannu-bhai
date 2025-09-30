import React from "react";


const Card = ({ name, img, link }) => {
  return (
    <a href={link} className="block">
      <div
        className="flex flex-col items-center justify-center w-56 h-56 bg-white rounded-2xl shadow-md cursor-pointer 
        hover:bg-gradient-radial hover:from-pink-600/80 hover:via-green-400 hover:to-cyan-300 hover:scale-105
        transition-all duration-300"
      >
        <div className="flex items-center justify-center w-28 h-28 mb-3">
          <img src={img} alt={name} className="max-h-full max-w-full" />
        </div>
        <p className="text-sm font-medium text-gray-800">{name}</p>
      </div>
    </a>
  );
};

// ✅ Added a `title` prop so the component is reusable
const Services = ({ title = "Our Services" , appliances=[]}) => {
  return (
    <div className="py-10">
      <h2 className="text-3xl font-bold text-start mb-8 ml-40">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 w-[80%] mx-auto gap-10">
        {appliances.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Services;
