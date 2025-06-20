import React, { useState, useEffect } from "react";
import nurikImage from "../assets/nurik.jpeg";
import skiing from "../assets/nurik-skiing.jpeg";
import forest from "../assets/forest.jpeg";
import linkPhoto from "../assets/icons/link.svg";
import { Link } from "react-router-dom";
import config from "../config/AppConfig";
import UpButton from "../components/UpButton";
import PageWrapper from "../utils/SmoothPage";
import AIGenButton from "../components/AIGenButton";
import "../components/AIGenButton.css";
import { fetchSummary } from "../utils/apiUtil";

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

  const [fullSummary, setFullSummary] = useState("");
  const [generatedText, setGeneratedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSummaryLoaded, setIsSummaryLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [hasRequestedGeneration, setHasRequestedGeneration] = useState(false);

  useEffect(() => {
    const loadSummary = async () => {
      try {
        const summary = await fetchSummary();
        setFullSummary(summary);
      } catch (error) {
        console.error("Failed to fetch summary:", error);
        setFullSummary("Currently, no summary is available... :(");
      } finally {
        setIsSummaryLoaded(true);
        setLoading(false);
      }
    };

    loadSummary();
  }, []);

  const startGenerating = () => {
    if (!isSummaryLoaded) {
      setHasRequestedGeneration(true); // Will generate after summary loads
    } else {
      setHasRequestedGeneration(false);
      setGeneratedText("");
      setCurrentIndex(0);
      setIsGenerating(true);
    }
  };

  // Automatically start generating once loading finishes, if user requested it:
  useEffect(() => {
    if (isSummaryLoaded && hasRequestedGeneration) {
      setHasRequestedGeneration(false);
      setGeneratedText("");
      setCurrentIndex(0);
      setIsGenerating(true);
    }
  }, [isSummaryLoaded, hasRequestedGeneration]);

  useEffect(() => {
    if (!isGenerating) return;

    let index = 0;

    const interval = setInterval(() => {
      index += 1; // increase by 10 chars per interval
      if (index > fullSummary.length) index = fullSummary.length;

      setGeneratedText(fullSummary.slice(0, index));
      setCurrentIndex(index);

      if (index >= fullSummary.length) {
        clearInterval(interval);
        setIsGenerating(false);
      }
    }, 10); // slower interval for visible typing

    return () => clearInterval(interval);
  }, [isGenerating]);

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
            <div className='d-flex align-items-center justify-content-between flex-wrap mb-3'>
              <h2 className='mb-0'>{t("about_me_page.about_me.title")}</h2>
              <div
                className='ms-3 d-flex align-items-center'
                style={{ marginTop: "-15px" }}
              >
                <AIGenButton
                  isDarkMode={isDarkMode}
                  onStartGenerating={startGenerating}
                />
              </div>
            </div>

            {hasRequestedGeneration && !isSummaryLoaded ? (
              <div className='text-center my-3'>
                <div className='custom-spinner'></div>
              </div>
            ) : (
              <>{/* Existing generatedText JSX */}</>
            )}

            {generatedText && (
              <div
                className='p-3 rounded mb-3'
                style={{ backgroundColor: "transparent" }}
              >
                <p
                  className='mb-0'
                  style={{ fontFamily: "Courier New, monospace" }}
                >
                  {/* Static part is everything except last 10 chars if generating */}
                  <span>
                    {isGenerating
                      ? generatedText.slice(0, currentIndex - 10)
                      : generatedText}
                  </span>

                  {/* Shiny part only when generating */}
                  {isGenerating && (
                    <span className={`summary-box`}>
                      {generatedText.slice(currentIndex - 10, currentIndex)}
                    </span>
                  )}
                </p>
              </div>
            )}

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
          <div className='col-md-7'>
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
                <Link
                  to='/albums'
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
                        {t("about_me_page.links.listgroup_elements.alb.title")}
                      </h6>
                      <p className='mb-0 opacity-75'>
                        {t(
                          "about_me_page.links.listgroup_elements.alb.description"
                        )}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Links text */}
          <div className='col-md-5'>
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
