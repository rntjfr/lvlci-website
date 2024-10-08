import React from "react";
// Import the image from assets folder
import heroImage from "../assets/nobg.png"; // Adjust the path to where your image is located

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroImage})`, // Using the imported image
        backgroundPosition: "center 100%", // Lowering the image
        backgroundSize: "100%", // Making the image smaller
        backgroundRepeat: "no-repeat", // Preventing the image from repeating
      }}
    >
      <div className="h-full flex justify-center items-center">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Building Your Dreams</h1>
          <p className="text-xl mb-8">
            We create the spaces that define your future.
          </p>
          <a
            href="#contact"
            className="px-6 py-3 bg-white hover:bg-opacity-70 backdrop-blur-md text-blue-950 font-semibold rounded"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
