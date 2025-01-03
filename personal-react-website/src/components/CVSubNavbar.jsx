import React from "react";

const CVSubNavbar = ({ isDarkMode, t }) => {
  return (
    <nav className='mb-4'>
      <ul className='nav justify-content-center text-decoration-underline'>
        <li className='nav-item'>
          <a
            className={`nav-link ${isDarkMode ? "text-white" : "text-black"}`}
            href='#work-experience'
          >
            {t("cv_page.navigations.work_experience")}
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={`nav-link ${isDarkMode ? "text-white" : "text-black"}`}
            href='#education'
          >
            {t("cv_page.navigations.education")}
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={`nav-link ${isDarkMode ? "text-white" : "text-black"}`}
            href='#skills'
          >
            {t("cv_page.navigations.skills")}
          </a>
        </li>
        <li className='nav-item'>
          <a
            className={`nav-link ${isDarkMode ? "text-white" : "text-black"}`}
            href='#certifications'
          >
            {t("cv_page.navigations.certifications")}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default CVSubNavbar;
