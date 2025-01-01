import React from "react";
import profile from "../Componant/profile.jpg";
import resume from "./resume.png";
import github from "./github.png";
import project from "./project.png";
import linkin from "./linkin.png"
import Aboutme from "./aboutme.png"
import { useNavigate } from "react-router-dom";


function Innerfiled() {
  const Navigate = useNavigate();

  return (
    <>
      {/* Outer Container */}
      <div className="bg-[#1f2022]  w-[1500px] h-auto mt-24 ml-10 mx-auto rounded-lg shadow-lg p-6 overflow-hidden bg-transparent">
        {/* Grid Container */}
        <div className="grid grid-cols-1 w-[1500px] sm:grid-cols-2 md:grid-cols-3 gap-6 bg-transparent">
          {/* Grid Item 1 */}
          <div className="bg-[#333639]  h-[280px] w-[680px] sm:w-[600px] md:w-[680px] lg:w-[680px] rounded-lg flex items-center p-6 space-x-6 shadow-xl">
            {/* Profile Image */}
            <img
              src={profile}
              className="h-[200px] w-[200px] rounded-full object-cover"
              alt="Profile"
            />

            {/* Text Content */}
            <div className="text-white font-archivo ml-[50px] flex flex-col justify-center gap-10 bg-[#333639]">
              <h1 className="text-[28px] font-bold flex font-poppins items-center bg-[#333639]">
                Hey, I'm ManojKumar{" "}
                <span className="ml-2 text-[28px] bg-[#333639]">👋🏻</span>
              </h1>
              <p className="text-[16px] text-[#bab7ae] mt-2 bg-[#333639]">
                "I am a Front-End Developer"
              </p>
            </div>
          </div>

          {/* Grid Item 2 */}
          <div className="flex flex-col items-center bg-[#333639] ml-[200px] mr-[100px] text-white rounded-lg w-[350px] sm:w-[400px] md:w-[350px] h-[280px] gap-2 mx-auto shadow-2xl">
            <img src={resume} className="bg-[#333639] w-[100px] mt-10" alt="Resume" />
            <span className="bg-[#333639] text-[#bab7ae]">Learn More About Me</span>

            <a
              href="https://drive.google.com/file/d/1mG-rWAs8_Oov35O38hbiQuEHdF7s0JdW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#333639] flex items-center gap-1 cursor-pointer"
            >
              <h1 className="bg-[#333639] text-[30px] font-bold font-poppins">
                See my resume
              </h1>
              <span className="bg-[#333639]">--&gt;</span>
            </a>
          </div>

          {/* Grid Item 3 */}
          <div className="bg-[#333639] rounded-lg w-[320px] sm:w-[350px] md:w-[320px] h-[280px] mx-auto flex flex-col items-center gap-10">
            <img src={github} className="bg-[#333639] w-[100px] mt-10" alt="GitHub" />
            <a
              href="https://github.com/Vmkmanoj"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#333639] flex items-center gap-1 cursor-pointer"
            >
              <h1 className="bg-[#333639] text-[30px] text-white font-bold font-poppins">
                my GitHub
              </h1>
              <span className="bg-[#333639] text-white">--&gt;</span>
            </a>
          </div>

          {/* Grid Item 4 (Projects) */}
          <div className="bg-[#333639] rounded-lg w-[320px] sm:w-[350px] md:w-[320px] h-[280px] mx-auto flex flex-col items-center gap-10">
            <img src={project} className="bg-[#333639] w-[100px] mt-10" alt="Projects" />
            <div className="flex items-center" onClick={() => Navigate("/Project")}>
              <h1 className="bg-[#333639] text-[30px] text-white font-bold font-poppins cursor-pointer">
                my Projects
              </h1>
              <span className="bg-[#333639] text-white">--&gt;</span>
            </div>
          </div>


          <div className="bg-[#333639] rounded-lg mr-[130px] w-[320px] sm:w-[350px] md:w-[320px] h-[280px] mx-auto flex flex-col items-center gap-10">
           <a href="https://www.linkedin.com/in/manojkumar-v-680683298" target="_black"> <img src={linkin} className="bg-[#333639] w-[135px] mt-10" alt="Projects" />
            <div className="flex items-center">
              <h1 className="bg-[#333639] text-[30px] mb-[10px] text-white font-bold font-poppins cursor-pointer">
                LinkdIn
              </h1>
              <span className="bg-[#333639] text-white">--&gt;</span>
            </div> </a>
          </div>


          <div onClick={()=>Navigate("/Aboutme")} className="bg-[#333639] rounded-lg w-[320px] mr-[1200px] sm:w-[350px] md:w-[320px] h-[280px] mx-auto flex flex-col items-center gap-10">
            <img src={Aboutme} className="bg-[#333639] w-[130px] mt-10" alt="Projects" />
            <div className="flex items-center" onClick={() => Navigate("/Project")}>
              <h1 className="bg-[#333639] text-[30px] text-white font-bold font-poppins cursor-pointer">
                About me
              </h1>
              <span className="bg-[#333639] text-white">--&gt;</span>
            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default Innerfiled;
