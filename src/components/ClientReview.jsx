import React from "react";
import { Star, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Ruchi Malik",
    location: "Delhi",
    initial: "R",
    review:
      "Good and fast service from the team. One stop shop for all the household repairing needs. The guys coming for repairs also talk nicely and get the work done quickly.",
  },
  {
    name: "Amit Sharma",
    location: "Mumbai",
    initial: "A",
    review:
      "Excellent and prompt service. The team is professional, polite, and ensures the work is done without any hassle.",
  },
  {
    name: "Neha Gupta",
    location: "Bangalore",
    initial: "N",
    review:
      "I booked a washing machine repair, and they fixed it the same day. Very reliable and affordable service.",
  },
  {
    name: "Rahul Verma",
    location: "Hyderabad",
    initial: "R",
    review:
      "Truly satisfied with the service quality. Transparent pricing and the technicians were very knowledgeable.",
  },
  {
    name: "Priya Singh",
    location: "Kolkata",
    initial: "P",
    review:
      "Quick response and professional service. They handled my AC servicing very efficiently. Highly recommend!",
  },
];

const ClientReviews = () => {
  return (
    <div className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500 uppercase mb-4 relative inline-block">
          Client Reviews
          {/* Gradient underline */}
          <span className="absolute left-0 bottom-[-8px] w-full h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-500"></span>
        </h3>
      </div>

      {/* Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-5xl font-bold leading-snug mb-6">
            Trusted by Clients and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
              Industry Experts
            </span>{" "}
            Alike
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We have a team of young and expert professionals who work tirelessly
            to deliver the best and most satisfactory services at your doorstep.
            It is Mannu Bhai&apos;s entire team effort, which makes us one of the
            trusted & fastest growing home appliances service providers in PAN India.
          </p>

          {/* Ratings */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={22} fill="currentColor" stroke="none" />
              ))}
            </div>
            <p className="text-gray-700 text-sm">
              Rated 4.5/5 by <span className="font-semibold">30L+ customers</span>
            </p>
          </div>
        </div>

        {/* Right Section - Slider */}
        <div className="bg-white rounded-2xl shadow-lg p-8 relative">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                {/* Single Review */}
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg bg-gradient-to-r from-blue-600 to-purple-500">
                      {review.initial}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-gray-900">
                        {review.name}
                      </h4>
                      <p className="flex items-center text-gray-500 text-sm">
                        <MapPin size={14} className="mr-1" /> {review.location}
                      </p>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" stroke="none" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-gray-600 italic">"{review.review}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
