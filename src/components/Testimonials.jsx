import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback:
        "The team did an amazing job on our office renovation. Highly recommend!",
    },
    {
      name: "Jane Smith",
      feedback:
        "Professional and reliable service throughout the entire construction process.",
    },
    {
      name: "Michael Johnson",
      feedback:
        "They built our dream home, and the results exceeded our expectations!",
    },
  ];

  return (
    <section id="testimonials" className="py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Testimonials</h2>
        <div className="flex justify-center space-x-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg bg-white bg-opacity-20 backdrop-blur-lg"
            >
              <p className="italic mb-4">"{testimonial.feedback}"</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
