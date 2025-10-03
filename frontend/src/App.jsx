import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ServiceSlider from "./components/ServiceSlider";
import Banner from "./components/AdContainer";
import Services from "./components/Items";
import { appliances, beautyProducts, handymanServices, homeCareProducts } from "./data/data";
import DownloadAppSection from "./components/download";
import PopularCities from "./components/PopularCites";
import AboutSection from "./components/AboutSection";
import ClientReviews from "./components/ClientReview";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import QuickLinks from "./components/QuickLink";
import Footer from "./components/footer";

import Signup from "./components/Signup";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import

// 🏡 Home Page
function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceSlider />

      <Banner image="https://your-banner.jpg" alt="Professional home appliance services banner" />
      <Services id="appliance-care" title="Appliance Services" appliances={appliances} />

      <Banner image="https://your-banner.jpg" alt="Professional home appliance services banner" />
      <Services id="beauty-care" title="Beauty Services" appliances={beautyProducts} />

      <Banner image="https://your-banner.jpg" alt="Professional home appliance services banner" />
      <Services id="home-care" title="Home Care Services" appliances={homeCareProducts} />

      <Banner image="https://your-banner.jpg" alt="Professional home appliance services banner" />
      <Services id="handyman" title="Handyman Services" appliances={handymanServices} />

      <DownloadAppSection />
      <PopularCities />
      <AboutSection />
      <ClientReviews />
      <StatsSection />
      <ServicesSection />
      <QuickLinks />
      <Footer />
    </>
  );
}

// 🆕 Service Category Pages
function AppliancePage() {
  return <Services title="Appliance Services" appliances={appliances} />;
}

function BeautyPage() {
  return <Services title="Beauty Services" appliances={beautyProducts} />;
}

function HomeCarePage() {
  return <Services title="Home Care Services" appliances={homeCareProducts} />;
}

function HandymanPage() {
  return <Services title="Handyman Services" appliances={handymanServices} />;
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Protected Home */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />

        {/* Service Pages */}
        <Route path="/services/appliance" element={<AppliancePage />} />
        <Route path="/services/beauty" element={<BeautyPage />} />
        <Route path="/services/homecare" element={<HomeCarePage />} />
        <Route path="/services/handyman" element={<HandymanPage />} />

        {/* Auth */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
