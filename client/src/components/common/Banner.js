import "./Banner.scss";

function Banner({ src }) {
  console.log(src);
  return (
    <section className="banner">
      <div className="bannerContainer">
        <h2 className="bannerRoowa">루와 상담문의</h2>
        <h1 className="bannerRoowaTitle">
          상담 원하시는 내용은 빠르게 답변 <br />
          답변 드리겠습니다.
        </h1>
        <div className="naviBox">
          <img
            src={require("../../assets/navBtns/x54f07279ca.png")}
            alt="home button"
            className="homeBtn"
          />
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

export default Banner;
