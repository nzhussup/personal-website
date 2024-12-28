import { useState, useEffect } from "react";

export const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const modeFromUrl = new URLSearchParams(window.location.search).get("mode");

    // Sync theme with URL or localStorage
    const mode = modeFromUrl || savedTheme || "light";
    setTheme(mode);
  }, []);

  const setTheme = (mode) => {
    const isDark = mode === "dark";
    setIsDarkMode(isDark);
    document.body.setAttribute("data-bs-theme", mode);
    localStorage.setItem("theme", mode);
  };

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setTheme(newTheme);

    // Update URL without reloading
    const currentSearchParams = new URLSearchParams(window.location.search);
    currentSearchParams.set("mode", newTheme);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${currentSearchParams.toString()}`
    );
  };

  return [isDarkMode, toggleTheme];
};
