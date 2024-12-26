import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import CurriculumVitae from "./pages/CurriculumVitae";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import NotFound from "./pages/exceptions/NotFound";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* AboutMe will be rendered when the path is '/' */}
        <Route path='/' element={<AboutMe />} />

        {/* Other routes */}
        <Route path='/curriculum-vitae' element={<CurriculumVitae />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/links' element={<Links />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
