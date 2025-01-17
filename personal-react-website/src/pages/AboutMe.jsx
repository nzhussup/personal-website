import React from "react";
import nurikImage from "../assets/nurik.jpeg";
import skiing from "../assets/nurik-skiing.jpeg";
import forest from "../assets/forest.jpeg";
import linkPhoto from "../assets/icons/link.svg";
import { Link } from "react-router-dom";
import config from "../config/AppConfig";
import UpButton from "../components/UpButton";
import PageWrapper from "../utils/SmoothPage";

const AboutMe = ({ isDarkMode, t }) => {
  const birthdate = new Date("2002-09-03");
  const today = new Date();

  let age = today.getFullYear() - birthdate.getFullYear();
  const monthDifference = today.getMonth() - birthdate.getMonth();
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthdate.getDate())
  ) {
    age--;
  }

  return (
    <PageWrapper>
      <div className='container my-5'>
        <UpButton isDarkMode={isDarkMode} />
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
            <h3 className='font-weight-bold'>{config.about_me.name}</h3>
            <p className='text-muted'>{config.about_me.position}</p>
            <p className='text-muted'>{config.about_me.current_position}</p>
          </div>

          {/* About Me Text */}
          <div className='col-md-8'>
            <h2>{t("about_me_page.about_me.title")}</h2>
            <p>{t("about_me_page.about_me.yep_thats_me")}</p>
            <p>{t("about_me_page.about_me.text1", { age })}</p>
            <p>{t("about_me_page.about_me.text2")}</p>
          </div>
        </div>

        {/* Row 2:  Hobbies */}
        <div className='row mb-4'>
          {/* Hobbies Section */}
          <div className='col-md-8'>
            <h4>{t("about_me_page.hobbies.title")}</h4>
            <p>{t("about_me_page.hobbies.text1")}</p>
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
                    }`}
                  />
                  <div className='d-flex gap-2 w-100 justify-content-between'>
                    <div>
                      <h6 className='mb-0'>
                        {t("about_me_page.links.listgroup_elements.sm.title")}
                      </h6>
                      <p className='mb-0 opacity-75'>
                        {t(
                          "about_me_page.links.listgroup_elements.sm.description"
                        )}
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
                    }`}
                  />
                  <div className='d-flex gap-2 w-100 justify-content-between'>
                    <div>
                      <h6 className='mb-0'>
                        {t("about_me_page.links.listgroup_elements.proj.title")}
                      </h6>
                      <p className='mb-0 opacity-75'>
                        {t(
                          "about_me_page.links.listgroup_elements.proj.description"
                        )}
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
                    }`}
                  />
                  <div className='d-flex gap-2 w-100 justify-content-between'>
                    <div>
                      <h6 className='mb-0'>
                        {t("about_me_page.links.listgroup_elements.cv.title")}
                      </h6>
                      <p className='mb-0 opacity-75'>
                        {t(
                          "about_me_page.links.listgroup_elements.cv.description"
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Links text */}
          <div className='col-md-6'>
            <h4>{t("about_me_page.links.title")}</h4>
            <p>{t("about_me_page.links.text1")}</p>
            <p>{t("about_me_page.links.text2")}</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutMe;
