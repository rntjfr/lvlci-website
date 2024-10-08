import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Services from "./components/Services";
import Projects from "./components/Projects";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gradient-to-b from-blue-950 via-blue-900 to-blue-950 min-h-screen">
      <Navbar />
      <HeroSection />
      <Services />
      <Projects />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
