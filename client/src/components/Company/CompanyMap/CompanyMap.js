import React from "react";
import "./CompanyMap.scss";
const CompanyMap = () => {
  return (
    <div className="companyMapContainer">
      <div className="contactUsContainer">
        <h1 className="companyContact">CONTACT US</h1>
        <p className="contactTitle">주식회사 달달프렌즈</p>
        <div className="contactInfo">
          <p>서울특별시 구로구 디지털로31길19, 1002호 \n manager@roowa.co.kr \n 070-4324-2017</p>
          <p>Opening hours. am 9:30 - pm 6:30 \n Lunch break. pm 12:00 - pm 13:30(Sat, Sun Off)</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyMap;
