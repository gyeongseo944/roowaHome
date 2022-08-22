import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./PayDetail.scss";

function PayDetail() {
  const navigate = useNavigate();

  // url 바뀔 때마다 실행
  useEffect(() => {
    // 스크롤 최상단으로
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <main className="payDetailMain">
      <div className="payDetailContainer">
        <div className="payDetailTitleBox">
          <span className="payDetailTitle">메타버스 콘텐츠 마케팅</span>
          <span className="payDetailPrice">별도 협의</span>
        </div>
        <div className="payDetailContentsBox">
          <div className="payDetailContent"></div>
        </div>
        <div className="contentsNav">
          <div className="contentsNavPrev" onClick={() => navigate(`/pay/1`)}>
            <span className="contentNavText">이전</span>
            <img
              src={require("../../../assets/navBtns/articleBtns/x59.png")}
              alt="이전 글"
            />

            <span className="contentNavTitle">콘텐츠 마케팅 서비스</span>
          </div>
          <div className="contentsNavNext" onClick={() => navigate(`/pay/2`)}>
            <span className="contentNavText">다음</span>
            <img
              src={require("../../../assets/navBtns/articleBtns/x59.png")}
              alt="다음 글"
            />

            <span className="contentNavTitle">오리지널 컨텐츠</span>
          </div>
        </div>
        <div className="payDetailListBtnBox">
          <button className="payDetailListBtn" onClick={() => navigate("/pay")}>
            목록
          </button>
        </div>
      </div>
    </main>
  );
}

export default PayDetail;
