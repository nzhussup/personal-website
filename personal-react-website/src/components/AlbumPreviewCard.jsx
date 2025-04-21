import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const AlbumPreviewCard = ({ album, isDarkMode }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/albums/${album.id}`);
  };

  return (
    <div className='col'>
      <div
        className={`d-flex flex-column h-100 rounded-4 border-0 shadow-sm p-3 transition card-hover ${
          isDarkMode ? "bg-dark text-white" : "bg-white"
        }`}
        style={{
          transition: "transform 0.2s ease, box-shadow 0.2s ease",
        }}
      >
        <div className='d-flex flex-column flex-grow-1'>
          {/* SVG Album Icon */}
          <div className='mb-3 text-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='72'
              height='72'
              fill='currentColor'
              className='bi bi-images'
              viewBox='0 0 16 16'
            >
              <path
                d='M4.502 1a1 1 0 0 0-.995.9L3.507 2H2a2 2 0 0 0-2 2v8a2 
  2 0 0 0 2 2h10a2 2 0 0 0 2-2v-.09a3.001 3.001 0 0 0 
  2-2.91V4a2 2 0 0 0-2-2h-1.5a1 1 0 0 0-.993-.9L11.502 
  1h-7zM4.507 2h7l.001.1a1 1 0 0 0 .993.9H14a1 1 0 0 1 1 
  1v3.09a3.001 3.001 0 0 0-2 .497V4a1 1 0 0 0-1-1H3.507l1-.9zm1.493 
  4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM2 5.5A.5.5 0 0 1 
  2.5 5h4a.5.5 0 0 1 .4.8l-1.5 2a.5.5 0 0 1-.8 0L2.6 5.8a.5.5 
  0 0 1-.1-.3zM2 6v6h10a1 1 0 0 0 1-1V6H2z'
              />
            </svg>
          </div>
          {/* Text Content */}
          <h5 className='fw-semibold mb-2'>
            {album.title} {album.date ? `(${album.date})` : ""}
          </h5>
          <p
            className='text-secondary small mb-2'
            style={{ opacity: 0.9, minHeight: "3em" }}
          >
            {album.desc || <span className='invisible'>No description</span>}
          </p>
          <p className='text-muted small mb-3' style={{ minHeight: "1.5em" }}>
            Image count: {album.image_count}
          </p>
          {/* Button pinned to bottom */}
          <div className='mt-auto'>
            <button
              onClick={handleClick}
              className={`btn ${
                isDarkMode ? "btn-outline-light" : "btn-dark"
              } w-100 rounded-pill`}
            >
              {t("albums_page.open_button")}
            </button>
          </div>
        </div>
      </div>

      {/* Hover effect */}
      <style>{`
        .card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.08);
        }
      `}</style>
    </div>
  );
};

export default AlbumPreviewCard;
