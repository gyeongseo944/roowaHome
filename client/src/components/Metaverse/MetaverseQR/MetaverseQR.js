import "./MetaverseQR.scss";

import React from "react";
import qrImg from "../../../assets/metaverse/qrImg.png";
import qrCode from "../../../assets/metaverse/x14.png";
const MetaverseQR = () => {
  return (
    <section className="metaverseQr">
      <div className="qrContainer">
        <div className="qrTitle">
          <img src={qrImg} alt="avatar" />
        </div>
        <div className="qrCode"></div>
      </div>
    </section>
  );
};

export default MetaverseQR;
