import { useEffect } from "react";
import Banner from "../common/Banner";
import "./Recruit.scss";
import RecruitCard from "./RecruitCard/RecruitCard";
import Loader from "../common/Loader/Loader";
import { useRecoilState } from "recoil";
import { recruitDataAtom } from "../../atom";
import axios from "axios";

function Recruit() {
  const subtitle = "루와에서 함께 발을 맞추어 갈 인재를\n채용하고 있습니다";
  const [recruitData, setRecruitDataAtom] = useRecoilState(recruitDataAtom);

  useEffect(() => {
    window.scrollTo({
      top: 0,
    });
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
  }, []);

  return (
    <>
      <Banner
        title="채용공고"
        subtitle={subtitle}
        src={require("../../assets/banner/x2af718a2b.png")}
      />
      {!recruitData ? (
        <Loader />
      ) : (
        <main className="recruitMain">
          <div className="recruitContainer">
            {recruitData &&
              recruitData.map((data) => {
                return <RecruitCard key={data.id} {...data} />;
              })}
          </div>
          <div className="readMoreContainer">
            <button className="readMore">더보기 +</button>
          </div>
        </main>
      )}
    </>
  );
}

export default Recruit;
