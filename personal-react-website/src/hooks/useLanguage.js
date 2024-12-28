import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const useLanguage = () => {
  const { i18n } = useTranslation();

  // App remembers the chosen language only one day. Then it resets to en.
  const ONE_DAY_MS = 24 * 60 * 60 * 1000;

  const resetLanguage = (i18n, defaultLanguage = "en") => {
  i18n.changeLanguage(defaultLanguage);
  localStorage.setItem("language", defaultLanguage);
  localStorage.setItem("language_timestamp", Date.now().toString());
};


  useEffect(() => {
    const langFromUrl = new URLSearchParams(window.location.search).get("lang");
    const savedLang = localStorage.getItem("language");
    const savedTimestamp = localStorage.getItem("language_timestamp");

    if (langFromUrl) {
      changeLanguage(langFromUrl);
    } else if (savedLang && savedTimestamp) {
      const currentTime = Date.now();
      const elapsedTime = currentTime - parseInt(savedTimestamp, 10);
      if (elapsedTime < ONE_DAY_MS) {
        changeLanguage(savedLang);
      } else {
        resetLanguage(i18n);
      }
    }
  }, [i18n]);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);

    // Update localStorage
    const currentTime = Date.now();
    localStorage.setItem("language", lang);
    localStorage.setItem("language_timestamp", currentTime.toString());

    // Update URL
    const currentSearchParams = new URLSearchParams(window.location.search);
    currentSearchParams.set("lang", lang);
    window.history.replaceState(
      null,
      "",
      `${window.location.pathname}?${currentSearchParams.toString()}`
    );
  };

  return { changeLanguage };
};
