import { Link, useMatch, useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import "./Header.scss";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [showNavigate, setShowNavigate] = useState(false);
  const navAnimation = useAnimation();
  const listAnimation = useAnimation();
  const blurAnimation = useAnimation();
  const marketingMatch = useMatch("/marketing/*");
  const metaverseMatch = useMatch("/metaverse/*");
  const contactMatch = useMatch("/contact/*");
  const payMatch = useMatch("/pay/*");
  const roowaMatch = useMatch("/roowa/*");
  const articleMatch = useMatch("/article/*");
  const noticeMatch = useMatch("/notice/*");
  const recruitMatch = useMatch("/recruit/*");

  const toggleNav = (state) => {
    if (showNavigate) {
      navAnimation.start({ height: 227, transition: { duration: 0.2 } });
      listAnimation.start({
        opacity: 0,
        y: -10,
        transition: { duration: 0.1 },
      });

      blurAnimation.start({
        display: "none",
        opacity: 0,
        transform: { duration: 0.2 },
      });
    } else {
      navAnimation.start({
        height: 425,
        transition: { duration: 0.1 },
      });
      listAnimation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.1, delay: 0.1 },
      });
      blurAnimation.start({
        display: "block",
        opacity: 1,
        transition: { duration: 0.6 },
      });
    }
    setShowNavigate(state);
  };

  const matchBorder = { paddingBottom: "3px", borderBottom: "3px solid #fff" };
  const matchLink = { fontWeight: "bold", color: "#fff" };
  const aboutMatchFunction = () => {
    if (roowaMatch || articleMatch || noticeMatch || recruitMatch) {
      return true;
    } else {
      return false;
    }
  };

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
        <div className="headerNav">
          <ul className="navWrapper">
            <li
              className="headerNavBtn"
              onMouseEnter={() => toggleNav(true)}
              onMouseLeave={() => toggleNav(false)}
              style={aboutMatchFunction() ? matchBorder : null}
            >
              ABOUT
              <ul className="aboutUl">
                <motion.li
                  animate={listAnimation}
                  initial={{ opacity: 0, y: -10 }}
                >
                  <Link to="/roowa" style={roowaMatch ? matchLink : null}>
                    루와소개
                  </Link>
                </motion.li>
                <motion.li
                  animate={listAnimation}
                  initial={{ opacity: 0, y: -10 }}
                >
                  <Link to="/article" style={articleMatch ? matchLink : null}>
                    언론보도
                  </Link>
                </motion.li>
                <motion.li
                  animate={listAnimation}
                  initial={{ opacity: 0, y: -10 }}
                >
                  <Link to="/notice" style={noticeMatch ? matchLink : null}>
                    공지사항
                  </Link>
                </motion.li>
                <motion.li
                  animate={listAnimation}
                  initial={{ opacity: 0, y: -10 }}
                >
                  <Link to="/recruit" style={recruitMatch ? matchLink : null}>
                    채용공고
                  </Link>
                </motion.li>
              </ul>
            </li>
            <li className="headerNavBtn" onClick={() => navigate("/")}>
              ORIGINAL CONTENTS
            </li>
            <li
              className="headerNavBtn"
              onClick={() => navigate("/marketing")}
              style={marketingMatch ? matchBorder : null}
            >
              CONTENTS MARKETING
            </li>
            <li
              className="headerNavBtn"
              onClick={() => navigate("/metaverse")}
              style={metaverseMatch ? matchBorder : null}
            >
              METAVERSE
            </li>
            <li
              className="headerNavBtn"
              onMouseEnter={() => toggleNav(true)}
              onMouseLeave={() => toggleNav(false)}
              style={contactMatch ? matchBorder : payMatch ? matchBorder : null}
            >
              CONTACT
              <ul className="contactUl">
                <motion.li
                  animate={listAnimation}
                  initial={{ opacity: 0, y: -10 }}
                >
                  <Link to="/contact" style={contactMatch ? matchLink : null}>
                    루와 상담문의
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
        </div>
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
