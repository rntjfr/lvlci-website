import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to EmailJS
    emailjs
      .send(
        "service_2k9dszg", // Replace with your service ID
        "template_2wpm4bq", // Replace with your template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "UEIhATEeL6cUyl83K" // Replace with your user ID
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("Failed to send message:", error);
          alert("Failed to send the message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="mb-8">
          Get in touch with us for any project inquiries or general questions.
        </p>
        <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg bg-white bg-opacity-20 backdrop-blur-lg"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg bg-white bg-opacity-20 backdrop-blur-lg"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 border rounded-lg bg-white bg-opacity-20 backdrop-blur-lg"
              placeholder="Your Message"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-white hover:bg-opacity-70 backdrop-blur-md text-blue-950 font-semibold rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
