import React from "react";
import { MapPin } from "lucide-react"; // for the location icon

const cities = [
  { name: "Hyderabad", img: "https://cdn-icons-png.flaticon.com/512/684/684908.png" },
  { name: "Ahmedabad", img: "https://cdn-icons-png.flaticon.com/512/854/854878.png" },
  { name: "Pune", img: "https://cdn-icons-png.flaticon.com/512/854/854921.png" },
  { name: "Ghaziabad", img: "https://cdn-icons-png.flaticon.com/512/854/854929.png" },
  { name: "Faridabad", img: "https://cdn-icons-png.flaticon.com/512/854/854912.png" },
  { name: "Jaipur", img: "https://cdn-icons-png.flaticon.com/512/854/854913.png" },
  { name: "Lucknow", img: "https://cdn-icons-png.flaticon.com/512/854/854916.png" },
  { name: "Kanpur", img: "https://cdn-icons-png.flaticon.com/512/854/854917.png" },
  { name: "Nagpur", img: "https://cdn-icons-png.flaticon.com/512/854/854930.png" },
  { name: "Thane", img: "https://cdn-icons-png.flaticon.com/512/854/854933.png" },
  { name: "Patna", img: "https://cdn-icons-png.flaticon.com/512/854/854935.png" },
  // { name: "Indore", img: "https://cdn-icons-png.flaticon.com/512/854/854937.png" },
];

const CityCard = ({ name, img }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-28 sm:h-32 bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transition-transform cursor-pointer">
      <img src={img} alt={name} className="w-10 h-10 sm:w-12 sm:h-12 mb-2 object-contain" />
      <p className="text-xs sm:text-sm font-medium text-gray-700 truncate w-full text-center">
        {name}
      </p>
    </div>
  );
};

const PopularCities = () => {
  return (
    <div className="py-12">
      {/* Title */}
      <div className="flex items-center justify-center gap-2 mb-8 px-4">
        <MapPin className="text-purple-600 w-6 h-6 sm:w-7 sm:h-7" />
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">Popular Cities</h2>
      </div>

      {/* Grid of Cities */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 w-[90%] mx-auto">
        {cities.map((city, index) => (
          <CityCard key={index} {...city} />
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
