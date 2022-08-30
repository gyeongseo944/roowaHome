import React from "react";
import "./Company.scss";
import CompanyMap from "./CompanyMap/CompanyMap";

const Company = () => {
  return (
    <>
      <main className="companyMain">
        <p>---------구분선-----------</p>
        <CompanyMap />
      </main>
    </>
  );
};

export default Company;
