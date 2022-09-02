import React from "react";
import "./MetaversePortfolio.scss";
import PortfolioImgCard from "../../common/PortfolioImgCard/PortfolioImgCard";
import img1 from "../../../assets/metaverse/x8.png";
import img2 from "../../../assets/metaverse/x9.png";
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
      title: "미륵사지",
      contents: "과거와 현재, 미래를 아우르는 \n미륵사 유적의 시간여행",
      img: img1,
    },
    {
      title: "미륵사지",
      contents: "과거와 현재, 미래를 아우르는 \n미륵사 유적의 시간여행",
      img: img2,
    },
    {
      title: "미륵사지",
      contents: "과거와 현재, 미래를 아우르는 \n미륵사 유적의 시간여행",
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
            speed={4000}
            // breakpoints={{
            //   1660: {
            //     slidesPerView: 4,
            //   },
            //   760: {
            //     slidesPerView: 3,
            //   },
            // }}

            slidesPerView="auto"
            spaceBetween={30}
            centeredSlides={false}
            scrollbar={(true, { draggable: true })}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              cancelable: false,
            }}
            slidesOffsetAfter={30}
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
