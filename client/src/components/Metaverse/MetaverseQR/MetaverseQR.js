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
          <h1>
            <span className="filled">메타버스</span>
            <span className="empty">시대의 여행,</span>
            <br />
            <span className="filled">루와</span>
            <span className="empty">와 함께하세요.</span>
          </h1>
        </div>
        <div className="qrCode">
          <img src={qrCode} alt="QR code" />
          <p>@_roowa</p>
        </div>
      </div>
    </section>
  );
};

export default MetaverseQR;
