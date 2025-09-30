import React from "react";

const features = [
  { name: "ON TIME SERVICE", img: "https://www.mannubhai.com/_next/image?url=%2Ffranchies%2Ftime.webp&w=128&q=75" },
  { name: "TRANSPARENT PRICES", img: "https://www.mannubhai.com/_next/image?url=%2Ffranchies%2Frupees.webp&w=128&q=75" },
  { name: "TRAINED PROFESSIONALS", img: "https://www.mannubhai.com/_next/image?url=%2Ffranchies%2Fprofessional.webp&w=128&q=75" },
  { name: "ASSURED SERVICE QUALITY", img: "https://www.mannubhai.com/_next/image?url=%2Ffranchies%2Faward.webp&w=128&q=75" },
];

const FeatureCard = ({ name, img }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md 
    w-full h-36 sm:h-40 p-4 sm:p-6 text-center hover:shadow-lg transition transform hover:scale-105">
    <img src={img} alt={name} className="w-10 h-10 sm:w-14 sm:h-14 mb-3 sm:mb-4 object-contain" />
    <p className="text-sm sm:text-base font-semibold text-gray-800">{name}</p>
  </div>
);

const AboutSection = () => {
  return (
    <div className="py-12 px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
      
      {/* Left Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white p-6 sm:p-8 rounded-2xl shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold mb-3 border-b border-white/40 pb-2">
          ABOUT MANNU BHAI
        </h2>
        <p className="mb-6 leading-relaxed text-sm sm:text-base text-white/90">
          Mannu Bhai is one of the most trusted service providers in India. We offer
          reliable solutions in home appliance care, home care, fitness, personal
          grooming, and gadget support. Our dedicated, experienced professionals ensure
          customer satisfaction through consistent service quality.
        </p>
        <button className="bg-white/20 hover:bg-white/30 text-white text-sm sm:text-base font-semibold px-4 sm:px-5 py-2 rounded-md transition">
          Read More
        </button>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
