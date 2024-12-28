import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ONE_DAY_MS, resetLanguage } from "../utils/themeAndLanguageUtils";

export const useLanguage = () => {
  const { i18n } = useTranslation();

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
