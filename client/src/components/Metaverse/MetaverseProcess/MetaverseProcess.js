import { useInView, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./MetaverseProcess.scss";

function MetaverseProcess() {
  const ref = useRef();
  const inView = useInView(ref, { amount: 0.4 });
  const iconAnimate = useAnimation();
  useEffect(() => {
    iconAnimate.start({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    });
  }, [inView]);

  // const parentsVariants = {
  //   start: {
  //     opacity: 0,
  //   },
  //   end: {
  //     opacity: 1,
  //     transition: {
  //       delay: 2,
  //       duration: 1.5,
  //       delayChildren: 1.5,
  //       staggerChildren: 0.5,
  //     },
  //   },
  // };

  const variants = {
    start: {
      opacity: 0,
      y: 20,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="metaverseProcess">
      <div className="title">process</div>
      <div className="iconArea" ref={ref}>
        <div className="dashBox"></div>
        <div className="iconCircles">
          <img
            src={require("../../../assets/metaverse/x295.png")}
            alt="프로세스 아이콘"
          />
        </div>
        <div className="iconCircles">
          <img
            src={require("../../../assets/metaverse/x297.png")}
            alt="프로세스 아이콘"
          />
        </div>
        <div className="iconCircles">
          <img
            src={require("../../../assets/metaverse/x299.png")}
            alt="프로세스 아이콘"
          />
        </div>
        <div className="iconCircles">
          <img
            src={require("../../../assets/metaverse/x301.png")}
            alt="프로세스 아이콘"
          />
        </div>
      </div>
      <motion.div
        className="stepLine"
        initial={{ opacity: 1 }}
        animate={iconAnimate}
      >
        <motion.div
          className="stepBox"
          initial={{ opacity: 0, y: 20 }}
          animate={iconAnimate}
        >
          <div className="step">step 01</div>
          <div className="title">고객사 상담 미팅</div>
        </motion.div>
        <motion.div
          className="stepBox"
          initial={{ opacity: 0, y: 20 }}
          animate={iconAnimate}
        >
          <div className="step">step 02</div>
          <div className="title">월드맵 기획 작업</div>
        </motion.div>
        <motion.div
          className="stepBox"
          initial={{ opacity: 0, y: 20 }}
          animate={iconAnimate}
        >
          <div className="step">step 03</div>
          <div className="title">{"모델링 및 앱 상호작용 개발"}</div>
        </motion.div>
        <motion.div
          className="stepBox"
          initial={{ opacity: 0, y: 20 }}
          animate={iconAnimate}
        >
          <div className="step">step 04</div>
          <div className="title">제작 완성</div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default MetaverseProcess;
