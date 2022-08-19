import React, { useEffect } from "react";
import "./MainVideo.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import plus from "../../../assets/home/x65.png";
import mainVideo from "../../../assets/home/temp1.mp4";

const MainVideo = () => {
  return (
    <div className="videoContainer">
      <video src={mainVideo} type="video/mp4" autoPlay muted loop />
      <div className="videoTextContainer">
        <AnimatedLetters parentClass="firstTextBox" strArray={["세", "계", "에", "space", "이", "야", "기", "를", "space", "담", "다", "."]} changeIdx={[2]} />
        <AnimatedLetters
          parentClass="secondTextBox"
          strArray={["S", "T", "O", "R", "Y", "space", "I", "N", "T", "O", "space", "T", "H", "E", "space", "W", "O", "R", "L", "D"]}
          changeIdx={[6, 7, 8, 9]}
        />
        <div className="moreInfo">
          소개서 다운로드 <img src={plus} />
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
