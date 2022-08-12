import { Link } from "react-router-dom";
import Banner from "../common/Banner";
import "./Recruit.scss";

function Recruit() {
  const subtitle = "루와에서 함께 발을 맞추어 갈 인재를\n채용하고 있습니다";
  return (
    <>
      <Banner
        title="채용공고"
        subtitle={subtitle}
        src={require("../../assets/banner/x2af718a2b.png")}
      />
      <main className="recruitMain">
        <div className="recruitContainer">
          <Link to={`/recruit/${1}`} className="recruitCard">
            <div className="recruitDDay">D-10</div>
            <div className="recruitTeam">New MediaProduction Team</div>
            <div className="recruitTitle">영상 콘텐츠 제작 PD 채용</div>
            <div className="recruitTask">
              <p>{"영상 콘텐츠 기획 및 제작\n영상 콘텐츠 촬영 및 연출"}</p>
            </div>
            <div className="recruitTagBox">
              <div className="recruitTag">
                <span>경력</span>
              </div>
              <div className="recruitTag">
                <span>학력무관</span>
              </div>
            </div>
            <div className="recruitPeriod">2022.08.08 ~ 2022.08.08</div>
          </Link>
          <Link to={`/recruit/${1}`} className="recruitCard">
            <div className="recruitDDay">D-10</div>
            <div className="recruitTeam">New MediaProduction Team</div>
            <div className="recruitTitle">영상 콘텐츠 제작 PD 채용</div>
            <div className="recruitTask">
              <p>{"영상 콘텐츠 기획 및 제작\n영상 콘텐츠 촬영 및 연출"}</p>
            </div>
            <div className="recruitTagBox">
              <div className="recruitTag">
                <span>경력</span>
              </div>
              <div className="recruitTag">
                <span>학력무관</span>
              </div>
            </div>
            <div className="recruitPeriod">2022.08.08 ~ 2022.08.08</div>
          </Link>
          <Link to={`/recruit/${1}`} className="recruitCard">
            <div className="recruitDDay end">마감</div>
            <div className="recruitTeam">New MediaProduction Team</div>
            <div className="recruitTitle">영상 콘텐츠 제작 PD 채용</div>
            <div className="recruitTask">
              <p>{"영상 콘텐츠 기획 및 제작\n영상 콘텐츠 촬영 및 연출"}</p>
            </div>
            <div className="recruitTagBox">
              <div className="recruitTag">
                <span>경력</span>
              </div>
              <div className="recruitTag">
                <span>학력무관</span>
              </div>
            </div>
            <div className="recruitPeriod">2022.08.08 ~ 2022.08.08</div>
          </Link>
          <Link to={`/recruit/${1}`} className="recruitCard">
            <div className="recruitDDay">D-10</div>
            <div className="recruitTeam">New MediaProduction Team</div>
            <div className="recruitTitle">영상 콘텐츠 제작 PD 채용</div>
            <div className="recruitTask">
              <p>{"영상 콘텐츠 기획 및 제작\n영상 콘텐츠 촬영 및 연출"}</p>
            </div>
            <div className="recruitTagBox">
              <div className="recruitTag">
                <span>경력</span>
              </div>
              <div className="recruitTag">
                <span>학력무관</span>
              </div>
            </div>
            <div className="recruitPeriod">2022.08.08 ~ 2022.08.08</div>
          </Link>
        </div>
        <div className="readMoreContainer">
          <button className="readMore">더보기 +</button>
        </div>
      </main>
    </>
  );
}

export default Recruit;
