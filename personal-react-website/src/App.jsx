import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import AboutMe from "./pages/AboutMe";
import CurriculumVitae from "./pages/CurriculumVitae";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import NotFound from "./pages/exceptions/NotFound";
import Footer from "./components/Footer";
import { useTranslation } from "react-i18next";
import WarningPopup from "./components/WarningPopup";
import {
  ONE_DAY_MS,
  changeLanguage,
  resetLanguage,
  toggleDarkMode,
} from "./utils/themeAndLanguageUtils";

const App = () => {
  const [searchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const location = useLocation();

  // Sync mode from URL on load
  useEffect(() => {
    const mode = searchParams.get("mode");

    // Sync theme with URL parameter
    if (mode === "light") {
      if (isDarkMode) {
        setIsDarkMode(false);
        document.body.setAttribute("data-bs-theme", "light");
        localStorage.setItem("theme", "light");
      }
    } else if (mode === "dark") {
      if (!isDarkMode) {
        setIsDarkMode(true);
        document.body.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
      }
    }
  }, [searchParams]);

  // Restore saved settings on first load and sync with URL parameters
  useEffect(() => {
    // Restore theme from localStorage or URL
    const savedTheme = localStorage.getItem("theme");
    const mode = searchParams.get("mode");

    if (mode) {
      if (mode === "dark") {
        setIsDarkMode(true);
        document.body.setAttribute("data-bs-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else if (mode === "light") {
        setIsDarkMode(false);
        document.body.setAttribute("data-bs-theme", "light");
        localStorage.setItem("theme", "light");
      }
    } else if (savedTheme) {
      if (savedTheme === "dark") {
        setIsDarkMode(true);
        document.body.setAttribute("data-bs-theme", "dark");
      } else {
        setIsDarkMode(false);
        document.body.setAttribute("data-bs-theme", "light");
      }
    }

    // Restore language from localStorage or URL
    const savedLang = localStorage.getItem("language");
    const savedTimestamp = localStorage.getItem("language_timestamp");
    const lang = searchParams.get("lang");

    if (lang) {
      if (lang !== i18n.language) {
        i18n.changeLanguage(lang);
        localStorage.setItem("language", lang);
        localStorage.setItem("language_timestamp", Date.now().toString());
      }
    } else if (savedLang && savedTimestamp) {
      const currentTime = Date.now();
      const elapsedTime = currentTime - parseInt(savedTimestamp, 10);

      if (elapsedTime < ONE_DAY_MS) {
        i18n.changeLanguage(savedLang);
      } else {
        resetLanguage(i18n);
      }
    }
  }, [i18n, searchParams]);

  // Display warning for certain languages and pages
  useEffect(() => {
    if (i18n.language === "de" || i18n.language === "kz") {
      if (
        location.pathname === "/curriculum-vitae" ||
        location.pathname === "/projects"
      ) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
    } else {
      setShowWarning(false);
    }
  }, [i18n.language, location.pathname]);

  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        toggleDarkMode={() => toggleDarkMode(isDarkMode, setIsDarkMode)}
        changeLanguage={(lang) => changeLanguage(i18n, lang)}
        t={t}
      />
      {showWarning && (
        <WarningPopup
          showWarning={showWarning}
          t={t}
          text={
            location.pathname === "/curriculum-vitae"
              ? t("warnings.partially_available")
              : t("warnings.only_available_in_english")
          }
        />
      )}
      <Routes>
        <Route path='/' element={<AboutMe isDarkMode={isDarkMode} t={t} />} />
        <Route
          path='/curriculum-vitae'
          element={<CurriculumVitae isDarkMode={isDarkMode} t={t} />}
        />
        <Route
          path='/projects'
          element={<Projects isDarkMode={isDarkMode} t={t} />}
        />
        <Route path='/links' element={<Links t={t} />} />
        <Route path='*' element={<NotFound t={t} />} />
      </Routes>
      <Footer t={t} />
    </>
  );
};

export default App;
