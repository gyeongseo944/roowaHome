import { Link, useLocation, useMatch, useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import "./Header.scss";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function Header() {
  const navigate = useNavigate();
  // desktop 메뉴 바 state
  const [showNavigate, setShowNavigate] = useState(false);
  // mobile 메뉴 바 state
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [depList1, setDepList1] = useState(false);
  const [depList2, setDepList2] = useState(false);
  const navAnimation = useAnimation();
  const listAnimation = useAnimation();
  const blurAnimation = useAnimation();
  const depList1Animation = useAnimation();
  const depList2Animation = useAnimation();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const metaverseMatch = useMatch("/metaverse/*");
  const contactMatch = useMatch("/contact/*");
  const payMatch = useMatch("/pay/*");
  const roowaMatch = useMatch("/roowa/*");
  const articleMatch = useMatch("/article/*");
  const recruitMatch = useMatch("/recruit/*");
  const originalMatch = useMatch("/original/*");

  /* 페이지 이동 시 네비게이션 바 감춤 및 최상단 이동*/
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
    setMobileMenuVisible(false);
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

  useEffect(() => {
    depList1
      ? depList1Animation.start({ height: "11vw" })
      : depList1Animation.start({
          height: "0vw",
        });
  }, [depList1]);
  useEffect(() => {
    depList2
      ? depList2Animation.start({ height: "85vw" })
      : depList2Animation.start({
          height: "0vw",
        });
  }, [depList2]);
  useEffect(() => {
    if (!mobileMenuVisible) {
      setDepList1(false);
      setDepList2(false);
    }
  }, [mobileMenuVisible]);

  /* motion variants */
  // desktop 헤더 밑줄
  const matchBorder = {
    paddingBottom: "6px",
    borderBottom: "3px solid #ff0080",
    fontWeight: "bold",
  };
  // urlMatch에 따라 글씨 변환
  // desktop
  const matchLink = { fontWeight: "bold", color: "#ff0080" };
  // mobile
  const mobileMatchFont = {
    fontWeight: "bold",
    color: "#070707",
  };

  return (
    <>
      {!isMobile ? (
        <motion.header className="headerContainer" animate={navAnimation}>
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
                  <Link
                    to="/metaverse"
                    style={metaverseMatch ? matchLink : null}
                  >
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
      ) : (
        <header className="headerContainer">
          <div className="headerLogo" onClick={() => navigate("/")}>
            ROOWA
          </div>
          <div
            className="headerMenuBtn"
            onClick={() => {
              setMobileMenuVisible(true);
            }}
          ></div>

          <AnimatePresence>
            {mobileMenuVisible && (
              <>
                <motion.div
                  className="mobileMenu"
                  initial={{ right: "-67vw" }}
                  animate={{
                    right: "0vw",
                    transition: {
                      bounce: 0,
                    },
                  }}
                  exit={{ right: "-67vw", transition: { bounce: 0 } }}
                >
                  <div className="menuContainer">
                    <div className="logoBox">
                      <div className="menuLogo">
                        <img
                          src={require("../../assets/x2022black.png")}
                          alt="루와"
                        />
                      </div>
                      <div
                        className="menuExitBtn"
                        onClick={() => setMobileMenuVisible(false)}
                      >
                        <img
                          src={require("../../assets/x134.png")}
                          alt="닫기"
                        />
                      </div>
                    </div>
                    <ul className="navigation">
                      <li
                        onClick={() => {
                          setDepList1((prev) => !prev);
                        }}
                        style={depList1 ? mobileMatchFont : null}
                      >
                        business
                        <motion.ul
                          className="depth first"
                          initial={{ height: 0, paddingTop: "0vw" }}
                          animate={depList1Animation}
                        >
                          <li>
                            <Link
                              style={metaverseMatch ? mobileMatchFont : null}
                              to="/metaverse"
                            >
                              메타버스 마케팅
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={originalMatch ? mobileMatchFont : null}
                              to="/original"
                            >
                              오리지널 콘텐츠
                            </Link>
                          </li>
                        </motion.ul>
                      </li>
                      <li>
                        <Link
                          style={roowaMatch ? mobileMatchFont : null}
                          to="/roowa"
                        >
                          company
                        </Link>
                      </li>
                      <li>
                        <Link
                          style={recruitMatch ? mobileMatchFont : null}
                          to="/recruit"
                        >
                          recruit
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          setDepList2((prev) => !prev);
                        }}
                        style={depList2 ? mobileMatchFont : null}
                      >
                        contact
                        <motion.ul
                          className="depth second"
                          initial={{ height: 0, paddingTop: "0vw" }}
                          animate={depList2Animation}
                        >
                          <li>
                            <Link
                              style={contactMatch ? mobileMatchFont : null}
                              to="/contact"
                            >
                              문의하기
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={articleMatch ? mobileMatchFont : null}
                              to="/article"
                            >
                              뉴스·알림
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={payMatch ? mobileMatchFont : null}
                              to="/pay"
                            >
                              결제
                            </Link>
                          </li>
                        </motion.ul>
                      </li>
                    </ul>
                  </div>
                </motion.div>
                <motion.div
                  className="mobileMenuBlur"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMobileMenuVisible(false)}
                ></motion.div>
              </>
            )}
          </AnimatePresence>
        </header>
      )}
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
