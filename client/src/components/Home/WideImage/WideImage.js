import { useRef } from "react";
import "./WideImage.scss";
import { useScroll, useTransform, motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

function WideImage() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", isMobile ? "end 0.4" : "end 0.7"],
  });
  const screenSize = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);
  return (
    <section className="WideImageContainer" ref={ref}>
      <motion.div
        className="wideImage"
        style={{ width: screenSize }}
      ></motion.div>
    </section>
  );
}

export default WideImage;
