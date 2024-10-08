import React from "react";

const Footer = () => {
  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Construction Co. All rights
          reserved.
        </p>
        <div className="mt-4">
          <a href="#home" className="text-gray-400 hover:text-white mx-2">
            Home
          </a>
          <a href="#services" className="text-gray-400 hover:text-white mx-2">
            Services
          </a>
          <a href="#projects" className="text-gray-400 hover:text-white mx-2">
            Projects
          </a>
          <a href="#about" className="text-gray-400 hover:text-white mx-2">
            About Us
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white mx-2">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
