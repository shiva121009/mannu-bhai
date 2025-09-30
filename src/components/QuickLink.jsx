import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const cities = [
  "Agartala", "Agra", "Ahmedabad", "Aligarh", "Amritsar", "Amroha", "Auraiya",
  "Bahraich", "Balangir", "Ballia", "Balrampur", "Bardhaman", "Bareilly",
  "Bargarh", "Bawal", "Bhadrak", "Bhagalpur", "Bhiwadi", "Bhubaneswar", "Bhuj",
  "Bijnor", "Bikaner", "Bilaspur", "Chhapra", "Chaudwar", "Chickmagalur",
  "Cooch Behar", "Cuddalore", "Cuttack", "Darrang", "Dhampur", "Dharwad",
  "Dhemaji", "Dholka", "Dibang Valley", "Dimapur", "East Delhi", "Faridabad",
  "Firozabad", "Gandhidham", "Gandhinagar", "Ghaziabad", "Ghazipur", "Ghilot",
  "Gonda", "Greater Noida", "Gurdaspur", "Gurgaon", "Guwahati", "Gwalior",
  "Hansi", "Haridwar", "Hazaribagh", "Indore", "Jabalpur", "Jaipur",
  "Jamugurihat", "Jodhpur", "Kanpur", "Kharar", "Khordha", "Kokrajhar",
  "Kolar", "Kota", "Kotputli", "Lucknow", "Ludhiana", "Moradabad", "Nagpur",
  "Namsai", "Nanded", "Narnaul", "Nashik", "Neemrana", "Noida", "Pali",
  "Patna", "Port Blair", "Prayagraj", "Pune", "Raipur", "Ramban", "Ranchi",
  "Rewa", "Rewari", "Rohini Delhi", "Rohtak", "Sagar", "Salem", "Secunderabad",
  "Shahjahanpur", "Shimla", "Siliguri", "Sonitpur", "South Delhi",
  "Sundergarh", "Surat", "Tezpur", "Thane", "Tinsukia", "Tiruvallur", "Tohana",
  "Tumkur", "Udaipur", "Ujjain", "Vadodara", "Varanasi", "Vikaspuri Delhi",
  "West Delhi",
];

const QuickLinks = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="max-w-6xl mx-auto px-6 md:px-12 py-10">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h2>

      {/* Dropdown Box */}
      <div className="bg-white rounded-xl shadow border">
        {/* Header with toggle */}
        <div
          className="flex items-center justify-between px-6 py-4 cursor-pointer border-b"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h3 className="font-semibold text-gray-800">
            Popular Serving Cities In India ({cities.length} Cities)
          </h3>
          {isOpen ? (
            <FaChevronUp className="text-gray-500" />
          ) : (
            <FaChevronDown className="text-gray-500" />
          )}
        </div>

        {/* Cities Grid */}
        {isOpen && (
          <div className="p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {cities.map((city, index) => (
              <button
                key={index}
                className="px-3 py-1.5 text-sm rounded-md bg-gray-100 hover:bg-gray-200 transition"
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickLinks;
