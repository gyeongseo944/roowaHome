import React from "react";
import "./MetaversePortfolio.scss";
import PortfolioImgCard from "../../common/PortfolioImgCard/PortfolioImgCard";
import img1 from "../../../assets/metaverse/p1.png";
import img2 from "../../../assets/metaverse/p2.png";
import img3 from "../../../assets/metaverse/p3.png";
import img4 from "../../../assets/metaverse/p4.png";
import img5 from "../../../assets/metaverse/p5.png";
import img6 from "../../../assets/metaverse/p6.png";
import img7 from "../../../assets/metaverse/p7.png";
import img8 from "../../../assets/metaverse/p8.png";

import { Autoplay, FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/scrollbar";

const MetaversePortfolio = () => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  const portfolio = [
    {
      title: "학교안전체험교육",
      contents: "즐겁게 즐길 수 있는 게임과 같은 형태의 안전 체험 교육 맵",
      img: img8,
    },
    {
      title: "광한루원",
      contents: "신선사상이 담겨 있는 춘향전의 무대",
      img: img1,
    },
    {
      title: "서울국제어린이 창작영화제",
      contents: "Unity기반 월드 멀티 플랫폼 게임 VR CHAT을 활용한 실시간 시상식",
      img: img2,
    },
    {
      title: "미륵사지",
      contents: "과거와 현재, 미래를 아우르는 \n미륵사 유적의 시간여행",
      img: img1,
    },
    {
      title: "미륵사지",
      contents: "과거와 현재, 미래를 아우르는 \n미륵사 유적의 시간여행",
      img: img1,
    },
    {
      title: "미륵사지",
      contents: "과거와 현재, 미래를 아우르는 \n미륵사 유적의 시간여행",
      img: img1,
    },
  ];
  return (
    <section className="metaversePortfolio">
      <div className="portContainer">
        <h1 className="portfolioTitle">
          OUR <br />
          PORTFOLIO
        </h1>
        {isMobile ? (
          <Swiper
            id="metaverseSwiper"
            speed={6000}
            slidesPerView="auto"
            spaceBetween={30}
            centeredSlides={false}
            scrollbar={(true, { draggable: true })}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              cancelable: false,
            }}
            freeMode={true}
            slidesOffsetAfter={30}
            slidesOffsetBefore={30}
            modules={[FreeMode, Scrollbar, Autoplay]}
          >
            {portfolio &&
              portfolio.map((img, id) => (
                <SwiperSlide key={id}>
                  <div className="portfolioImgMobile">
                    <img src={img.img} alt="portfolio image" />
                    <h1>{img.title}</h1>
                    <p>{img.contents}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          <div className="imgCardContainer">
            {portfolio && portfolio.map((img, id) => <PortfolioImgCard key={id} title={img.title} contents={img.contents} img={img.img} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default MetaversePortfolio;
