import { useAnimation, motion } from "framer-motion";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Banner.scss";

function Banner({ title, subtitle, src, navText }) {
  const titleAnimation = useAnimation();
  const subtitleAnimation = useAnimation();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useEffect(() => {
    titleAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    });
    subtitleAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 },
    });
  }, []);

  return (
    <section
      className="banner"
      style={
        src
          ? {
              backgroundImage: `url(${src})`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          : { opacity: 0.8 }
      }
    >
      <div className="bannerContainer">
        <motion.h2
          className="bannerRoowa"
          animate={titleAnimation}
          initial={{ opacity: 0, y: 20 }}
        >
          {title}
        </motion.h2>
        <motion.h1
          className="bannerRoowaTitle"
          animate={subtitleAnimation}
          initial={{ opacity: 0, y: 20 }}
        >
          {subtitle}
        </motion.h1>
        {!isMobile && (
          <div className="naviBox">
            <Link to="/">
              <img
                src={require("../../assets/navBtns/x54f07279ca.png")}
                alt="home button"
                className="homeBtn"
              />
            </Link>
            {navText[0] && (
              <>
                <img
                  className="chev"
                  src={require("../../assets/navBtns/x59.png")}
                  alt="Chevron"
                />
                <span className="naviBtn">{navText[0]}</span>
              </>
            )}
            {navText[1] && (
              <>
                <img
                  className="chev"
                  src={require("../../assets/navBtns/x59.png")}
                  alt="Chevron"
                />
                <span className="naviBtn">{navText[1]}</span>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

Banner.defaultProps = {
  title: "?????? ????????????",
  subtitle: "?????? ???????????? ????????? ????????? ??????\n?????? ??????????????????.",
  navText: ["contact", "?????? ????????????"],
};

export default Banner;
