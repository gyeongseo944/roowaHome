import React from "react";
import "./CompanyTeam.scss";
import team from "../../../assets/company/team.png";

const CompanyTeam = () => {
  return (
    <div className="companyTeamContainer">
      <div className="teamTitle">
        <h1>팀, 루와</h1>
        <p>
          루와는 <span>'마음을 움직이는 콘텐츠'</span>를 만든다는 슬로건 아래
          <br />
          고객사의 목표를, 꿈을, 이루어드리는 기업입니다.
        </p>
      </div>
      <img src={team} alt="roowa team" />
    </div>
  );
};

export default CompanyTeam;
