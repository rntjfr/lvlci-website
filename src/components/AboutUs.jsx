import React from "react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16 text-white">
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-8">About Us</h2>
        <p className="mb-8 text-lg leading-relaxed ">
          We are a construction company committed to building spaces that
          inspire. With years of experience in residential, commercial, and
          industrial construction, we pride ourselves on delivering top-quality
          results.
        </p>
        <div className="flex justify-center space-x-8">
          <div className="bg-white shadow-md p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p>
              To create safe, sustainable, and innovative buildings that shape
              the future while providing unparalleled value to our clients.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p>
              Leading the way in construction with cutting-edge designs and
              ethical practices, we aim to transform the industry and enrich
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
