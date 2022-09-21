import { Link } from "react-router-dom";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerLogoBox">
          <div className="footerLogo">ROOWA</div>
          <div className="mobileSnsBtns">
            <a href={"https://www.facebook.com/roowa.official"} target="_blank" rel="noopener noreferrer">
              <img className="snsBtn" src={require("../../assets/snsBtns/x7.png")} alt="" />
            </a>
            <a href={"https://www.instagram.com/roowa.official"} target="_blank" rel="noopener noreferrer">
              <img className="snsBtn" src={require("../../assets/snsBtns/x15.png")} alt="" />
            </a>
            <a href={"https://www.youtube.com/channel/UCxw7yEYe192dESeJ5m88pOw"} target="_blank" rel="noopener noreferrer">
              <img className="snsBtn" src={require("../../assets/snsBtns/x11.png")} alt="" />
            </a>
            <a href={"https://blog.naver.com/commerce_roowa"} target="_blank" rel="noopener noreferrer">
              <img className="snsBtn" src={require("../../assets/snsBtns/x13.png")} alt="" />
            </a>
          </div>
        </div>
        <div className="footerInfoBox">
          <ul className="footerInfoBoxColumn">
            <li className="footerInfo">(주)달달프렌즈 | 사업자번호 : 325-81-00489</li>
            <li className="footerInfo">서울특별시 구로구 디지털로31길 19 에이스테크노타워 2차 1002호</li>
          </ul>

          <ul className="footerInfoBoxColumn">
            <li className="footerInfo">대표: 모상우</li>
            <li className="footerInfo">개인정보관리책임자: 이주영</li>
          </ul>

          <ul className="footerInfoBoxColumn">
            <li className="footerInfo">Tel. 070-4324-2017</li>
            <li className="footerInfo">Email. manager@roowa.co.kr</li>
          </ul>

          <ul className="footerInfoBoxColumn">
            <li className="footerInfo">통신판매: 제2021-서울구로-1207호</li>
          </ul>
        </div>
        <ul className="footerLinkBox">
          <Link to="/agreement/agreement">
            <li className="footerLink">이용약관</li>
          </Link>
          <Link to="/agreement/personalInfo">
            <li className="footerLink">개인정보처리방침</li>
          </Link>
          <Link to="/agreement/businessInfo">
            <li className="footerLink">사업자정보확인</li>
          </Link>
        </ul>
      </div>
      <div className="snsBtns">
        <a href={"https://www.facebook.com/roowa.official"} target="_blank" rel="noopener noreferrer">
          <img className="snsBtn" src={require("../../assets/snsBtns/x7.png")} alt="" />
        </a>
        <a href={"https://www.instagram.com/roowa.official"} target="_blank" rel="noopener noreferrer">
          <img className="snsBtn" src={require("../../assets/snsBtns/x15.png")} alt="" />
        </a>
        <a href={"https://www.youtube.com/channel/UCxw7yEYe192dESeJ5m88pOw"} target="_blank" rel="noopener noreferrer">
          <img className="snsBtn" src={require("../../assets/snsBtns/x11.png")} alt="" />
        </a>
        <a href={"https://blog.naver.com/commerce_roowa"} target="_blank" rel="noopener noreferrer">
          <img className="snsBtn" src={require("../../assets/snsBtns/x13.png")} alt="" />
        </a>
      </div>
      <div
        className="toTop"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        <img src={require("../../assets/x70.png")} alt="상단으로" />
      </div>
    </footer>
  );
}

export default Footer;
