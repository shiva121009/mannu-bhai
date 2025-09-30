import { FaStar, FaUsers } from "react-icons/fa";
import { useState } from "react";

export default function StatsCards() {
  const [rating] = useState(4.5);
  const [customers] = useState(3000000);

  return (
    <div className="flex flex-col gap-6 p-6">
      <div className="flex gap-6">
        {/* Service Rating Card */}
        <div className="bg-yellow-50 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow  hover:scale-105 duration-300 w-60 p-6 flex items-center gap-4">
          <FaStar className="w-8 h-8 text-yellow-500" />
          <div>
            <h2 className="text-2xl font-bold text-yellow-700">{rating}</h2>
            <p className="text-gray-600 text-sm">Service Rating</p>
          </div>
        </div>

        {/* Customer Globally Card */}
        <div className="bg-blue-50 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow hover:scale-105  duration-300 w-60 p-6 flex items-center gap-4  ">
          <FaUsers className="w-8 h-8 text-blue-500" />
          <div>
            <h2 className="text-2xl font-bold text-blue-700">
              {(customers / 100000).toFixed(0)} Lacs+
            </h2>
            <p className="text-gray-600 text-sm">Customer Globally</p>
          </div>
        </div>
      </div>
    </div>
  );
}
