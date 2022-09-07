import "./MainPoster.scss";
import mainPoster_mono from "../../../assets/home/homeBottom/mainPosterBlack.jpg";
import mainPoster from "../../../assets/home/homeBottom/mainPoster.png";
import { useRef, useState, useEffect } from "react";
import { motion, useAnimationControls, useInView } from "framer-motion";

function MainPoster() {
  const [ScannerOn, setScannerOn] = useState(false);
  const scannerRef = useRef();
  const imgRef = useRef();
  const isInView = useInView(scannerRef);
  const heightControls = useAnimationControls();
  useEffect(() => {
    if (isInView && !ScannerOn) {
      setScannerOn(true);
      if (imgRef.current.offsetWidth < 400) {
        heightControls.start({
          height: imgRef.current.offsetHeight + 20,
          transition: { delay: 0, duration: 4 },
        });
      } else {
        heightControls.start({
          height: imgRef.current.offsetHeight + 40,
          transition: { delay: 0, duration: 5 },
        });
      }
    }
  }, [isInView]);
  const scannerResize = () => {
    if (imgRef.current.offsetWidth < 400) {
      heightControls.start({
        height: imgRef.current.offsetHeight + 20,
        transition: { delay: 0, duration: 1 },
      });
    } else {
      heightControls.start({
        height: imgRef.current.offsetHeight + 40,
        transition: { delay: 0, duration: 1 },
      });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (imgRef.current) {
        scannerResize();
      }
    });
    return window.removeEventListener("resize", () => {
      scannerResize();
    });
  }, []);
  return (
    <section className="mainPoster">
      <div className="posterContainer">
        <img className="mainPosterMono" src={mainPoster_mono} alt="포럼 포스터" />
        <motion.div className="posterScanner" ref={scannerRef} animate={heightControls}>
          <img className="mainPosterColored" src={mainPoster} alt="Main poster" ref={imgRef} />
        </motion.div>
      </div>
    </section>
  );
}

export default MainPoster;
