import React, { useState, useEffect } from "react";
import { fetchData } from "../../utils/apiUtil";
import UpButton from "../../components/UpButton";
import Loading from "../waiting/Loading";
import Unavailable from "../exceptions/Unavailable";
import config from "../../config/AppConfig";
import PageWrapper from "../../utils/SmoothPage";
import AlbumPreviewCard from "../../components/AlbumPreviewCard";

const AlbumPreview = ({ isDarkMode, t }) => {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);

  useEffect(() => {
    const fetchAlbums = async () => {
      setLoading(true);
      setShowLoading(false);

      const delayTimeout = setTimeout(() => {
        setShowLoading(true);
      }, config.variables.loadingTimeout);

      setFetchError(false);

      try {
        const fetchedAlbums = await fetchData(
          config.api.personal.endpoints.albums
        );

        setAlbums(fetchedAlbums);
      } catch (error) {
        setFetchError(true);
        console.error("Error fetching albums:", error);
      } finally {
        clearTimeout(delayTimeout);
        setShowLoading(false);
        setLoading(false);
      }
    };

    fetchAlbums();
  }, []);

  useEffect(() => {
    const delayTimeout = setTimeout(() => {
      setShowEmpty(true);
    }, config.variables.loadingTimeout);
    return () => {
      clearTimeout(delayTimeout);
    };
  }, []);

  if (loading && showLoading) {
    return <Loading t={t} />;
  }

  if (fetchError) {
    return <Unavailable t={t} />;
  }

  if (albums.length === 0 && showEmpty) {
    return (
      <div className='container px-4 py-5' id='hanging-icons'>
        <UpButton isDarkMode={isDarkMode} />
        <h2 className='pb-2 border-bottom'>{t("albums_page.title")}</h2>
        <PageWrapper>
          <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>{t("albums_page.empty.title")}</h1>
            <p>{t("albums_page.empty.description")}</p>
          </div>
        </PageWrapper>
      </div>
    );
  }

  const PageContent = (
    <PageWrapper>
      <div className='row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-2'>
        {albums.map((album, index) => (
          <AlbumPreviewCard key={index} album={album} isDarkMode={isDarkMode} />
        ))}
      </div>
    </PageWrapper>
  );

  return (
    <div className='container px-4 py-5' id='hanging-icons'>
      <UpButton isDarkMode={isDarkMode} />
      <h2 className='pb-2 border-bottom'>{t("albums_page.title")}</h2>
      {loading ? "" : PageContent}
    </div>
  );
};

export default AlbumPreview;
