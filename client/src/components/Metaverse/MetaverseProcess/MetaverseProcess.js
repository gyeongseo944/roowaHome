import { useInView, motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import "./MetaverseProcess.scss";

function MetaverseProcess() {
  const ref = useRef();
  const inView = useInView(ref, { amount: "all", once: true });
  const iconAnimate = useAnimation();
  useEffect(() => {
    if (inView) {
      iconAnimate.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.5 - 0.5,
          duration: 1,
        },
      }));
    }
  }, [inView]);

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
      <div className="stepLine">
        <motion.div
          className="stepBox"
          initial={{ opacity: 0, y: 20 }}
          animate={iconAnimate}
          custom={1}
        >
          <div className="step">step 01</div>
          <div className="title">고객사 상담 미팅</div>
        </motion.div>
        <motion.div
          className="stepBox"
          initial={{ opacity: 0, y: 20 }}
          animate={iconAnimate}
          custom={2}
        >
          <div className="step">step 02</div>
          <div className="title">월드맵 기획 작업</div>
        </motion.div>
        <motion.div
          className="stepBox"
          initial={{ opacity: 0, y: 20 }}
          animate={iconAnimate}
          custom={3}
        >
          <div className="step">step 03</div>
          <div className="title">{"모델링 및 앱 상호작용 개발"}</div>
        </motion.div>
        <motion.div
          className="stepBox"
          initial={{ opacity: 0, y: 20 }}
          animate={iconAnimate}
          custom={4}
        >
          <div className="step">step 04</div>
          <div className="title">제작 완성</div>
        </motion.div>
      </div>
    </section>
  );
}

export default MetaverseProcess;
