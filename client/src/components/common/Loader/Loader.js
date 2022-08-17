import React from "react";
import loader from "../../../assets/loader.gif";

const Loader = () => {
  return (
    <div className="loaderContainer" style={{ width: "100%", height: "100vh" }}>
      <img
        src={loader}
        alt="loading"
        style={{
          width: "170px",
          height: "160px",
          display: "block",
          margin: "0 auto",
          marginTop: "30vh",
        }}
      />
    </div>
  );
};

export default Loader;
