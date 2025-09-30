import React from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    title: "RO Service You Can Trust",
    desc: "On-time filter change & maintenance",
    color: "from-slate-700 to-slate-500",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Cool Air, Zero Hassle",
    desc: "On-time AC repair & maintenance",
    color: "from-blue-800 to-blue-500",
    img: "https://images.unsplash.com/photo-1611599531925-6f8bba1d50b1?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Keep It Cool, Always",
    desc: "Trusted fridge repair by professionals",
    color: "from-purple-800 to-pink-600",
    img: "https://images.unsplash.com/photo-1588776814546-7f1d92e3ec1d?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Washing Machine Care",
    desc: "Expert washer repair & maintenance",
    color: "from-green-700 to-green-500",
    img: "https://images.unsplash.com/photo-1595007434204-96f8a3b012bc?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Microwave Made Easy",
    desc: "Quick and reliable microwave repair",
    color: "from-orange-700 to-yellow-500",
    img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=400&q=80",
  },
];

// ✅ Fixed Arrows (must accept className, style, onClick)
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} !flex items-center justify-center bg-white text-black shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 z-10`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaArrowRight />
  </div>
);

const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className} !flex items-center justify-center bg-white text-black shadow-md rounded-full w-8 h-8 sm:w-10 sm:h-10 z-10`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaArrowLeft />
  </div>
);

export default function ServiceSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="block w-full max-w-6xl mt-6 sm:mt-10 mx-auto py-6 relative px-4">
      <Slider {...settings}>
        {services.map((service, idx) => (
          <div key={idx} className="px-2">
            <div
              className={`rounded-2xl shadow-lg bg-gradient-to-r ${service.color} text-white flex flex-col md:flex-row items-center md:items-stretch justify-between p-4 sm:p-6 h-auto md:h-60 gap-4`}
            >
              {/* Text */}
              <div className="flex flex-col gap-2 sm:gap-3 w-full md:w-2/3 text-center md:text-left">
                <h2 className="text-lg sm:text-2xl font-bold">{service.title}</h2>
                <p className="text-sm sm:text-base">{service.desc}</p>
                <button
                  className={`bg-gradient-to-r ${service.color} text-white px-5 sm:px-6 py-2 rounded-lg sm:rounded-xl w-fit mx-auto md:mx-0 shadow-md hover:brightness-110 transition`}
                >
                  Book Now
                </button>
              </div>

              {/* Image */}
              <div className="w-full md:w-1/3 h-44 md:h-full flex items-center justify-center overflow-hidden rounded-xl">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
