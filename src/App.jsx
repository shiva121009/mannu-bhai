import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ServiceSlider from './components/ServiceSlider'
import Banner from './components/AdContainer'
import Services from './components/Items'
import {appliances, beautyProducts, handymanServices, homeCareProducts} from "./data/data"
import DownloadAppSection from './components/download'
import PopularCities from './components/PopularCites'
import AboutSection from './components/AboutSection'
import ClientReviews from './components/ClientReview'
import StatsSection from './components/StatsSection'
import ServicesSection from './components/ServicesSection'
import QuickLinks from './components/QuickLink'
import Footer from './components/footer'



function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
     <ServiceSlider/>
       
      <Banner 
        image="https://imgs.search.brave.com/TdZNzFSYvApr_cdtw230okqE6YS9PKvRiC3vAyhclgI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85OS84My9o/b21lLXJlbm92YXRp/b24taXNvbWV0cmlj/LWJhbm5lci12ZWN0/b3ItMjYzNzk5ODMu/anBn" 
        alt="Professional home appliance services banner"
 />
   <Services title ="Appliance Services" appliances={appliances} />
     <Banner 
        image="https://imgs.search.brave.com/TdZNzFSYvApr_cdtw230okqE6YS9PKvRiC3vAyhclgI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85OS84My9o/b21lLXJlbm92YXRp/b24taXNvbWV0cmlj/LWJhbm5lci12ZWN0/b3ItMjYzNzk5ODMu/anBn" 
        alt="Professional home appliance services banner"
 />

      <Services title ="Beauty Services" appliances={beautyProducts} />
           <Banner 
        image="https://imgs.search.brave.com/TdZNzFSYvApr_cdtw230okqE6YS9PKvRiC3vAyhclgI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85OS84My9o/b21lLXJlbm92YXRp/b24taXNvbWV0cmlj/LWJhbm5lci12ZWN0/b3ItMjYzNzk5ODMu/anBn" 
        alt="Professional home appliance services banner"
 />
      <Services title ="Home Care Services" appliances={homeCareProducts} />
      <Banner 
        image="https://imgs.search.brave.com/TdZNzFSYvApr_cdtw230okqE6YS9PKvRiC3vAyhclgI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvcHJldmll/dy0xeC85OS84My9o/b21lLXJlbm92YXRp/b24taXNvbWV0cmlj/LWJhbm5lci12ZWN0/b3ItMjYzNzk5ODMu/anBn" 
        alt="Professional home appliance services banner"
 />
      <Services title ="Handyman Services" appliances={handymanServices} />

     <DownloadAppSection />
     <PopularCities />
    <AboutSection />
    <ClientReviews />
    <StatsSection />
    <ServicesSection/>
    <QuickLinks/>
    <Footer />
 </div>

  )
}

export default App