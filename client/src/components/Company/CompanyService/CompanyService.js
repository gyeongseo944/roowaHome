import React, { useEffect, useRef, useState } from "react";
import "./CompanyService.scss";
import { Autoplay, FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/scrollbar";

const CompanyService = () => {
  const isBigScreen = useMediaQuery({ maxWidth: 1800 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [Slide, setSlide] = useState(false);
  const ref = useRef();
  useEffect(() => {
    setSlide(isBigScreen);
  }, [isBigScreen]);

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
      title: "온라인 마케팅\n콘텐츠",
      description: [
        "제품 상세페이지 기획 및 제작",
        "쇼핑몰 & 랜딩페이지 제작",
        "SNS 채널 운영 및 관리 \n  (블로그, 인스타그램, 메타버스 등)",
        "광고 전략 수립 및 진행\n  (GDN,네이버,페이스북 등)",
        "제품 이미지 촬영 ∙ 2D 버추얼",
      ],
    },
    {
      title: "메타버스 마케팅",
      description: ["유튜브 오리지널 콘텐츠 제작", "비디오 커머스 영상 기획 및 제작", "모션 그래픽 영상 제작", "라이브 영상 기획 및 제작,송출"],
    },
    {
      title: "웹 ∙ 앱 개발 서비스",
      description: ["유튜브 오리지널 콘텐츠 제작", "비디오 커머스 영상 기획 및 제작", "모션 그래픽 영상 제작", "라이브 영상 기획 및 제작,송출"],
    },
  ];
  return (
    <div className="serviceContainer">
      <div className="serviceTitle">
        <h1>루와의 서비스</h1>
        {isMobile ? (
          <p>
            루와는 콘텐츠 마케팅 서비스를 통해 고객사의 목표를 <br />
            이루어드립니다.
          </p>
        ) : (
          <p>
            루와는 <span>콘텐츠 마케팅 서비스</span>를 통해 고객사의 목표를 이루어드립니다.
          </p>
        )}
      </div>
      {Slide ? (
        <Swiper
          id="serviceSwiper"
          speed={8000}
          slidesPerView={"auto"}
          spaceBetween={20}
          centeredSlides={false}
          scrollbar={(true, { draggable: true })}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          freeMode={true}
          modules={[FreeMode, Scrollbar, Autoplay]}
        >
          {serviceDetail &&
            serviceDetail.map((detail, id) => (
              <SwiperSlide key={id}>
                <div className="detailItem">
                  <div className="itemTitleWrap">
                    <div className="itemTitle">{detail.title}</div>
                  </div>
                  {detail.description.map((desc, id) => (
                    <p className="detailDescription" key={id}>
                      &middot; {desc}
                    </p>
                  ))}
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      ) : (
        <div className="serviceDetailContainer" ref={ref}>
          {serviceDetail &&
            serviceDetail.map((detail, id) => (
              <div className="detailItem" key={id}>
                <div className="itemTitleWrap">
                  <div className="itemTitle">{detail.title}</div>
                </div>
                {detail.description.map((desc, id) => (
                  <p className="detailDescription" key={id}>
                    &middot; {desc}
                  </p>
                ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default CompanyService;
