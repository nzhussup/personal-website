import React from "react";

const NotFound = ({ t }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t("exceptions.not_found.title")}</h1>
      <p>{t("exceptions.not_found.description")}</p>
    </div>
  );
};

export default NotFound;
