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
        className={`d-flex flex-column h-100 rounded-4 border transition card-hover ${
          isDarkMode
            ? "bg-dark text-white border-light"
            : "bg-white border-light"
        }`}
        style={{
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          boxShadow: isDarkMode
            ? "0 6px 16px rgba(0, 0, 0, 0.4)"
            : "0 6px 20px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          overflow: "hidden",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        onClick={handleClick}
      >
        {/* Top Image or SVG */}
        <div
          style={{
            width: "100%",
            height: "180px",
            overflow: "hidden",
          }}
        >
          {album.preview_image ? (
            <img
              src={album.preview_image}
              alt={album.title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <div
              className='d-flex align-items-center justify-content-center'
              style={{
                width: "100%",
                height: "100%",
                backgroundColor: isDarkMode ? "#2c2c2c" : "#eaeaea",
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                fill='currentColor'
                className='bi bi-images text-secondary'
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
                ;
              </svg>
            </div>
          )}
        </div>

        {/* Content */}
        <div className='p-3 d-flex flex-column flex-grow-1'>
          <h5 className='fw-semibold mb-1' style={{ fontSize: "1.1rem" }}>
            {album.title} {album.date ? `(${album.date})` : ""}
          </h5>
          <p
            className='text-secondary small mb-2'
            style={{ opacity: 0.85, minHeight: "3em" }}
          >
            {album.desc || <span className='invisible'>No description</span>}
          </p>
          <p
            className='text-muted small mt-auto'
            style={{ minHeight: "1.5em" }}
          >
            📸 image count: {album.image_count}
          </p>
        </div>
      </div>

      {/* Hover effect */}
      <style>{`
        .card-hover:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12);
        }
      `}</style>
    </div>
  );
};

export default AlbumPreviewCard;
