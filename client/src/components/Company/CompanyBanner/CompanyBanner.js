import "./CompanyBanner.scss";
function CompanyBanner() {
  return (
    <section className="companyBanner">
      <div className="wrapper"></div>
      {/* <img
        src={require("../../../assets/company/x852c4f2b.png")}
        alt="마음을 움직이는 콘텐츠를 만듭니다"
      /> */}
      <div className="container">
        <div className="box">
          <div className="title">{"we create emotional content"}</div>
          <div className="sub">마음을 움직이는 콘텐츠를 만듭니다.</div>
          <div className="absBtn">
            <img
              src={require("../../../assets/company/x59.png")}
              alt="스크롤 다운"
            />
          </div>
          <div className="naviBox">
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
          </div>
          <span className="naviBtn">회사소개</span>
        </div>
      </div>
    </section>
  );
}

export default CompanyBanner;
