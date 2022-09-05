import "./MetaverseQR.scss";
import { useMediaQuery } from "react-responsive";
import React from "react";
import qrImg from "../../../assets/metaverse/qrImg.png";
import qrCode from "../../../assets/metaverse/x14.png";
import plus from "../../../assets/home/x65.png";
const MetaverseQR = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
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
        {isMobile ? (
          <div className="moreInfo">
            더 알아보기 <img src={plus} alt="more information" />
          </div>
        ) : (
          <div className="qrCode">
            <img src={qrCode} alt="QR code" />
            <p>@_roowa</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MetaverseQR;
