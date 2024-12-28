import React, { useState, useEffect } from "react";
import cvData from "../config/curriculum-vitae.json";

const CurriculumVitae = ({ isDarkMode }) => {
  const {
    "Work Experience": WorkExperience,
    Education,
    Skills,
    Certifications,
  } = cvData;

  if (!cvData) {
    return <p>No CV available...</p>;
  }

  return (
    <div className='container mt-4'>
      <h1 className='pb-2 border-bottom text-center'>Curriculum Vitae</h1>

      {/* Navigation Bar (Links to each section) */}
      <nav className='mb-4'>
        <ul className='nav justify-content-center text-decoration-underline'>
          <li className='nav-item'>
            <a
              className={`nav-link ${isDarkMode ? "text-white" : "text-black"}`}
              href='#work-experience'
            >
              Work Experience
            </a>
          </li>
          <li className='nav-item'>
            <a
              className={`nav-link ${isDarkMode ? "text-white" : "text-black"}`}
              href='#education'
            >
              Education
            </a>
          </li>
          <li className='nav-item'>
            <a
              className={`nav-link ${isDarkMode ? "text-white" : "text-black"}`}
              href='#skills'
            >
              Skills
            </a>
          </li>
          <li className='nav-item'>
            <a
              className={`nav-link ${isDarkMode ? "text-white" : "text-black"}`}
              href='#certifications'
            >
              Certifications
            </a>
          </li>
        </ul>
      </nav>

      {/* Work Experience */}
      <section id='work-experience'>
        <h4 className='d-flex align-items-center mb-3'>
          <div className='icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-briefcase'
              viewBox='0 0 16 16'
            >
              <path d='M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5m1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0M1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5' />
            </svg>
          </div>
          Work Experience
        </h4>

        {Array.isArray(WorkExperience) && WorkExperience.length > 0 ? (
          WorkExperience.map((work, index) => (
            <div key={index} className='card mb-3 shadow-sm rounded-lg'>
              <div className='card-body'>
                <h5 className='card-title text-body-emphasis mb-2'>
                  {work.Position} at {work.Company}
                </h5>
                <p className='card-text text-muted'>{work.Description}</p>
                <p className='text-muted'>
                  <strong>Location:</strong> {work.Location}
                </p>
                <p className='text-muted'>
                  <strong>Duration:</strong> {work.Start} to {work.End}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No work experience available.</p>
        )}
      </section>

      {/* Education */}
      <section id='education'>
        <h4 className='d-flex align-items-center mb-3'>
          <div className='icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-book'
              viewBox='0 0 16 16'
            >
              <path d='M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783' />
            </svg>
          </div>
          Education
        </h4>

        {Array.isArray(Education) && Education.length > 0 ? (
          Education.map((edu, index) => (
            <div key={index} className='card mb-3 shadow-sm rounded-lg'>
              <div className='card-body'>
                <h5 className='card-title text-body-emphasis mb-2'>
                  {edu.Degree} at {edu.Institution}
                </h5>
                <p className='text-muted'>
                  <strong>Location:</strong> {edu.Location}
                </p>
                <p className='text-muted'>
                  <strong>Thesis:</strong> {edu.Thesis}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No education information available.</p>
        )}
      </section>

      {/* Skills */}
      <section id='skills'>
        <h4 className='d-flex align-items-center mb-3'>
          <div className='icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-braces'
              viewBox='0 0 16 16'
            >
              <path d='M2.114 8.063V7.9c1.005-.102 1.497-.615 1.497-1.6V4.503c0-1.094.39-1.538 1.354-1.538h.273V2h-.376C3.25 2 2.49 2.759 2.49 4.352v1.524c0 1.094-.376 1.456-1.49 1.456v1.299c1.114 0 1.49.362 1.49 1.456v1.524c0 1.593.759 2.352 2.372 2.352h.376v-.964h-.273c-.964 0-1.354-.444-1.354-1.538V9.663c0-.984-.492-1.497-1.497-1.6M13.886 7.9v.163c-1.005.103-1.497.616-1.497 1.6v1.798c0 1.094-.39 1.538-1.354 1.538h-.273v.964h.376c1.613 0 2.372-.759 2.372-2.352v-1.524c0-1.094.376-1.456 1.49-1.456V7.332c-1.114 0-1.49-.362-1.49-1.456V4.352C13.51 2.759 12.75 2 11.138 2h-.376v.964h.273c.964 0 1.354.444 1.354 1.538V6.3c0 .984.492 1.497 1.497 1.6' />
            </svg>
          </div>
          Skills
        </h4>

        {Skills &&
          Object.keys(Skills).map((category, index) => (
            <div key={index} className='card mb-3 shadow-sm rounded-lg'>
              <div className='card-body'>
                <h5 className='card-title text-body-emphasis mb-2'>
                  {category}
                </h5>
                <div className='d-flex flex-wrap gap-2'>
                  {(Array.isArray(Skills[category])
                    ? Skills[category]
                    : []
                  ).map((skill, idx) => (
                    <span
                      key={idx}
                      className={`badge ${
                        isDarkMode ? "bg-body-secondary" : "bg-light"
                      } text-muted rounded-pill`}
                      style={{ fontSize: "14px" }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* Certifications */}
      <section id='certifications'>
        <h4 className='d-flex align-items-center mb-3'>
          <div className='icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              className='bi bi-award'
              viewBox='0 0 16 16'
            >
              <path d='M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702z' />
              <path d='M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z' />
            </svg>
          </div>
          Certifications
        </h4>

        {Array.isArray(Certifications) && Certifications.length > 0 ? (
          Certifications.map((cert, index) => (
            <div key={index} className='card mb-3 shadow-sm rounded-lg'>
              <div className='card-body d-flex justify-content-between align-items-center'>
                <h5 className='card-title text-body-emphasis mb-0'>
                  {cert.Name}
                </h5>
                <a
                  href={cert.URL}
                  className={`btn ${
                    isDarkMode ? "btn-secondary" : "btn-light"
                  } ${isDarkMode ? "text-white" : "text-black"} rounded-pill`}
                  target='_blank'
                  rel='noopener noreferrer'
                  style={{ fontSize: "14px" }}
                >
                  View Certificate
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No certifications available.</p>
        )}
      </section>
    </div>
  );
};

export default CurriculumVitae;
