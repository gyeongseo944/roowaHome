import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerLogo">ROOWA</div>
        <div className="footerInfoBox">
          <ul className="footerInfoBoxColumn">
            <li className="footerInfo">
              (주)달달프렌즈 | 사업자번호 : 325-81-00489
            </li>
            <li className="footerInfo">
              서울특별시 구로구 디지털로31길 19 에이스테크노타워 2차 1002호
            </li>
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
          <li className="footerLink">이용약관</li>
          <li className="footerLink">개인정보처리방침</li>
          <li className="footerLink">사업자정보확인</li>
        </ul>
      </div>
      <div className="snsBtns">
        <img
          className="snsBtn"
          src={require("../assets/snsBtns/x7.png")}
          alt=""
        />
        <img
          className="snsBtn"
          src={require("../assets/snsBtns/x15.png")}
          alt=""
        />
        <img
          className="snsBtn"
          src={require("../assets/snsBtns/x11.png")}
          alt=""
        />
        <img
          className="snsBtn"
          src={require("../assets/snsBtns/x13.png")}
          alt=""
        />
      </div>
    </footer>
  );
}

export default Footer;
