import React from "react";
import "./Company.scss";
import CompanyMap from "./CompanyMap/CompanyMap";
import CompanyBanner from "./CompanyBanner/CompanyBanner";

const Company = () => {
  return (
    <div className="companyContainer">
      <CompanyBanner />
      <main className="companyMain">
        <p>---------구분선-----------</p>
        <CompanyMap />
      </main>
    </div>
  );
};

export default Company;
