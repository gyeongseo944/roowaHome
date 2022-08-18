import { useRef } from "react";
import "./WideImage.scss";
import { useScroll, useTransform, motion } from "framer-motion";

function WideImage() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.7", "end 0.7"],
  });
  const screenSize = useTransform(scrollYProgress, [0, 1], [1000, 1920]);
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
