import React from "react";
import "./CompanyTeam.scss";
import team from "../../../assets/company/team.png";
import { useMediaQuery } from "react-responsive";
const CompanyTeam = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="companyTeamContainer">
      <div className="teamTitle">
        <h1>팀, 루와</h1>
        {isMobile ? (
          <p>
            각 분야의 전문가들이 모여
            <br />
            프로젝트를 진행해 나가고 있습니다.
          </p>
        ) : (
          <p>
            루와는 <span>'마음을 움직이는 콘텐츠'</span>를 만든다는 슬로건 아래
            <br />
            고객사의 목표를, 꿈을, 이루어드리는 기업입니다.
          </p>
        )}
      </div>
      <img src={team} alt="roowa team" />
    </div>
  );
};

export default CompanyTeam;
