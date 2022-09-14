import React from "react";
import "./CompanyClients.scss";
import logo from "../../../assets/company/logoZip.gif";
import logoMo from "../../../assets/company/logoZipMo.gif";
import { useMediaQuery } from "react-responsive";

const CompanyClients = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className="companyClientsContainer">
      <div className="clientsTitle">
        <h1>
          루와와 함께한 <br />
          클라이언트
        </h1>
        <p>
          확실한 데이터 분석과 기획력을 바탕으로 <br />
          다양한 클라이언트의 프로젝트를 진행하였습니다.
        </p>
      </div>
      <div className="clientsLogoImg">
        <img src={isMobile ? logoMo : logo} alt="clients logo image" />
      </div>
    </div>
  );
};

export default CompanyClients;
