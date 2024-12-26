import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='container'>
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom'>
        <Link
          to='/'
          className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none'
        >
          <svg className='bi me-2' width='40' height='32'>
            <use xlink:href='#bootstrap'></use>
          </svg>
          <span className='fs-4'>👨🏽‍💻 nurzhanat zhussup</span>
        </Link>

        <ul className='nav nav-pills'>
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
      </header>
    </div>
  );
};

export default Navbar;
