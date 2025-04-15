import React, { useEffect, useRef } from "react";
import profile from "../Componant/profile.jpg";
import resume from "./resume.png";
import github from "./github.png";
import project from "./project.png";
import linkin from "./linkin.png";
import Aboutme from "./aboutme.png";
import { useNavigate } from "react-router-dom";
import "./innerfiled.css";

function Innerfiled() {
  const Navigate = useNavigate();
  const gridItemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    gridItemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      gridItemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <>
      {/* Outer Container */}
      <div className="bg-transparent w-full max-w-[1500px] h-auto mt-10 mx-auto rounded-lg shadow-lg p-6 overflow-hidden">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Items */}
          {[
            {
              img: profile,
              title: "Hey, I'm ManojKumar 👋🏻",
              description: "I am a Front-End Developer",
              isClickable: false,
            },
            {
              img: resume,
              title: "See my resume",
              link: "https://drive.google.com/file/d/1mG-rWAs8_Oov35O38hbiQuEHdF7s0JdW/view?usp=sharing",
            },
            {
              img: github,
              title: "My GitHub",
              link: "https://github.com/Vmkmanoj",
            },
            {
              img: project,
              title: "My Projects",
              onClick: () => Navigate("/Project"),
            },
            {
              img: linkin,
              title: "LinkedIn",
              link: "https://www.linkedin.com/in/manojkumar-v-680683298",
            },
            {
              img: Aboutme,
              title: "About Me",
              onClick: () => Navigate("/Aboutme"),
            },
          ].map((item, index) => (
            <div
              key={index}
              ref={(el) => (gridItemsRef.current[index] = el)}
              className="grid-item bg-[#333639] h-auto sm:h-[280px] w-full rounded-lg p-6 flex flex-col items-center sm:gap-5 transition-all duration-700 opacity-0 transform translate-y-10 shadow-xl"
              onClick={item.onClick}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-[80px] sm:w-[100px] mt-4"
              />
              <h1 className="text-[20px] sm:text-[30px] text-white font-bold text-center">
                {item.title}
              </h1>
              {item.description && (
                <p className="text-[#bab7ae] mt-2 text-[14px] sm:text-[16px] text-center">
                  {item.description}
                </p>
              )}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-center"
                >
                  <span>--&gt;</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Innerfiled;
