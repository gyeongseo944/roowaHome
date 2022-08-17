import { useQuery } from "react-query";
import { useEffect } from "react";
import Banner from "../common/Banner";
import "./Recruit.scss";
import { getRecruit } from "../../api";
import RecruitCard from "./RecruitCard/RecruitCard";

function Recruit() {
  const subtitle = "루와에서 함께 발을 맞추어 갈 인재를\n채용하고 있습니다";
  const { data } = useQuery(["recruit", "getAllList"], getRecruit);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  function sortedData(data) {
    const sample = data?.data?.result?.filter(
      (v) => v.date.date.end > new Date()
    );
    // .sort(
    //   // 채용마감 날짜 기준 정렬
    //   (a, b) => new Date(a.date.date.end) - new Date(b.date.date.end)
    // );
    console.log(sample);
  }

  data && sortedData(data);
  return (
    <>
      <Banner
        title="채용공고"
        subtitle={subtitle}
        src={require("../../assets/banner/x2af718a2b.png")}
      />
      <main className="recruitMain">
        <div className="recruitContainer">
          {/* {data &&
            sortedData(data).map((data) => {
              return <RecruitCard key={data.id} {...data} />;
            })} */}
        </div>
        <div className="readMoreContainer">
          <button className="readMore">더보기 +</button>
        </div>
      </main>
    </>
  );
}

export default Recruit;
