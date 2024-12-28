import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ isDarkMode, toggleDarkMode, changeLanguage, t }) => {
  const navbarCollapseRef = useRef(null);

  // Close the navbar on mobile after a link is clicked
  const closeNavbar = () => {
    const navbarCollapse = navbarCollapseRef.current;
    if (navbarCollapse) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
        toggle: false,
      });
      bsCollapse.hide();
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg ${
        isDarkMode ? "navbar-dark bg-dark" : "navbar-light"
      } border-bottom`}
    >
      <div className='container'>
        {/* Brand */}
        <Link
          to='/'
          className='navbar-brand d-flex align-items-center gap-2 text-decoration-none'
        >
          <svg className='bi' width='40' height='32'>
            <use xlinkHref='#bootstrap'></use>
          </svg>
          <span className={`fs-4 ${isDarkMode ? "text-white" : "text-dark"}`}>
            👨🏽‍💻 nurzhanat zhussup
          </span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        {/* Navbar Links */}
        <div
          className='collapse navbar-collapse'
          id='navbarNav'
          ref={navbarCollapseRef}
        >
          <ul className='navbar-nav ms-auto d-flex align-items-center'>
            <li className='nav-item'>
              <Link
                to='/'
                className={`nav-link ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                aria-current='page'
                onClick={closeNavbar}
              >
                {t("navbar.about_me")}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/curriculum-vitae'
                className={`nav-link ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                onClick={closeNavbar}
              >
                {t("navbar.cv")}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/projects'
                className={`nav-link ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                onClick={closeNavbar}
              >
                {t("navbar.projects")}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/links'
                className={`nav-link ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
                onClick={closeNavbar}
              >
                {t("navbar.links")}
              </Link>
            </li>

            {/* Language Dropdown */}
            <li className='nav-item dropdown ms-3'>
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
            <li className='nav-item ms-3'>
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
