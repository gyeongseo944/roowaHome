import "./MainPoster.scss";
import mainPoster_mono from "../../../assets/home/homeBottom/mainPosterBlack.jpg";
import mainPoster from "../../../assets/home/homeBottom/mainPoster.png";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimationControls, useInView, useScroll } from "framer-motion";

function MainPoster() {
  const [ScannerOn, setScannerOn] = useState(false);
  const scannerRef = useRef();
  const { scrollY } = useScroll();
  const isInView = useInView(scannerRef);
  const heightControls = useAnimationControls();

  // useEffect(() => {
  //   if (isInView) {
  //     let last = scrollY.current;
  //     scrollY.onChange((current) => {
  //       if (current > last && scannerRef.current.clientHeight < 1510) {
  //         last = current;
  //         let test = scannerRef.current.clientHeight + 1;
  //         scannerRef.current.style.height = `${test + 5}px`;
  //       }
  //     });
  //   }
  // }, [isInView]);
  useEffect(() => {
    if (isInView && !ScannerOn) {
      setScannerOn(true);
      heightControls.start({
        height: 1520,
        transition: { delay: 0.3, duration: 5 },
      });
    }
  }, [isInView]);

  return (
    <section className="mainPoster">
      <div className="posterContainer">
        <img className="mainPosterMono" src={mainPoster_mono} alt="포럼 포스터" />
        <motion.div className="posterScanner" ref={scannerRef} animate={heightControls}>
          <img className="mainPosterColored" src={mainPoster} alt="Main poster" />
        </motion.div>
      </div>
    </section>
  );
}

export default MainPoster;
