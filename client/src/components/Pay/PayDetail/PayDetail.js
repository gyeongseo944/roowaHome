import axios from "axios";
import { useEffect } from "react";
import { useMatch, useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recruitDataAtom } from "../../../atom";
import Loader from "../../common/Loader/Loader";
import "./PayDetail.scss";

function PayDetail() {
  const recruitMatch = useMatch("/recruit/*");
  const navigate = useNavigate();
  const id = useParams().id;
  const [recruitData, setRecruitDataAtom] = useRecoilState(recruitDataAtom);
  // 이전, 다음 글 위한 index값 선언
  let index = null;

  // url 바뀔 때마다 실행
  useEffect(() => {
    // 스크롤 최상단으로
    window.scrollTo({
      top: 0,
    });
    // atom에 데이터가 없으면 axios 실행
    (async () => {
      if (recruitMatch && !recruitData) {
        const rowData = await axios.get("/api/recruit/getList");
        let endData = [];
        // 마감된 데이터는 잘라낸 후 정렬하고 뒤에 다시 붙임.
        const remainData = rowData?.data?.result
          ?.filter((v) => {
            if (new Date(v.date.date.end) >= new Date()) {
              return true;
            } else {
              endData.push(v);
              return false;
            }
          })
          .sort(
            // 채용마감 날짜 기준 정렬
            (a, b) => new Date(a.date.date.end) - new Date(b.date.date.end)
          );
        setRecruitDataAtom([
          ...remainData,
          ...endData.sort(
            (a, b) => new Date(a.date.date.end) - new Date(b.date.date.end)
          ),
        ]);
      }
    })();
  }, [id]);

  // 로딩 중이면 Loader컴포넌트 return
  if (!recruitData) return <Loader />;
  // 데이터 로딩 완료 후 현재 param id값 데이터 find
  const data = recruitData.find((v, i) => {
    if (v.id === id) {
      // 출력된 index값 저장
      index = i;
      return true;
    }
  });
  console.log(data);

  return (
    <main className="payDetailMain">
      <div className="payDetailContainer">
        <div className="payDetailTitleBox">
          <span className="payDetailTitle">
            {data.title.results[0].title.text.content}
          </span>
          <span className="payDetailPrice">{`${data.date.date.start} ~ ${data.date.date.end}`}</span>
        </div>
        <div className="payDetailContentsBox">
          <div className="payDetailContent">
            <img src={data.img?.files[0]?.file?.url} alt="게시글 내용" />
          </div>
        </div>
        <div className="contentsNav">
          {recruitData[index - 1] ? (
            <div
              className="contentsNavPrev"
              onClick={() => navigate(`/recruit/${recruitData[index - 1].id}`)}
            >
              <span className="contentNavText">이전</span>
              <img
                src={require("../../../assets/navBtns/articleBtns/x59.png")}
                alt="이전 글"
              />

              <span className="contentNavTitle">
                {recruitData[index - 1].title.results[0].title.text.content}
              </span>
            </div>
          ) : null}
          {recruitData[index + 1] ? (
            <div
              className="contentsNavNext"
              onClick={() => navigate(`/recruit/${recruitData[index + 1].id}`)}
            >
              <span className="contentNavText">다음</span>
              <img
                src={require("../../../assets/navBtns/articleBtns/x59.png")}
                alt="다음 글"
              />

              <span className="contentNavTitle">
                {recruitData[index + 1].title.results[0].title.text.content}
              </span>
            </div>
          ) : null}
        </div>
        <div className="payDetailListBtnBox">
          <button
            className="payDetailListBtn"
            onClick={() => navigate("/recruit")}
          >
            목록
          </button>
        </div>
      </div>
    </main>
  );
}

export default PayDetail;
