import React from "react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/image.png')" }} // Ensure the image is in the 'public' folder
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
