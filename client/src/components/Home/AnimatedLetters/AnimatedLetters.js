import React, { useEffect } from "react";
import "./AnimatedLetters.scss";

const AnimatedLetters = ({ parentClass, strArray }) => {
  const shuffle = (array) => {
    let currentIndex = array.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };
  const fristStages = (child) => {
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3");
    } else if (child.classList.contains("state-1")) {
      child.classList.add("state-2");
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1");
      setTimeout(secondStages.bind(null, child), 100);
    }
  };
  const secondStages = (child) => {
    if (child.classList.contains("state-1")) {
      child.classList.add("state-2");
      setTimeout(thirdStages.bind(null, child), 100);
    } else if (!child.classList.contains("state-1")) {
      child.classList.add("state-1");
    }
  };
  const thirdStages = (child) => {
    if (child.classList.contains("state-2")) {
      child.classList.add("state-3");
    }
  };
  const animationLetters = (className) => {
    const text = document.getElementsByClassName(className)[0];
    let state = [];
    for (let i = 0, j = strArray.length; i < j; i++) {
      text.children[i].classList.remove("state-1", "state-2", "state-3");
      state[i] = i;
    }
    let shuffled = shuffle(state);
    for (let i = 0, j = shuffled.length; i < j; i++) {
      let child = text.children[shuffled[i]];
      let classes = child.classList;
      let state1Time = Math.round(Math.random() * (2000 - 300)) + 500;
      if (classes.contains("textAnimation")) {
        setTimeout(fristStages.bind(null, child), state1Time);
      }
    }
  };

  useEffect(() => {
    animationLetters(parentClass);
  }, []);

  return (
    <div className={`${parentClass} textBox`}>
      {strArray &&
        strArray.map((char, id) => (
          <div className={char == "space" ? "space" : "textAnimation"} key={parentClass + id}>
            {char == "space" ? "" : char}
          </div>
        ))}
      <p></p>
    </div>
  );
};

export default AnimatedLetters;
