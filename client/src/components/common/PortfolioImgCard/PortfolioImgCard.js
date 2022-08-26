import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";
import "./PortfolioImgCard.scss";

const PortfolioImgCard = ({ title, contents, img, link }) => {
  const hideDirection = [{ x: 1000 }, { x: -1000 }, { y: 1000 }, { y: -1000 }];
  const firstRandom = hideDirection[Math.floor(Math.random() * hideDirection.length)];
  const secoundRandom = hideDirection[Math.floor(Math.random() * hideDirection.length)];

  const ref = useRef();
  const imageRef = useRef();

  const isInView = useInView(imageRef);
  const [Height, setHeight] = useState(0);
  const hideControls = useAnimationControls();
  const imgControls = useAnimationControls();

  const sequence = async () => {
    await hideControls.start({
      x: 0,
      y: 0,
      transition: { delay: 0.3, duration: 0.6 },
    });

    await hideControls.start({
      x: secoundRandom.x ? secoundRandom.x : 0,
      y: secoundRandom.y ? secoundRandom.y : 0,
      transition: { delay: 0.2, duration: 0.6 },
    });
    return await hideControls.start({
      display: "none",
    });
  };
  const imageAppear = () => {
    imgControls.start({
      opacity: 1,
      transition: { delay: 0.4, duration: 0.1 },
    });
  };
  useEffect(() => {
    setTimeout(() => {
      setHeight(ref.current.clientHeight);
    }, 100);
  }, []);
  useEffect(() => {
    if (isInView) {
      imageAppear();
      sequence();
    }
  }, [isInView]);

  return (
    <div className="imgItem" style={link ? { height: "600px" } : { height: "auto" }}>
      <div className="imgContainer" ref={imageRef}>
        {link ? (
          <a href={link} target="_blank" rel="noreferrer noopener">
            <motion.div className="hideImg" initial={firstRandom} animate={hideControls} style={Height > 0 ? { height: Height } : null} />
            <motion.div className="dimmedImg" style={Height > 0 ? { height: Height } : null}>
              +
            </motion.div>
            <motion.img src={img} alt="portfolio image" ref={ref} animate={imgControls} />
          </a>
        ) : (
          <>
            <motion.div className="hideImg" initial={firstRandom} animate={hideControls} style={Height > 0 ? { height: Height } : null} />
            <motion.div className="dimmedImg" style={Height > 0 ? { height: Height } : null}>
              +
            </motion.div>
            <motion.img src={img} alt="portfolio image" ref={ref} animate={imgControls} />
          </>
        )}
      </div>
      <h1>{title}</h1>
      <p>{contents}</p>
    </div>
  );
};

export default PortfolioImgCard;
