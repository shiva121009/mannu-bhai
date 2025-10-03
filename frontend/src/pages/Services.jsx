// import Services from "./Services";
// import Banner from "./AdContainer";
// import {
//   appliances,
//   beautyProducts,
//   homeCareProducts,
//   handymanServices,
// } from "../data/data";

// const ServicePage = ({ type }) => {
//   let data = [];
//   let title = "";
//   let description = "";
//   let bannerImg = "";
//   let themeColor = "#2563eb"; // default blue

//   switch (type) {
//     case "appliance":
//       data = appliances;
//       title = "Home Appliance Services at Your Doorstep";
//       description = "Professional appliance repair and maintenance services";
//       bannerImg =
//         "https://www.mannubhai.com/_next/image?url=%2FMainBanner%2FHomeBanner.webp&w=1080&q=85";
//       themeColor = "#2563eb"; // blue
//       break;

//     case "beauty":
//       data = beautyProducts;
//       title = "Beauty Care Services at Home";
//       description =
//         "Salon-quality beauty services delivered right to your doorstep";
//       bannerImg =
//         "https://www.mannubhai.com/_next/image?url=%2FMainBanner%2FBeautyBanner.webp&w=1080&q=85";
//       themeColor = "#d946ef"; // pink/purple
//       break;

//     case "homecare":
//       data = homeCareProducts;
//       title = "Home Cleaning & Care Services";
//       description =
//         "Keep your home clean and fresh with our professional cleaning experts";
//       bannerImg =
//         "https://www.mannubhai.com/_next/image?url=%2FMainBanner%2FHomecareBanner.webp&w=1080&q=85";
//       themeColor = "#16a34a"; // green
//       break;

//     case "handyman":
//       data = handymanServices;
//       title = "Handyman & Repair Services";
//       description =
//         "Expert repair, installation, and maintenance for your home";
//       bannerImg =
//         "https://www.mannubhai.com/_next/image?url=%2FMainBanner%2FHandymanBanner.webp&w=1080&q=85";
//       themeColor = "#f59e0b"; // orange
//       break;

//     default:
//       title = "Our Services";
//       description = "Explore our wide range of services tailored to your needs.";
//   }

//   return (
//     <section className="px-4 sm:px-6 lg:px-12 py-12 bg-white">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* LEFT SECTION */}
//         <div className="flex flex-col gap-6">
//           {/* Title + Desc */}
//           <div className="flex flex-col gap-4 bg-white rounded-xl shadow-md hover:shadow-lg p-6 sm:p-8">
//             <h1
//               className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight"
//               style={{ color: themeColor }}
//             >
//               {title}
//             </h1>
//             <div
//               className="h-1 w-20 sm:w-24 rounded"
//               style={{ backgroundColor: themeColor }}
//             ></div>
//             <p className="text-gray-600 text-lg">{description}</p>

//             {/* Services Grid */}
//             <Services title="What are you looking for?" appliances={data} />
//           </div>
//         </div>

//         {/* RIGHT SECTION (Banner) */}
//         <div className="flex items-center justify-center">
//           {bannerImg && (
//             <Banner
//               image={bannerImg}
//               alt={title}
//               className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-700"
//             />
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicePage;
