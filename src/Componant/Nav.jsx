import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate(); // Correct capitalization

  return (
    <>
      <div className="NavBar flex justify-between items-center w-full px-4 py-4 mt-16">
        <h1 className="text-white text-3xl font-bold font-archivo md:text-4xl">
          Manojkumar V
        </h1>

        {/* Navigation Menu */}
        <div className="navigation hidden md:flex gap-10 text-white font-poppins">
          <ul>
            <li className="cursor-pointer" onClick={() => navigate("/Home")}>
              Home
            </li>
          </ul>
          <ul>
            <li className="cursor-pointer" onClick={()=>navigate("/Aboutme")}>About</li>
          </ul>
          <ul>
            <a
              href="https://drive.google.com/file/d/1mG-rWAs8_Oov35O38hbiQuEHdF7s0JdW/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li className="cursor-pointer">Resume</li>
            </a>
          </ul>
        </div>

        {/* Hamburger Menu (for smaller screens) */}
        <div className="md:hidden">
          <button className="text-white text-2xl">
            <i className="fa fa-bars"></i>
          </button>
        </div>

        {/* Contact Button */}
        <div>
          <button onClick={()=>navigate("/getInTouch")} className="bg-white h-12 w-[200px] rounded-[40px] font-bold font-poppins">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </>
  );
}

export default NavBar;
    