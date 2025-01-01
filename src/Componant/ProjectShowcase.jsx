import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import newapp from "./newapp.png";
import ecom from "./ecom.png";
import acadamic from "./acadamic.jpg";

const projects = [
  {
    title: "Academic Resources Hub Web Application",
    description:
      "The platform offers students access to resources such as syllabi, question banks, e-books, and certification courses. Includes quizzes for knowledge assessment and fosters collaboration by connecting students with peers skilled in specific subjects. Admin can manage quizzes, users, and resources while students can register, download resources, and more.",
    tech: ["React.js", "Axios", "React Router DOM", "React Hooks", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: acadamic,
    projectLink: "https://github.com/Vmkmanoj/Academic-Resources-book.git",
  },
  {
    title: "E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform simplifying product browsing, purchasing, and inventory management for both customers and sellers. Features include product management, user authentication, and a seamless buying experience with a 50% operational efficiency improvement.",
    tech: ["React.js", "Axios", "React Router DOM", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: ecom,
    projectLink: "https://github.com/Vmkmanoj/E-COM-Application.git",
  },
  {
    title: "News Web Application",
    description:
      "Developed a dynamic React-based news application with real-time data fetching for up-to-date articles. Features responsive design, customizable filters, and optimized performance using React components and hooks.",
    tech: ["React.js", "News API", "Tailwind CSS"],
    image: newapp,
    projectLink: "https://github.com/Vmkmanoj/News-App.git",
  },
];

export const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <div className="h-screen bg-transparent flex items-center  justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-400 transition-colors"
          aria-label="Previous project"
        >
          <FaChevronLeft size={24} className="mt-44"/>
        </button>
        <button
          onClick={nextProject}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-400 transition-colors"
          aria-label="Next project"
        >
          <FaChevronRight size={24} className="mt-44"/>
        </button>

        {/* Project Display */}
        <div className="relative overflow-hidden rounded-xl shadow-xl bg-white">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 p-4">
                <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                  <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    {/* Text Content */}
                    <div className="space-y-4">
                      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
                        {project.title}
                      </h2>
                      <p className="text-sm sm:text-base md:text-lg text-gray-700">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-500 text-white rounded-full text-xs sm:text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Image */}
                    <div className="order-first md:order-last">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg shadow-lg w-full h-auto"
                        loading="lazy"
                        onError={(e) =>
                          (e.target.src = "https://placehold.co/800x600")
                        }
                      />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
