import "./HomeBottom.scss";

function HomeBottom() {
  return (
    <section className="homeBottomSection">
      <div className="toorWith">
        <span className="toorWithWhite">메타버스 </span>시대의 여행,
        <span className="toorWithWhite">루와</span>와 함께하세요.
      </div>
      <a
        href={"https://zep.us/play/8GRQzP"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="goToMetaverse">
          <div className="goToMetaverseBtn">
            <span>메타버스 루와사옥 이동하기</span>
            <img
              src={require("../../../assets/home/homeBottom/x203.png")}
              alt="메타버스 루와사옥 이동하기"
            />
          </div>
          <div className="goToMetaverseImage"></div>
        </div>
      </a>
    </section>
  );
}

export default HomeBottom;
