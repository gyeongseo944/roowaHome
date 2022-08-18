import React, { useEffect } from "react";
import "./MainVideo.scss";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";

const MainVideo = () => {
  return (
    <div className="videoContainer">
      <div className="videoTextContainer">
        <AnimatedLetters parentClass="firstTextBox" strArray={["세", "계", "에", "space", "이", "야", "기", "를", "space", "담", "다", "."]} />
        <AnimatedLetters
          parentClass="secondTextBox"
          strArray={["S", "T", "O", "R", "Y", "space", "I", "N", "T", "O", "space", "T", "H", "E", "space", "W", "O", "R", "L", "D"]}
        />
      </div>
    </div>
  );
};

export default MainVideo;
