import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import CurriculumVitae from "./pages/CurriculumVitae";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import NotFound from "./pages/exceptions/NotFound";
import Footer from "./components/Footer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.body.setAttribute("data-bs-theme", "dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
    document.body.setAttribute("data-bs-theme", newTheme);
  };

  return (
    <Router>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path='/' element={<AboutMe isDarkMode={isDarkMode} />} />
        <Route
          path='/curriculum-vitae'
          element={<CurriculumVitae isDarkMode={isDarkMode} />}
        />
        <Route
          path='/projects'
          element={<Projects isDarkMode={isDarkMode} />}
        />
        <Route path='/links' element={<Links />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
