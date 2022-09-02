import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./CompanyBanner.scss";
function CompanyBanner() {
  const ref = useRef();
  const [state, setState] = useState(false);
  const [height, setHeight] = useState(0);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const { scrollY } = useScroll();

  /**
   * 스크롤 이동 function
   * @param {number} y 스크롤 목적지
   * @param {number} duration 이동 속도
   */
  const durationScrollTo = (y, duration = 1000) => {
    const stepY = (y - window.scrollY) / duration;
    const currentY = window.scrollY;
    const startTime = new Date().getTime();
    const scrollInterval = setInterval(() => {
      const now = new Date().getTime() - startTime;
      window.scrollTo({ top: currentY + stepY * now });
      if (duration <= now) {
        clearInterval(scrollInterval);
      }
    }, 1);
  };

  /** 스크롤 값이 0이 아니면 state값 변환. */
  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.current) {
        setState(true);
      } else {
        setState(false);
      }
    });
  }, [scrollY]);

  /** 스크롤 최상단으로 */
  useEffect(() => {
    setHeight(ref.current.offsetHeight);
    window.scrollTo({ top: 0 });
  }, []);

  /** absBtn 클릭 시 스크롤 이동 */
  const onClick = () => {
    durationScrollTo(height, 500);
  };

  /***** motion variants *****/
  // wrapper 생성 및 opacity
  const wrapperVariants = {
    initial: {
      opacity: 0,
    },
    start: {
      opacity: 0.7,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: { opacity: 0 },
  };
  // 스크롤 다운 버튼 생성 및 삭제 animation
  const absBtnVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opaity: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  };
  //스크롤 다운 버튼 움직임
  const absBtnMoving = {
    initial: {
      y: 0,
      translateX: "-50%",
    },
    animate: {
      y: -20,
      transition: {
        repeat: Infinity,
        duration: 0.7,
        repeatType: "reverse",
      },
    },
  };

  return (
    <>
      <section className="companyBanner">
        <div className="container" ref={ref}>
          <AnimatePresence>
            {state && (
              <motion.div
                className="wrapper"
                variants={wrapperVariants}
                initial="initial"
                animate="start"
                exit="exit"
              ></motion.div>
            )}
          </AnimatePresence>
          <div className="box">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.3 },
              }}
              className="title"
            >
              {"we create emotional content"}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.7 },
              }}
              className="sub"
            >
              마음을 움직이는 콘텐츠를 만듭니다.
            </motion.div>
            <AnimatePresence>
              {!state && (
                <motion.div
                  className="moveBox"
                  variants={absBtnMoving}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  <motion.div
                    className="absBtn"
                    onClick={onClick}
                    variants={absBtnVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <img
                      src={require("../../../assets/company/x59.png")}
                      alt="스크롤 다운"
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
            {!isMobile && (
              <div className="naviBox">
                <Link to="/">
                  <img
                    src={require("../../../assets/navBtns/x54f07279ca.png")}
                    alt="home button"
                    className="homeBtn"
                  />
                </Link>
                <img
                  className="chev"
                  src={require("../../../assets/navBtns/x59.png")}
                  alt="Chevron"
                />
                <span className="naviBtn">company</span>
                <img
                  className="chev"
                  src={require("../../../assets/navBtns/x59.png")}
                  alt="Chevron"
                />
                <span className="naviBtn">회사소개</span>
              </div>
            )}
          </div>
        </div>
      </section>
      <div id="companyBannerDivider"></div>
    </>
  );
}

export default CompanyBanner;
