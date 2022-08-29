import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { recruitDataAtom } from "../../../atom";
import Loader from "../../common/Loader/Loader";

function RecruitDetail() {
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
      if (!recruitData) {
        const data = await axios.get("/api/recruit/getList");
        // 상시 모집 데이터 array
        let alwaysData = [];
        // 마감된 데이터 array
        let endData = [];
        const remainData = data?.data?.result
          ?.filter((v) => {
            // 기간 설정 없는 상시모집 데이터 push
            if (v.date.date === null) {
              alwaysData.push(v);
              return false;
            }
            // d-day 값으로 마감된 데이터와 기간이 남은 데이터 분할
            const dataDate = Math.ceil(
              (new Date(v.date.date.end) - new Date()) / (1000 * 60 * 60 * 24)
            );
            // 기간 남은 데이터 filter
            if (dataDate >= 0) {
              return true;
            } else {
              // 마감된 데이터 array에 push
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
          // 마감된 데이터 마감 날짜 기준 정렬
          ...alwaysData,
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

  return (
    <main className="payDetailMain">
      <div className="payDetailContainer">
        <div className="payDetailTitleBox">
          <span className="payDetailTitle">
            {data.title.results[0].title.text.content}
          </span>
          <span className="payDetailPrice">
            {data.date.date
              ? `${data.date.date.start} ~ ${data.date.date.end}`
              : `상시채용`}
          </span>
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

export default RecruitDetail;
