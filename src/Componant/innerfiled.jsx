import React from "react";
import profile from "../Componant/profile.jpg";
import resume from "./resume.png";
import github from "./github.png";
import project from "./project.png";
import linkin from "./linkin.png";
import Aboutme from "./aboutme.png";
import { useNavigate } from "react-router-dom";

function Innerfiled() {
  const Navigate = useNavigate();

  return (
    <>
      {/* Outer Container */}
      <div className="bg-transparent w-full max-w-[1500px] h-auto mt-10 mx-auto rounded-lg shadow-lg p-6 overflow-hidden">
        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Grid Item 1 */}
          <div className="bg-[#333639] h-auto sm:h-[280px] w-full rounded-lg flex flex-col sm:flex-row items-center p-6 space-y-6 sm:space-y-0 sm:space-x-6 shadow-xl">
            {/* Profile Image */}
            <img
              src={profile}
              className="h-[150px] sm:h-[200px] w-[150px] sm:w-[200px] rounded-full object-cover"
              alt="Profile"
            />

            {/* Text Content */}
            <div className="text-white text-center sm:text-left">
              <h1 className="text-[20px] sm:text-[28px] font-bold">
                Hey, I'm ManojKumar{" "}
                <span className="ml-2">👋🏻</span>
              </h1>
              <p className="text-[14px] sm:text-[16px] text-[#bab7ae] mt-2">
                "I am a Front-End Developer"
              </p>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="bg-[#333639] flex flex-col items-center text-white rounded-lg w-full h-auto sm:h-[280px] gap-2 p-6 shadow-2xl">
            <img src={resume} className="w-[80px] sm:w-[100px] mt-4" alt="Resume" />
            <span className="text-[#bab7ae] mt-2 text-[14px] sm:text-[16px]">
              Learn More About Me
            </span>

            <a
              href="https://drive.google.com/file/d/1mG-rWAs8_Oov35O38hbiQuEHdF7s0JdW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 mt-2"
            >
              <h1 className="text-[20px] sm:text-[30px] font-bold">
                See my resume
              </h1>
              <span>--&gt;</span>
            </a>
          </div>

          {/* Grid Item 3 */}
          <div className="bg-[#333639] rounded-lg w-full h-auto sm:h-[280px] mx-auto flex flex-col items-center gap-4 sm:gap-10 p-6">
            <img src={github} className="w-[80px] sm:w-[100px] mt-4" alt="GitHub" />
            <a
              href="https://github.com/Vmkmanoj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1"
            >
              <h1 className="text-[20px] sm:text-[30px] text-white font-bold">
                My GitHub
              </h1>
              <span>--&gt;</span>
            </a>
          </div>

          {/* Grid Item 4 */}
          <div
            onClick={() => Navigate("/Project")}
            className="bg-[#333639] rounded-lg w-full h-auto sm:h-[280px] mx-auto flex flex-col items-center gap-4 sm:gap-10 p-6 cursor-pointer"
          >
            <img src={project} className="w-[80px] sm:w-[100px] mt-4" alt="Projects" />
            <div className="flex items-center gap-1">
              <h1 className="text-[20px] sm:text-[30px] text-white font-bold">
                My Projects
              </h1>
              <span>--&gt;</span>
            </div>
          </div>

          {/* Grid Item 5 */}
          <div className="bg-[#333639] rounded-lg w-full h-auto sm:h-[280px] mx-auto flex flex-col items-center gap-4 sm:gap-10 p-6">
            <a
              href="https://www.linkedin.com/in/manojkumar-v-680683298"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex flex-col items-center"
            >
              <img src={linkin} className="w-[100px] sm:w-[135px] mt-4" alt="LinkedIn" />
              <h1 className="text-[20px] sm:text-[30px] text-white font-bold mt-2">
                LinkedIn
              </h1>
              <span>--&gt;</span>
            </a>
          </div>

          {/* Grid Item 6 */}
          <div
            onClick={() => Navigate("/Aboutme")}
            className="bg-[#333639] rounded-lg w-full h-auto sm:h-[280px] mx-auto flex flex-col items-center gap-4 sm:gap-10 p-6 cursor-pointer"
          >
            <img src={Aboutme} className="w-[100px] sm:w-[130px] mt-4" alt="About Me" />
            <div className="flex items-center gap-1">
              <h1 className="text-[20px] sm:text-[30px] text-white font-bold">
                About Me
              </h1>
              <span>--&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Innerfiled;
