import React from "react";

const FetchError = ({ t }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{t("exceptions.internal_server_error.title")}</h1>
      <p>{t("exceptions.internal_server_error.description")}</p>
    </div>
  );
};

export default FetchError;
