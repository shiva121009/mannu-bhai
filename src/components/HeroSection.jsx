import StatsCards from "./StatsCard";

const HeroSection = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-8 w-full mt-4 sm:mt-8">
          <div className="flex flex-col gap-6 items-start w-full bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6 sm:p-8">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Home services
              </span>
              <br />
              <span className="text-gray-800">at your doorstep</span>
            </h1>

            <div className="h-1 w-20 sm:w-24 bg-gradient-to-r from-blue-500 to-purple-500 mt-2 mb-4 rounded"></div>

            {/* Sub Heading */}
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              What are you looking for?
            </h2>

            {/* Service Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-2 w-full">
              {/* Card 1 */}
              <a href="#appliance-care">
                <div className="flex flex-col gap-2 items-center justify-center h-32 sm:h-36 md:h-40 p-4 bg-white rounded-xl shadow 
                        hover:bg-blue-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 transform group text-center cursor-pointer">
                  <img
                    src="https://www.mannubhai.com/_next/image?url=%2Fherosection%2Fhome%20appliances.webp&w=96&q=75"
                    alt="Appliances"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 transition-transform duration-300 transform group-hover:scale-125"
                  />
                  <p className="font-medium text-gray-700 text-sm sm:text-base">Appliances Care</p>
                </div>
              </a>

              {/* Card 2 */}
              <a href="#home-care">
                <div className="flex flex-col gap-2 items-center justify-center h-32 sm:h-36 md:h-40 p-4 bg-white rounded-xl shadow 
                        hover:bg-blue-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 transform group text-center cursor-pointer">
                  <img
                    src="https://www.mannubhai.com/_next/image?url=%2Fherosection%2Fsofa-bathroom-and-kitchen-cleaning.webp&w=96&q=75"
                    alt="Home Care"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <p className="font-medium text-gray-700 text-sm sm:text-base">Home Care</p>
                </div>
              </a>

              {/* Card 3 */}
              <a href="#beauty-care">
                <div className="flex flex-col gap-2 items-center justify-center h-32 sm:h-36 md:h-40 p-4 bg-white rounded-xl shadow 
                        hover:bg-blue-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 transform group text-center cursor-pointer">
                  <img
                    src="https://www.mannubhai.com/_next/image?url=%2Fherosection%2FBEAUTY%20CARE.webp&w=96&q=75"
                    alt="Beauty Care"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <p className="font-medium text-gray-700 text-sm sm:text-base">Beauty Care</p>
                </div>
              </a>

              {/* Card 4 */}
              <a href="#handyman">
                <div className="flex flex-col gap-2 items-center justify-center h-32 sm:h-36 md:h-40 p-4 bg-white rounded-xl shadow 
                        hover:bg-blue-200 hover:scale-105 hover:shadow-lg transition-transform duration-300 transform group text-center cursor-pointer">
                  <img
                    src="https://www.mannubhai.com/_next/image?url=%2Fherosection%2FElectrician.webp&w=96&q=75"
                    alt="Handyman"
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 transition-transform duration-300 transform group-hover:scale-110"
                  />
                  <p className="font-medium text-gray-700 text-sm sm:text-base">Handyman</p>
                </div>
              </a>
            </div>
          </div>

          {/* Stats section */}
          <StatsCards />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center h-full w-full mt-6 md:mt-0">
          <img
            src="https://www.mannubhai.com/_next/image?url=%2FMainBanner%2FHomeBanner.webp&w=1080&q=85"
            alt="Banner"
            className="rounded-lg shadow w-full sm:w-[90%] md:w-[85%] lg:w-[90%] max-h-[400px] sm:max-h-[500px] md:max-h-[550px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
