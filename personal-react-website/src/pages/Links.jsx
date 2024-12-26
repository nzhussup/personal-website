import React from "react";
import linkedinLogo from "../assets/linkedin-logo.svg";
import githubLogo from "../assets/github-logo.svg";

const Links = () => {
  return (
    <div className='container px-4 py-5' id='hanging-icons'>
      <h2 className='pb-2 border-bottom'>Links</h2>
      <div class='d-flex flex-column flex-md-row p-4 gap-4 py-md-5 align-items-center justify-content-center'>
        <div class='list-group'>
          <a
            href='https://github.com/nzhussup'
            class='list-group-item list-group-item-action d-flex gap-3 py-3'
            aria-current='true'
          >
            <img
              src={githubLogo}
              alt='twbs'
              width='32'
              height='32'
              class='rounded-circle flex-shrink-0'
            />
            <div class='d-flex gap-2 w-100 justify-content-between'>
              <div>
                <h6 class='mb-0'>GitHub</h6>
              </div>
            </div>
          </a>
          <a
            href='https://www.linkedin.com/in/nurzhanat-zhussup/'
            class='list-group-item list-group-item-action d-flex gap-3 py-3'
            aria-current='true'
          >
            <img
              src={linkedinLogo}
              alt='twbs'
              width='32'
              height='32'
              class='rounded-circle flex-shrink-0'
            />
            <div class='d-flex gap-2 w-100 justify-content-between'>
              <div>
                <h6 class='mb-0'>LinkedIn</h6>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Links;
