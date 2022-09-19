import { Autoplay, FreeMode, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./PortfolioSwiper.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

function PortfolioSwiper() {
  const imgData = [
    {
      imgName: "p1.png",
      title: "학교안전체험교육",
      sub: "즐겁게 즐길 수 있는 게임과 같은 형태의 안전 체험 교육 맵",
    },
    {
      imgName: "p2.png",
      title: "광한루원",
      sub: "신선사상이 담겨 있는 춘향전의 무대",
    },
    {
      imgName: "p3.png",
      title: "서울국제어린이 창작영화제",
      sub: "Unity 기반 월드 멀티 플랫폼 게임 VR CHAT를 활용한 실시간 시상식",
    },
    {
      imgName: "p4.png",
      title: "미륵사지",
      sub: "과거와 현재, 미래를 아우르는 미륵사 유적의 시간여행",
    },
    {
      imgName: "p5.png",
      title: "루와 메타버스 포럼",
      sub: "가상공간 ‘루와 컨퍼런스홀’에서 전문가 3인과 함께 실시간 포럼 개최",
    },
    {
      imgName: "p6.png",
      title: "루와 메타버스 포럼맵",
      sub: "메타버스 콘텐츠의 활용과 미래’를 주제로 진행된 메타버스 포럼",
    },
    {
      imgName: "p7.png",
      title: "욱크래프트",
      sub: "농업에 대한 관심도 증대 및 실제 체험이 가능한 맵",
    },
    {
      imgName: "p8.png",
      title: "루와 메타버스 사옥",
      sub: "상담문의, 회의참여 등 누구나 방문가능한 루와 메타버스 사옥",
    },
  ];
  return (
    <Swiper
      id="portfolioSwiper"
      slidesPerView={"auto"}
      spaceBetween={15}
      breakpoints={{
        769: {
          spaceBetween: 30,
        },
        1000: {
          spaceBetween: 40,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      centeredSlides={false}
      scrollbar={(true, { draggable: true })}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Scrollbar, Autoplay]}
    >
      {[...imgData, ...imgData].map((data, index) => {
        const img = require(`../../../assets/metaverse/${data.imgName}`);
        return (
          <SwiperSlide className="portfolioSwiperSlide" key={index}>
            <img
              className="portfolioSwiperSlideImg"
              src={img}
              alt="포트폴리오 리스트"
            />
            <div className="portfolioSlideTitle">{data.title}</div>
            <div className="portfolioSlideSub">{data.sub}</div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PortfolioSwiper;
