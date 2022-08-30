import React from "react";
import "./Company.scss";
import CompanyMap from "./CompanyMap/CompanyMap";
import CompanyBanner from "./CompanyBanner/CompanyBanner";
import CompanyExplain from "./CompanyExplain/CompanyExplain";

const Company = () => {
  return (
    <div className="companyContainer">
      <CompanyBanner />
      <div className="background">
        <main className="companyMain">
          <CompanyExplain />
          <p>---------구분선-----------</p>
          <CompanyMap />
        </main>
      </div>
    </div>
  );
};

export default Company;
