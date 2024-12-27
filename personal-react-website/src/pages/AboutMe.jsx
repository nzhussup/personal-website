import React from "react";
import nurikImage from "../assets/nurik.jpeg";
import skiing from "../assets/nurik-skiing.jpeg";
import forest from "../assets/forest.jpeg";
import linkPhoto from "../assets/icons/link.svg";
import { Link } from "react-router-dom";

const AboutMe = ({ isDarkMode }) => {
  return (
    <div className='container my-5'>
      {/* Row 1: Profile Image and About Me */}
      <div className='row mb-5'>
        {/* Profile Image */}
        <div className='col-md-4 text-center'>
          <img
            src={nurikImage}
            alt='Profile'
            className='img-fluid rounded-circle mb-3'
            style={{ width: "200px", height: "200px", objectFit: "cover" }}
          />
          <h3 className='font-weight-bold'>Nurzhanat Zhussup</h3>
          <p className='text-muted'>Software Engineer | Data Scientist</p>
          <p className='text-muted'>
            Data Scientist @ Raiffeisen Bank International AG
          </p>
        </div>

        {/* About Me Text */}
        <div className='col-md-8'>
          <h2>About Me</h2>
          <p>{"<- Yep that's me :) "}</p>
          <p>
            Hi, I'm Nurzhanat Zhussup, a passionate software engineer and data
            scientist with a deep curiosity for technology. I'm 22 and born in
            Almaty, Kazakhstan 🇰🇿⛰️
          </p>
          <p>
            I am currently based in Vienna, Austria 🇦🇹. I hold a degree in
            Economics from WU Vienna, which initially steered me towards a
            career in finance and data science. However, as I explored more
            about the tech world, I discovered my love for programming. This
            sparked my transition into software engineering. I have since honed
            my skills in web development, focusing on both frontend and backend
            technologies. Also, I am very much into AI and possess very good
            knowledge in Machine Learning and Data Engineering. I am the type of
            guy who simply enjoys coding and building stuff :)
          </p>
        </div>
      </div>

      {/* Row 2:  Hobbies */}
      <div className='row mb-4'>
        {/* Hobbies Section */}
        <div className='col-md-8'>
          <h4>Hobbies</h4>
          <p>
            I absolutely love skiing, and it's probably on the same level as
            coding for me, as I can't imagine my life without these two
            passions. :) In addition to skiing, I enjoy playing tennis and
            hiking regularly. I'm also an avid learner, often watching Udemy
            courses as part of my self-development. Recently, I've started
            reading tech books to expand my knowledge further. Outside of these
            activities, I like to stay curious about the latest trends in
            technology and continuously seek new ways to improve both
            professionally and personally. Whether it's tackling a coding
            challenge or exploring the outdoors, I'm always looking for new
            experiences to grow and learn.
          </p>
        </div>

        {/* Hobbies Photos */}
        <div className='col-md-4'>
          <div className='d-flex justify-content-center position-relative'>
            <img
              src={skiing}
              alt='Skiing'
              className='img-fluid'
              style={{
                width: "190px",
                height: "190px",
                objectFit: "cover",
                borderRadius: "50%",
              }}
            />
            <img
              src={forest}
              alt='Hiking'
              className='img-fluid position-absolute'
              style={{
                width: "120px",
                height: "120px",
                objectFit: "cover",
                borderRadius: "50%",
                top: "50%",
                left: "70%",
                zIndex: 1,
                border: "3px solid white",
              }}
            />
          </div>
        </div>
      </div>

      {/* Row 3: Links*/}
      <div className='row mt-5 g-4'>
        {/* Links list group */}
        <div className='col-md-6'>
          <div className='d-flex justify-content-around position-relative'>
            <div className='list-group'>
              <Link
                to='/links'
                className='list-group-item list-group-item-action d-flex gap-3 py-3'
                aria-current='page'
              >
                <img
                  src={linkPhoto}
                  alt='link logo'
                  width='32'
                  height='32'
                  className={`rounded-circle flex-shrink-0 ${
                    isDarkMode ? "bg-light p-1" : ""
                  }`} // Add bg-light when dark mode is active
                />
                <div className='d-flex gap-2 w-100 justify-content-between'>
                  <div>
                    <h6 className='mb-0'>Social Media</h6>
                    <p className='mb-0 opacity-75'>
                      Here you can find the links to my public social media
                      accounts
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                to='/projects'
                className='list-group-item list-group-item-action d-flex gap-3 py-3'
                aria-current='page'
              >
                <img
                  src={linkPhoto}
                  alt='link logo'
                  width='32'
                  height='32'
                  className={`rounded-circle flex-shrink-0 ${
                    isDarkMode ? "bg-light p-1" : ""
                  }`} // Add bg-light when dark mode is active
                />
                <div className='d-flex gap-2 w-100 justify-content-between'>
                  <div>
                    <h6 className='mb-0'>Projects</h6>
                    <p className='mb-0 opacity-75'>
                      Here you can find links to the source code of my projects
                    </p>
                  </div>
                </div>
              </Link>
              <Link
                to='/curriculum-vitae'
                className='list-group-item list-group-item-action d-flex gap-3 py-3'
                aria-current='page'
              >
                <img
                  src={linkPhoto}
                  alt='link logo'
                  width='32'
                  height='32'
                  className={`rounded-circle flex-shrink-0 ${
                    isDarkMode ? "bg-light p-1" : ""
                  }`} // Add bg-light when dark mode is active
                />
                <div className='d-flex gap-2 w-100 justify-content-between'>
                  <div>
                    <h6 className='mb-0'>Curriculum Vitae</h6>
                    <p className='mb-0 opacity-75'>
                      Here you can find my current CV including my current
                      skills
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Links text */}
        <div className='col-md-6'>
          <h4>Links</h4>
          <p>
            I am always engaged in creating new and exciting projects. In my
            free time, I enjoy programming or pursuing activities from my list
            of hobbies. I’ve built a collection of projects that I encourage you
            to check out. You can find them by clicking the buttons on the left
            side, which link to my social media profiles and project showcase.
            If you’re interested, you can also view my CV, where I’ve detailed
            my work experience and current skills.
          </p>
          <p>
            It was a pleasure sharing a bit about myself with you! :) I hope you
            enjoyed my little story. Hit these little LinkedIn or Email icons in
            the footer section to stay connected 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
