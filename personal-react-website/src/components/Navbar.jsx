import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light border-bottom'>
      <div className='container'>
        <Link
          to='/'
          className='navbar-brand d-flex align-items-center gap-2 text-decoration-none'
        >
          <svg className='bi' width='40' height='32'>
            <use xlinkHref='#bootstrap'></use>
          </svg>
          <span className='fs-4'>👨🏽‍💻 nurzhanat zhussup</span>
        </Link>

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

        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link text-black' aria-current='page'>
                about me
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/curriculum-vitae' className='nav-link text-black'>
                curriculum vitae
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/projects' className='nav-link text-black'>
                projects
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/links' className='nav-link text-black'>
                links
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
