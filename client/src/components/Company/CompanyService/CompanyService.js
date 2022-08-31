import React from "react";
import "./CompanyService.scss";

const CompanyService = () => {
  return (
    <div className="serviceContainer">
      <div className="serviceTitle">
        <h1>루와의 서비스</h1>
        <p>
          루와는 <span>콘텐츠 마케팅 서비스</span>를 통해 고객사의 목표를 이루어드리는
          <br />
          고객사의 목표를, 꿈을, 이루어드리는 기업입니다.
        </p>
      </div>
      <img src={team} alt="roowa team" />
    </div>
  );
};

export default CompanyService;
