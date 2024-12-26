import React from "react";
import linkedinLogo from "../assets/linkedin-logo.svg";
import emailLogo from "../assets/email-logo.svg";

const Footer = () => {
  return (
    <div className='container'>
      <footer>
        <div className='d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top'>
          <p>© 2024 by Nurzhanat Zhussup. All rights reserved.</p>
          <ul className='list-unstyled d-flex'>
            <li className='ms-3'>
              <a
                className='link-body-emphasis'
                href='https://www.linkedin.com/in/nurzhanat-zhussup/'
              >
                <img src={linkedinLogo} />
              </a>
            </li>
            <li className='ms-3'>
              <a
                className='link-body-emphasis'
                href='mailto:zhussup.nb@gmail.com'
              >
                <img src={emailLogo} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
