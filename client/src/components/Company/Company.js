import React from "react";
import "./Company.scss";
import CompanyMap from "./CompanyMap/CompanyMap";

const Company = () => {
  return (
    <div className="companyContainer">
      <main className="companyMain">
        <p>---------구분선-----------</p>
        <CompanyMap />
      </main>
    </div>
  );
};

export default Company;
