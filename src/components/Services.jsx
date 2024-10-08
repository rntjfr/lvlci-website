import React from "react";

const Services = () => {
  const services = [
    {
      title: "General Building & Construction",
      description: "We build homes with precision and care.",
    },
    {
      title: "Engineering",
      description: "From offices to retail spaces, we've got you covered.",
    },
    {
      title: "Architectural Design & Development",
      description: "Transform your space with expert renovations.",
    },
  ];

  return (
    <section id="services" className="py-16 text-white">
      <div className="container mx-auto text-center ">
        <h2 className="text-4xl font-bold mb-8 text-white">Our Services</h2>
        <div className="flex justify-center space-x-8 ">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg bg-opacity-20 backdrop-blur-lg"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
