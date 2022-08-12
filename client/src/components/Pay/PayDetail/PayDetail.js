import "./PayDetail.scss";

function PayDetail() {
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
          <div className="contentsNavPrev">이전</div>
          <div className="contentsNavNext">다음</div>
        </div>
        <div className="payDetailListBtnBox">
          <button className="payDetailListBtn">목록</button>
        </div>
      </div>
    </main>
  );
}

export default PayDetail;
