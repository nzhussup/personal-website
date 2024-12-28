export const ONE_DAY_MS = 24 * 60 * 60 * 1000;

// Function to change the language
export const changeLanguage = (i18n, lang) => {
  i18n.changeLanguage(lang);

  // Update localStorage for persistence
  const currentTime = Date.now();
  localStorage.setItem("language", lang);
  localStorage.setItem("language_timestamp", currentTime.toString());

  // Update the URL without reloading
  const currentSearchParams = new URLSearchParams(window.location.search);
  currentSearchParams.set("lang", lang);
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${currentSearchParams.toString()}`
  );
};

// Function to reset the language to default
export const resetLanguage = (i18n, defaultLanguage = "en") => {
  i18n.changeLanguage(defaultLanguage);
  localStorage.setItem("language", defaultLanguage);
  localStorage.setItem("language_timestamp", Date.now().toString());
};

// Function to toggle dark mode
export const toggleDarkMode = (isDarkMode, setIsDarkMode) => {
  const newTheme = isDarkMode ? "light" : "dark";

  // Update the URL without causing unnecessary state conflicts
  const currentSearchParams = new URLSearchParams(window.location.search);
  currentSearchParams.set("mode", newTheme);
  window.history.replaceState(
    null,
    "",
    `${window.location.pathname}?${currentSearchParams.toString()}`
  );

  // Update the state and body attribute
  setIsDarkMode(!isDarkMode);
  document.body.setAttribute("data-bs-theme", newTheme);

  // Sync with localStorage
  localStorage.setItem("theme", newTheme);
};

