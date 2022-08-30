import "./CompanyExplain.scss";

function CompanyExplain() {
  return (
    <section className="companyExplain">
      <div className="block">
        <div className="imgBox">
          <div className="imgWrapper"></div>
          <img
            src={require("../../../assets/company/x15.png")}
            alt="이루어, 드림"
          />
        </div>
        <div className="textBox">
          <div className="titleText">이루어, 드림.</div>
          <div className="subText">
            루와는 ‘마음을 움직이는 콘텐츠’ 를 만든다는 슬로건 아래 고객사의
            목표와 꿈을, 이루어드리는 기업입니다.
          </div>
        </div>
      </div>
      <div className="block">
        <div className="imgBox">
          <div className="imgWrapper"></div>
          <img
            src={require("../../../assets/company/x20.png")}
            alt="이루어, 드림"
          />
        </div>
        <div className="textBox">
          <div className="titleText">이루어, 드림.</div>
          <div className="subText">
            루와는 ‘마음을 움직이는 콘텐츠’ 를 만든다는 슬로건 아래 고객사의
            목표와 꿈을, 이루어드리는 기업입니다.
          </div>
        </div>
      </div>
      <div className="block around"></div>
      <div className="block"></div>
      <div className="block"></div>
      <div className="block"></div>
    </section>
  );
}

export default CompanyExplain;
