import { useState } from "react";
import StatsCards from "./StatsCard";

const HeroSection = () => {
  // Track selected service
  const [selectedService, setSelectedService] = useState(null);

  // Cards data (instead of hardcoding)
  const services = [
    {
      id: 1,
      title: "Appliances Care",
      img: "https://www.mannubhai.com/_next/image?url=%2Fherosection%2Fhome%20appliances.webp&w=96&q=75",
    },
    {
      id: 2,
      title: "Home Care",
      img: "https://www.mannubhai.com/_next/image?url=%2Fherosection%2Fsofa-bathroom-and-kitchen-cleaning.webp&w=96&q=75",
    },
    {
      id: 3,
      title: "Beauty Care",
      img: "https://www.mannubhai.com/_next/image?url=%2Fherosection%2FBEAUTY%20CARE.webp&w=96&q=75",
    },
    {
      id: 4,
      title: "Handyman",
      img: "https://www.mannubhai.com/_next/image?url=%2Fherosection%2FElectrician.webp&w=96&q=75",
    },
  ];

  return (
    <section className="px-8 py-3 bg-white min-h-[600px]">
      <div className="grid md:grid-cols-2 gap-10 items-center justify-center ">
        {/* LEFT SIDE */}
        <div className="flex items-center justify-start h-full flex-col gap-6 w-full mt-8">
          <div className="flex flex-col gap-6 items-start justify-start w-[80%] h-[80%] bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6">
            <h1 className="text-5xl md:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Home services
              </span>
              <br />
              <span className="text-gray-800">at your doorstep</span>
            </h1>

            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mb-4 rounded"></div>

            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What are you looking for?
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(service.title)}
                  className={`flex flex-col gap-2 items-center justify-center h-40 p-4 bg-white rounded-xl shadow 
                    hover:bg-blue-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 transform group text-center cursor-pointer
                    ${selectedService === service.title ? "ring-2 ring-blue-500" : ""}`}
                >
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-16 h-16 mb-2 transition-transform duration-300 transform group-hover:scale-125"
                  />
                  <p className="font-medium text-gray-700">{service.title}</p>
                </div>
              ))}
            </div>
          </div>

          <StatsCards />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center h-full w-full">
          <img
            src="https://www.mannubhai.com/_next/image?url=%2FMainBanner%2FHomeBanner.webp&w=1080&q=85"
            alt="Banner"
            className="rounded-lg shadow-xl shadow-gray-400 h-[95%] w-[90%] hover:scale-105 transition-transform duration-700 transform"
          />
        </div>
      </div>

      {/* Show Selected Service Below */}
      {selectedService && (
        <div className="text-center mt-6">
          <p className="text-lg font-semibold text-gray-700">
            You selected: <span className="text-blue-600">{selectedService}</span>
          </p>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
