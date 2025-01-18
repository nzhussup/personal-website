import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ isDarkMode, toggleDarkMode, changeLanguage, t }) => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const collapseVariants = {
    open: { height: "auto", opacity: 1 },
    collapsed: { height: 0, opacity: 0 },
  };

  const dropdownVariants = {
    open: { opacity: 1, scale: 1, display: "block" },
    collapsed: { opacity: 0, scale: 0.95, display: "none" },
  };

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

  const closeNavbar = () => setIsCollapsed(true);
  const closeDropdown = () => setIsDropdownOpen(false);

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

        {/* Toggle Button */}
        {isMobile && (
          <button
            className='navbar-toggler'
            type='button'
            aria-expanded={!isCollapsed ? "true" : "false"}
            aria-label='Toggle navigation'
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className='navbar-toggler-icon'></span>
          </button>
        )}

        {/* Collapsible Navbar for mobile */}
        {isMobile ? (
          <AnimatePresence>
            {!isCollapsed && (
              <motion.div
                className='navbar-collapse'
                initial='collapsed'
                animate='open'
                exit='collapsed'
                variants={collapseVariants}
                transition={{ duration: 0.3 }}
              >
                <ul className='navbar-nav ms-auto d-flex align-items-center'>
                  <li className='nav-item'>
                    <button
                      className={`nav-link ${
                        isDarkMode ? "text-white" : "text-black"
                      }`}
                      onClick={() => {
                        handlePageChange("/");
                        closeDropdown();
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
                        closeDropdown();
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
                        closeDropdown();
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
                        closeDropdown();
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
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                      {t("navbar.language")}
                    </button>
                    <motion.ul
                      className='dropdown-menu'
                      aria-labelledby='languageDropdown'
                      initial='collapsed'
                      animate={isDropdownOpen ? "open" : "collapsed"}
                      variants={dropdownVariants}
                      transition={{ duration: 0.3 }}
                    >
                      <li>
                        <button
                          className='dropdown-item'
                          onClick={() => {
                            changeLanguage("en");
                            closeDropdown();
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
                            closeDropdown();
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
                            closeDropdown();
                            closeNavbar();
                          }}
                        >
                          қазақша 🇰🇿
                        </button>
                      </li>
                    </motion.ul>
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
                      <label
                        className='form-check-label'
                        htmlFor='darkModeToggle'
                      >
                        🌚
                      </label>
                    </div>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        ) : (
          // Regular Navbar for larger screens without animation
          <div className='navbar-collapse show'>
            <ul className='navbar-nav ms-auto d-flex align-items-center'>
              <li className='nav-item'>
                <button
                  className={`nav-link ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                  onClick={() => handlePageChange("/")}
                >
                  {t("navbar.about_me")}
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                  onClick={() => handlePageChange("/curriculum-vitae")}
                >
                  {t("navbar.cv")}
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                  onClick={() => handlePageChange("/projects")}
                >
                  {t("navbar.projects")}
                </button>
              </li>
              <li className='nav-item'>
                <button
                  className={`nav-link ${
                    isDarkMode ? "text-white" : "text-black"
                  }`}
                  onClick={() => handlePageChange("/links")}
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
                <ul
                  className='dropdown-menu'
                  aria-labelledby='languageDropdown'
                >
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => changeLanguage("en")}
                    >
                      english 🇬🇧
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => changeLanguage("de")}
                    >
                      deutsch 🇩🇪
                    </button>
                  </li>
                  <li>
                    <button
                      className='dropdown-item'
                      onClick={() => changeLanguage("kz")}
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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
