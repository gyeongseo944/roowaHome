/** css는 MetarverseMarketing.scss 참고 */
function OriginalCard() {
  return (
    <section className="metarverseMarketing">
      <img
        className="backgroundImage"
        src={require("../../../assets/original/x5.png")}
        alt="배경 이미지"
      />
      <div className="marketingContainer">
        <div className="marketingTitle">
          마음을 움직이는<div>콘텐츠를 만듭니다</div>
        </div>
        <div className="cardBox">
          <div className="card">
            <img
              className="wrappImg"
              src={require("../../../assets/original/x11.png")}
              alt="카드 이미지"
            />
            <div className="title">{"확실한\n데이터분석과\n콘텐츠 기획력"}</div>
            <div className="titleEng">Content Planning</div>
            <div className="hr"></div>
            <ul>
              <li>데이터 기반 소구점 도출</li>
              <li>타겟 맞춤형 스토리텔링</li>
              <li>기획 매력적인 시그니처 개발</li>
              <li>캠페인, 이벤트 기획</li>
            </ul>
          </div>
          <div className="card">
            <img
              className="wrappImg"
              src={require("../../../assets/original/x11.png")}
              alt="카드 이미지"
            />
            <div className="title">{"확실한\n데이터분석과\n콘텐츠 기획력"}</div>
            <div className="titleEng">Content Planning</div>
            <div className="hr"></div>
            <ul>
              <li>데이터 기반 소구점 도출</li>
              <li>타겟 맞춤형 스토리텔링</li>
              <li>기획 매력적인 시그니처 개발</li>
              <li>캠페인, 이벤트 기획</li>
            </ul>
          </div>
          <div className="card">
            <img
              className="wrappImg"
              src={require("../../../assets/original/x11.png")}
              alt="카드 이미지"
            />
            <div className="title">{"전반적인\n콘텐츠\n제작 능력"}</div>
            <div className="titleEng">Content Production</div>
            <div className="hr"></div>
            <ul>
              <li>촬영, 조명, 미술 등 전 과정 진행</li>
              <li>마케팅/사업을 통한 조회수 극대화</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OriginalCard;
