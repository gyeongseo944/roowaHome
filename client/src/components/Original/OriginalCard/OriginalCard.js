import { useMediaQuery } from "react-responsive";

/** css는 MetarverseMarketing.scss 참고 */
function OriginalCard() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
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
            {!isMobile && (
              <img
                className="wrappImg"
                src={require("../../../assets/original/x11.png")}
                alt="카드 이미지"
              />
            )}
            <div className="title">{"크리에이티브한\n사고력"}</div>
            <div className="titleEng" style={{ fontSize: "22px" }}>
              Creative Thinking
            </div>
            <div className="hr"></div>
            <ul>
              <li>트렌드 소재 발굴</li>
              <li>컨슈머 니즈 파악</li>
              <li>영상 콘텐츠 전문 작가진 보유</li>
            </ul>
          </div>
          <div className="card">
            {!isMobile && (
              <img
                className="wrappImg"
                src={require("../../../assets/original/originCardData.png")}
                alt="카드 이미지"
              />
            )}
            <div className="title">{"확실한\n데이터분석과\n콘텐츠 기획력"}</div>
            <div className="titleEng" style={{ fontSize: "22px" }}>
              Content Planning
            </div>
            <div className="hr"></div>
            <ul>
              <li>데이터 기반 소구점 도출</li>
              <li>타겟 맞춤형 스토리텔링</li>
              <li>기획 매력적인 시그니처 개발</li>
              <li>캠페인, 이벤트 기획</li>
            </ul>
          </div>
          <div className="card">
            {!isMobile && (
              <img
                className="wrappImg"
                src={require("../../../assets/original/originCardOrigin.png")}
                alt="카드 이미지"
              />
            )}
            <div className="title">{"전반적인\n콘텐츠\n제작 능력"}</div>
            <div className="titleEng" style={{ fontSize: "22px" }}>
              Content Production
            </div>
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
