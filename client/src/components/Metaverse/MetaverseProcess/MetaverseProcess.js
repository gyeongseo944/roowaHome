import "./MetaverseProcess.scss";

function MetaverseProcess() {
  return (
    <section className="metaverseProcess">
      <div className="title">process</div>
      <div className="iconArea">
        <div className="dashBox"></div>
        <div className="iconCircles">
          <img
            src={require("../../../assets/metaverse/x295.png")}
            alt="프로세스 아이콘"
          />
        </div>
        <div className="iconCircles">
          <img
            src={require("../../../assets/metaverse/x297.png")}
            alt="프로세스 아이콘"
          />
        </div>
        <div className="iconCircles">
          <img
            src={require("../../../assets/metaverse/x299.png")}
            alt="프로세스 아이콘"
          />
        </div>
        <div className="iconCircles">
          <img
            src={require("../../../assets/metaverse/x301.png")}
            alt="프로세스 아이콘"
          />
        </div>
      </div>
      <div className="stepLine">
        <div className="stepBox">
          <div className="step">step 01</div>
          <div className="title">고객사 상담 미팅</div>
        </div>
        <div className="stepBox">
          <div className="step">step 02</div>
          <div className="title">월드맵 기획 작업</div>
        </div>
        <div className="stepBox">
          <div className="step">step 03</div>
          <div className="title">{"모델링 및 앱 상호작용 개발"}</div>
        </div>
        <div className="stepBox">
          <div className="step">step 04</div>
          <div className="title">제작 완성</div>
        </div>
      </div>
    </section>
  );
}

export default MetaverseProcess;
