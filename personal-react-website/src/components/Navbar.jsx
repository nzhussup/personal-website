import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ isDarkMode, toggleDarkMode, changeLanguage, t }) => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const { i18n } = useTranslation();

  // This func sets a delay in naviagting to achieve a smooth transition.
  // Also this func takes the optional variable with it if other lang was chosen (not default)
  const handlePageChange = (path) => {
    const currentLang = i18n.language;
    const defaultLang = "en";

    const urlWithLang =
      currentLang && currentLang !== defaultLang
        ? `${path}?lang=${currentLang}`
        : path;

    setTimeout(() => {
      navigate(urlWithLang, { replace: true });
    }, 130);
  };

  const closeNavbar = () => {
    setIsCollapsed(true);
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light"
      } border-bottom`}
    >
      <div className='container'>
        {/* Brand */}
        <a
          href='#'
          className='navbar-brand d-flex align-items-center gap-2 text-decoration-none'
          onClick={() => handlePageChange("/")}
        >
          <svg className='bi' width='40' height='32'>
            <use xlinkHref='#bootstrap'></use>
          </svg>
          <span className={`fs-4 ${isDarkMode ? "text-white" : "text-dark"}`}>
            👨🏽‍💻 nurzhanat zhussup
          </span>
        </a>

        {/* Toggle Button for Mobile */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded={!isCollapsed ? "true" : "false"}
          aria-label='Toggle navigation'
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${isCollapsed ? "" : "show"}`}
          id='navbarNav'
        >
          <ul className='navbar-nav ms-auto d-flex align-items-center'>
            <li className='nav-item'>
              <button
                className={`nav-link ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                onClick={() => {
                  handlePageChange("/");
                  closeNavbar();
                }}
              >
                {t("navbar.about_me")}
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                onClick={() => {
                  handlePageChange("/curriculum-vitae");
                  closeNavbar();
                }}
              >
                {t("navbar.cv")}
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                onClick={() => {
                  handlePageChange("/projects");
                  closeNavbar();
                }}
              >
                {t("navbar.projects")}
              </button>
            </li>
            <li className='nav-item'>
              <button
                className={`nav-link ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                onClick={() => {
                  handlePageChange("/links");
                  closeNavbar();
                }}
              >
                {t("navbar.links")}
              </button>
            </li>

            {/* Language Dropdown */}
            <li className='nav-item dropdown ms-2 ms-sm-3'>
              <button
                className={`btn btn-sm dropdown-toggle ${
                  isDarkMode ? "btn-secondary" : "btn-light"
                }`}
                id='languageDropdown'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                {t("navbar.language")}
              </button>
              <ul className='dropdown-menu' aria-labelledby='languageDropdown'>
                <li>
                  <button
                    className='dropdown-item'
                    onClick={() => {
                      changeLanguage("en");
                      closeNavbar();
                    }}
                  >
                    english 🇬🇧
                  </button>
                </li>
                <li>
                  <button
                    className='dropdown-item'
                    onClick={() => {
                      changeLanguage("de");
                      closeNavbar();
                    }}
                  >
                    deutsch 🇩🇪
                  </button>
                </li>
                <li>
                  <button
                    className='dropdown-item'
                    onClick={() => {
                      changeLanguage("kz");
                      closeNavbar();
                    }}
                  >
                    қазақша 🇰🇿
                  </button>
                </li>
              </ul>
            </li>

            {/* Dark Mode Toggle */}
            <li className='nav-item ms-2 ms-sm-3'>
              <div className='form-check form-switch'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='darkModeToggle'
                  checked={isDarkMode}
                  onChange={toggleDarkMode}
                />
                <label className='form-check-label' htmlFor='darkModeToggle'>
                  🌚
                </label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
