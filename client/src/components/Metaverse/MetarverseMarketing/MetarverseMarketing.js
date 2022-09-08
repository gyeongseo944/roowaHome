import { useMediaQuery } from "react-responsive";
import "./MetarverseMarketing.scss";

function MetarverseMarketing() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="metarverseMarketing">
      <img
        className="backgroundImage"
        src={require("../../../assets/metaverse/x5.png")}
        alt="배경 이미지"
      />
      <div className="marketingContainer">
        <div className="marketingTitle">
          글로벌 메가 트렌드,<div>메타버스 마케팅</div>
        </div>
        <div className="cardBox">
          <div className="card">
            {!isMobile && (
              <img
                className="wrappImg"
                src={require("../../../assets/metaverse/x11.png")}
                alt="카드 이미지"
              />
            )}
            <div className="title">{"메타버스\n플랫폼\n월드맵 제작"}</div>
            <div className="titleEng">Creat Metaverse Platform World Map</div>
            <div className="hr"></div>
            <ul>
              <li>2D 메타버스 월드맵 기획.제작 : 개더타운, ZEP</li>
              <li>
                3D 메타버스 월드맵 기획.제작 : 제페토, 로블록스, 마인크래프트
              </li>
              <li>
                3D 실시간 다중 접속 VR 메타버스 플랫폼 연결 구축 작업 : 언리얼
                엔진 기반 (Head Mount Device 지원)
              </li>
            </ul>
          </div>
          <div className="card">
            {!isMobile && (
              <img
                className="wrappImg"
                src={require("../../../assets/metaverse/metaBusiness.png")}
                alt="카드 이미지"
              />
            )}
            <div className="title">{"메타버스\n비즈니스\n컨설팅"}</div>
            <div className="titleEng">Metarverse Business Consulting</div>
            <div className="hr"></div>
            <ul>
              <li>제페토 브랜디드 굿즈 제작 : 의상,헤어,액세서리</li>
              <li>NFT 디지털 리소스 제작 및 MINTING</li>
              <li>메타버스 게이미피케이션 기획.제작 : 상호작용,UI,이펙트</li>
            </ul>
          </div>
          <div className="card">
            {!isMobile && (
              <img
                className="wrappImg"
                src={require("../../../assets/metaverse/metaCreator.png")}
                alt="카드 이미지"
              />
            )}
            <div className="title">
              {"메타버스\n이벤트 및\n크리에이터 교육"}
            </div>
            <div className="titleEng">
              Metarverse Event and Educate Creators
            </div>
            <div className="hr"></div>
            <ul>
              <li>라이브 이벤트 기획·운영 및 진행</li>
              <li>메타버스 공모전 등 이벤트 개최·운영</li>
              <li>크리에이터 교육</li>
              <li>메타버스 활용 홍보 콘텐츠 기획, 촬영, 제작, 홍보</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MetarverseMarketing;
