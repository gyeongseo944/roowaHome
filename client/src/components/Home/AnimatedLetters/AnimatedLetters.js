import React, { useEffect, useRef } from "react";
import "./AnimatedLetters.scss";
import { useMediaQuery } from "react-responsive";
const AnimatedLetters = ({ parentClass, strArray, changeIdx }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  const parentRef = useRef();
  const changeRef = useRef([]);
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

  const Remove = (child, id) => {
    if (id === 3) {
      child.classList.remove("state-3");
      setTimeout(() => {
        Remove(child, id - 1);
      }, 100);
    } else if (id === 2) {
      child.classList.remove("state-2");
      setTimeout(() => {
        Remove(child, id - 1);
      }, 100);
    } else if (id === 1) {
      child.classList.remove("state-1");
      setTimeout(() => {
        Remove(child, id - 1);
      }, 100);
    } else if (id === 0) {
      if (child.innerText === "에") {
        child.innerText = "의";
        setTimeout(fristStages.bind(null, child), 400);
      } else if (child.innerText === "I" || child.innerText === "O") {
        child.innerText = " ";
      } else if (child.innerText === "N") {
        child.innerText = "O";
        setTimeout(fristStages.bind(null, child), 400);
      } else if (child.innerText === "T") {
        child.innerText = "F";
        setTimeout(fristStages.bind(null, child), 400);
      }
    }
  };

  const animationLetters = () => {
    const text = parentRef.current;
    let state = [];
    for (let i = 0, j = strArray.length; i < j; i++) {
      text.children[i].classList.remove("state-1", "state-2", "state-3");
      state[i] = i;
    }
    let shuffled = shuffle(state);
    for (let i = 0, j = shuffled.length; i < j; i++) {
      let child = text.children[shuffled[i]];
      let classes = child.classList;
      let state1Time = Math.round(Math.random() * (2000 - 300)) + 700;
      if (classes.contains("textAnimation")) {
        setTimeout(fristStages.bind(null, child), state1Time);
      }
    }
  };

  useEffect(() => {
    animationLetters();
    for (let i of changeRef.current) {
      let state1Time = Math.round(Math.random() * (1000 - 300)) + 2800;
      setTimeout(() => {
        Remove(i, 3);
      }, state1Time);
    }
  }, []);

  return (
    <div className={isMobile ? `${parentClass}Mobile` : `${parentClass}`} ref={parentRef}>
      {strArray &&
        strArray.map((char, id) => (
          <div
            className={char == "space" ? (isMobile ? "spaceMobile" : "space") : isMobile ? `textAnimation textMobile ${parentClass}Text` : `textAnimation`}
            key={parentClass + id}
            ref={
              changeIdx && changeIdx.includes(id)
                ? (el) => {
                    changeRef.current.push(el);
                  }
                : null
            }
          >
            {char == "space" ? "" : char}
          </div>
        ))}
      <p></p>
    </div>
  );
};

export default AnimatedLetters;
