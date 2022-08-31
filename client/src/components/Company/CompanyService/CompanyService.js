import React from "react";
import "./CompanyService.scss";

const CompanyService = () => {
  const serviceDetail = [
    {
      title: "뉴미디어 콘텐츠",
      description: ["유튜브 오리지널 콘텐츠 제작", "비디오 커머스 영상 기획 및 제작", "모션 그래픽 영상 제작", "라이브 영상 기획 및 제작,송출"],
    },
    {
      title: "교육 콘텐츠",
      description: ["크리에이터 특강,멘토링 프로그램"],
    },
    {
      title: "온라인 마케팅 콘텐츠",
      description: [
        "제품 상세페이지 기획 및 제작",
        "쇼핑몰 & 랜딩페이지 제작",
        "SNS 채널 운영 및 관리 \n(블로그, 인스타그램, 메타버스 등)",
        "광고 전략 수립 및 진행\n(GDN,네이버,페이스북 등)",
        "제품 이미지 촬영",
      ],
    },
    {
      title: "",
      description: [],
    },
    {
      title: "",
      description: [],
    },
  ];
  return (
    <div className="serviceContainer">
      <div className="serviceTitle">
        <h1>루와의 서비스</h1>
        <p>
          루와는 <span>콘텐츠 마케팅 서비스</span>를 통해 고객사의 목표를 이루어드립니다.
        </p>
      </div>
      <div className="serviceDetailContainer"></div>
    </div>
  );
};

export default CompanyService;
