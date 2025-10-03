import React, { useState } from "react";

const servicesData = [
  {
    title: "Home Appliances",
    icon: "🛠️",
    description:
      "Home appliances are the need of every household. It is an electrical device which makes our life more comfortable and smoother. Home appliances play a significant role in our life since man start using them to reduce efforts.",
  },
  {
    title: "Home Care",
    icon: "🏠",
    description:
      "With the increasing trends in fashion, the home care industry experiences changes that reflected the shift in the value of each generation. According to statistical data these days, a large number of people rely on home care services.",
  },
  {
    title: "Beauty Care",
    icon: "💅",
    description:
      "Excellent personal care is essential for both health and social reason. It includes keeping your hand, head, and body clean to stop the spread of germs and illness. Having good personal hygiene benefits your confidence and health.",
  },
  {
    title: "Handyman Services",
    icon: "👨‍🔧",
    description:
      "Looking for handyman services at your doorstep? We are a trusted and leading platform offering the best handyman services across PAN India. Whether you need help with plumbing, electrical repairs, carpentry, or painting, we are here to help.",
  },
];

const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Professional Home Services with{" "}
          <span className="text-blue-600">MannuBhai</span>
        </h2>
        <p className="text-gray-600 mt-2">
          Quality services at your doorstep across India
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {servicesData.map((service, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
            >
              {/* Title + Icon */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{service.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {isExpanded
                  ? service.description
                  : service.description.substring(0, 120) + "..."}
              </p>

              {/* Read more / less */}
              <button
                onClick={() => toggleExpand(index)}
                className="mt-3 text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline"
              >
                {isExpanded ? "Read less ▲" : "Read more ▼"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesSection;
