import { Link } from "react-router-dom";
import "./Banner.scss";

function Banner({ title, subtitle, src }) {
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
          : null
      }
    >
      <div className="bannerContainer">
        <h2 className="bannerRoowa">{title}</h2>
        <h1 className="bannerRoowaTitle">
          {subtitle}
          {/* 상담 원하시는 내용은 빠르게 답변 <br />
          답변 드리겠습니다. */}
        </h1>
        <div className="naviBox">
          <Link to="/">
            <img
              src={require("../../assets/navBtns/x54f07279ca.png")}
              alt="home button"
              className="homeBtn"
            />
          </Link>
          <img
            className="chev"
            src={require("../../assets/navBtns/x59.png")}
            alt="Chevron"
          />
          <span className="naviBtn">CONTACT</span>
          <img
            className="chev"
            src={require("../../assets/navBtns/x59.png")}
            alt="Chevron"
          />
          <span className="naviBtn">루와 상담문의</span>
        </div>
      </div>
    </section>
  );
}

Banner.defaultProps = {
  title: "루와 상담문의",
  subtitle: "상담 원하시는 내용은 빠르게 답변\n답변 드리겠습니다.",
};

export default Banner;
