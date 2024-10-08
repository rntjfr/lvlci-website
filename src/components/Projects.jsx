import React from "react";

// Importing images from src/assets
import building1 from "../assets/building1.jpg";
import building2 from "../assets/building2.jpg";
import building3 from "../assets/building3.jpg";

const Projects = () => {
  const projects = [
    { title: "Modern Home", imageUrl: building1 },
    { title: "Office Complex", imageUrl: building2 },
    { title: "Luxury Apartments", imageUrl: building3 },
  ];

  return (
    <section id="projects" className="py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg overflow-hidden bg-white bg-opacity-20 backdrop-blur-lg"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <h3 className="text-xl font-semibold my-4">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
