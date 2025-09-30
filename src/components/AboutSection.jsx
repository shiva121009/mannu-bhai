import React from "react";

const features = [
  { name: "ON TIME SERVICE", img: "https://www.mannubhai.com/_next/image?url=%2Ffranchies%2Ftime.webp&w=128&q=75" },
  { name: "TRANSPARENT PRICES", img: "https://www.mannubhai.com/_next/image?url=%2Ffranchies%2Frupees.webp&w=128&q=75" },
  { name: "TRAINED PROFESSIONALS", img: "https://www.mannubhai.com/_next/image?url=%2Ffranchies%2Fprofessional.webp&w=128&q=75" },
  { name: "ASSURED SERVICE QUALITY", img: "https://www.mannubhai.com/_next/image?url=%2Ffranchies%2Faward.webp&w=128&q=75" },
];

const FeatureCard = ({ name, img }) => (
  <div className="flex flex-col items-center justify-center bg-white rounded-xl shadow-md 
  w-64 h-40 p-6 text-center hover:shadow-lg transition transform hover:scale-105">
    <img src={img} alt={name} className="w-14 h-14 mb-4 object-contain" />
    <p className="text-base font-semibold text-gray-800">{name}</p>
  </div>
);

const AboutSection = () => {
  return (
    <div className="py-16 px-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
      
      {/* Left Section */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2 border-b border-white/40 pb-2">
          ABOUT MANNU BHAI
        </h2>
        <p className="mb-6 leading-relaxed text-white/90">
          Mannu Bhai is one of the most trusted service providers in India. We offer
          reliable solutions in home appliance care, home care, fitness, personal
          grooming, and gadget support. Our dedicated, experienced professionals ensure
          customer satisfaction through consistent service quality.
        </p>
        <button className="bg-white/20 hover:bg-white/30 text-white font-semibold px-5 py-2 rounded-md transition">
          Read More
        </button>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
