import React from "react";

const Projects = () => {
  const projects = [
    { title: "Modern Home", imageUrl: "/path-to-project-image1.jpg" },
    { title: "Office Complex", imageUrl: "/path-to-project-image2.jpg" },
    { title: "Luxury Apartments", imageUrl: "/path-to-project-image3.jpg" },
  ];

  return (
    <section id="projects" className="py-16 text-white">
      <div className="container mx-auto text-center ">
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
                className="w-full h-64 object-cover "
              />
              <h3 className="text-xl font-semibold my-4 ">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
