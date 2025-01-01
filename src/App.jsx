import { Route, Routes, useLocation } from "react-router-dom";
import Innerfiled from './Componant/innerfiled';
import { ProjectShowcase } from "./Componant/ProjectShowcase";
import AboutMe from "./Componant/aboutme";
import GetInTouch from "./Componant/getIn";

import NavBar from "./Componant/Nav";

function App() {
  const location = useLocation(); // Using useLocation to get the current location

  return (
    <>
      {/* Conditionally render NavBar based on the current path */}
      <NavBar></NavBar>

      {/* Define Routes */}
      <Routes>
        <Route path="/Home" element={<Innerfiled />} />
        <Route path="/Project" element={<ProjectShowcase></ProjectShowcase>}></Route>
        <Route path="/Aboutme" element={<AboutMe></AboutMe>}></Route>
        <Route path="/getInTouch" element={<GetInTouch></GetInTouch>}></Route>
        
      </Routes>
    </>
  );
}

export default App;
