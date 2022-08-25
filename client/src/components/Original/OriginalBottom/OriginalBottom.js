import React from "react";
import gif from "../../../assets/original/bottom.gif";
import "./OriginalBottom.scss";
const OriginalBottom = () => {
  return (
    <section className="originalBottom">
      <img src={gif} alt="new media gif" />
      <span>
        뉴미디어 콘텐츠 제작 <br /> <span className="filled">루와</span>와 함께 하세요.
      </span>
    </section>
  );
};

export default OriginalBottom;
