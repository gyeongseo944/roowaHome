import { Autoplay, FreeMode, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import "./PortfolioSwiper.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

function PortfolioSwiper() {
  const imgData = [
    {
      imgName: "x10ec39549.png",
      title: "미륵사지",
      sub: "과거와 현재, 미래를 아우르는 미륵사 유적의 시간여행",
    },
    {
      imgName: "x2e1011952.png",
      title: "학교안전체험교육",
      sub: "과거와 현재, 미래를 아우르는 미륵사 유적의 시간여행",
    },
    {
      imgName: "x3299b6add.png",
      title: "용산공예관",
      sub: "과거와 현재, 미래를 아우르는 미륵사 유적의 시간여행",
    },
    {
      imgName: "x41f991006.png",
      title: "용산공예관",
      sub: "과거와 현재, 미래를 아우르는 미륵사 유적의 시간여행",
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
        const img = require(`../../../assets/home/PortfolioSwiper/${data.imgName}`);
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
