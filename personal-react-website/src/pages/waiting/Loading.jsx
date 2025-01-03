import React from "react";

const Loading = ({ t }) => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <div
        className='spinner-border'
        role='status'
        style={{ width: "3rem", height: "3rem" }}
      >
        <span className='sr-only'></span>
      </div>
      <h2 style={{ marginTop: "20px" }}>{t("common.loading")}</h2>
      <p>{t("common.please_wait")}</p>
    </div>
  );
};

export default Loading;
