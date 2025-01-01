import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import newapp from "./newapp.png"
import ecom from "./ecom.png"
import acadamic from "./acadamic.jpg"

const projects = [
  {
    title: "Academic Resources Hub Web Application",
    description:
      "The platform offers students access to resources such as syllabi, question banks, e-books, and certification courses. Includes quizzes for knowledge assessment and fosters collaboration by connecting students with peers skilled in specific subjects. Admin can manage quizzes, users, and resources while students can register, download resources, and more.",
    tech: ["React.js", "Axios", "React Router DOM", "React Hooks", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: acadamic, // Replace with actual image URL if available
    projectLink:"https://github.com/Vmkmanoj/Academic-Resources-book.git"
  },
  {
    title: "E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform simplifying product browsing, purchasing, and inventory management for both customers and sellers. Features include product management, user authentication, and a seamless buying experience with a 50% operational efficiency improvement.",
    tech: ["React.js", "Axios", "React Router DOM", "Node.js", "Express.js", "MongoDB", "JWT"],
    image: ecom, // Replace with actual image URL if available
     projectLink:"https://github.com/Vmkmanoj/E-COM-Application.git"
  },
  {
    title: "News Web Application",
    description:
      "Developed a dynamic React-based news application with real-time data fetching for up-to-date articles. Features responsive design, customizable filters, and optimized performance using React components and hooks.",
    tech: ["React.js", "News API", "Tailwind CSS"],
    image: newapp, // Replace with actual image URL if available
     projectLink:"https://github.com/Vmkmanoj/News-App.git"
  },
];


export const  ProjectShowcase = ()=> {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Add keyboard navigation
  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, []);

  return (
    <div className="h-screen  bg-gray-900 flex items-center justify-center overflow-hidden bg-transparent">
      <div className=" w-[1200px]  mx-auto px-4">
        {/* Navigation Buttons */}
        <button
          onClick={prevProject}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-400 transition-colors"
          aria-label="Previous project"
        >
          <FaChevronLeft color="black" size={24} className="mt-56" />
        </button>
        <button
          onClick={nextProject}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 text-white hover:text-blue-400 transition-colors"
          aria-label="Next project"
        >
          <FaChevronRight color="black" size={24}  className="mt-56"/>
        </button>

        {/* Project Display */}
        <div className="relative overflow-hidden rounded-xl shadow-xl">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project, index) => (

              

              <div key={index} className="w-full flex-shrink-0 p-8">
                <a href={project.projectLink} target="_black">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-black">
                      {project.title}
                    </h2>
                    <p className="text-black-300">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm badge"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="order-first md:order-last">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="rounded-lg shadow-xl w-full h-full"
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
        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-black"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


