import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "./Header.scss";
import { useEffect, useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [showNavigate, setShowNavigate] = useState(false);
  const navAnimation = useAnimation();
  // const ulAnimation = useAnimation();
  const listAnimation = useAnimation();
  const blurAnimation = useAnimation();
  const metaverseMatch = useMatch("/metaverse/*");
  const contactMatch = useMatch("/contact/*");
  const payMatch = useMatch("/pay/*");
  const roowaMatch = useMatch("/roowa/*");
  const articleMatch = useMatch("/article/*");
  const recruitMatch = useMatch("/recruit/*");
  const originalMatch = useMatch("/original/*");

  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
  }, [location]);

  const toggleNav = (state) => {
    if (showNavigate) {
      navAnimation.start({ height: 227, transition: { duration: 0.2 } });
      listAnimation.start({
        opacity: 0,
        y: -10,
        transitionDelay: { display: "none" },
        transition: { duration: 0.1, delay: 0.1 },
      });
      listAnimation.start({
        opacity: 0,
        y: -10,
        transitionDelay: { display: "none" },
        transition: { duration: 0.1 },
      });

      blurAnimation.start({
        display: "none",
        opacity: 0,
        transform: { duration: 0.2 },
      });
    } else {
      navAnimation.start({
        height: 330,
        transition: { duration: 0.1 },
      });
      listAnimation.start({
        opacity: 1,
        y: 0,
        display: "block",
        transition: { duration: 0.1, delay: 0.2 },
      });
      blurAnimation.start({
        display: "block",
        opacity: 1,
        transition: { duration: 0.6 },
      });
    }
    setShowNavigate(state);
  };

  const matchBorder = {
    paddingBottom: "6px",
    borderBottom: "3px solid #ff0080",
    fontWeight: "bold",
  };
  const matchLink = { fontWeight: "bold", color: "#ff0080" };

  return (
    <>
      <motion.header
        className="headerContainer"
        animate={navAnimation}
        initial={{ height: 227 }}
      >
        <div className="headerLogo" onClick={() => navigate("/")}>
          ROOWA
        </div>
        <ul className="headerNav">
          <li
            className="headerNavBtn"
            onMouseEnter={() => toggleNav(true)}
            onMouseLeave={() => toggleNav(false)}
          >
            <span style={metaverseMatch ? matchBorder : null}>business</span>
            <ul className="depthUl">
              <motion.li
                animate={listAnimation}
                initial={{ opacity: 0, y: -10 }}
              >
                <Link to="/metaverse" style={metaverseMatch ? matchLink : null}>
                  메타버스 마케팅
                </Link>
              </motion.li>
              <motion.li
                animate={listAnimation}
                initial={{ opacity: 0, y: -10 }}
              >
                <Link to="/original" style={originalMatch ? matchLink : null}>
                  오리지널 콘텐츠
                </Link>
              </motion.li>
            </ul>
          </li>
          <li
            className="headerNavBtn"
            onMouseEnter={() => toggleNav(true)}
            onMouseLeave={() => toggleNav(false)}
            onClick={() => navigate("/roowa")}
          >
            <span style={roowaMatch ? matchBorder : null}>company</span>
          </li>
          <li
            className="headerNavBtn"
            onMouseEnter={() => toggleNav(true)}
            onMouseLeave={() => toggleNav(false)}
            onClick={() => navigate("/recruit")}
          >
            <span style={recruitMatch ? matchBorder : null}>recruit</span>
          </li>
          <li
            className="headerNavBtn"
            onMouseEnter={() => toggleNav(true)}
            onMouseLeave={() => toggleNav(false)}
          >
            <span
              style={
                contactMatch || payMatch || articleMatch ? matchBorder : null
              }
            >
              CONTACT
            </span>
            <ul className="depthUl">
              <motion.li
                animate={listAnimation}
                initial={{ opacity: 0, y: -10 }}
              >
                <Link to="/contact" style={contactMatch ? matchLink : null}>
                  문의하기
                </Link>
              </motion.li>
              <motion.li
                animate={listAnimation}
                initial={{ opacity: 0, y: -10 }}
              >
                <Link to="/article" style={articleMatch ? matchLink : null}>
                  뉴스·알림
                </Link>
              </motion.li>
              <motion.li
                animate={listAnimation}
                initial={{ opacity: 0, y: -10 }}
              >
                <Link to="/pay" style={payMatch ? matchLink : null}>
                  결제
                </Link>
              </motion.li>
            </ul>
          </li>
        </ul>
      </motion.header>
      <motion.div
        id="navBlurWrapper"
        animate={blurAnimation}
        initial={{ opacity: 0, display: "none" }}
        onMouseEnter={() => toggleNav(false)}
      ></motion.div>
    </>
  );
}

export default Header;
