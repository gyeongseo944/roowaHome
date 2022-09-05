import React from "react";
import "./OriginalPortfolio.scss";
import img1 from "../../../assets/original/maxresdefault2.png";
import img2 from "../../../assets/original/maxresdefault.png";
import img3 from "../../../assets/original/maxresdefault5.png";
import img4 from "../../../assets/original/maxresdefault7.png";
import PortfolioImgCard from "../../common/PortfolioImgCard/PortfolioImgCard";
import { Autoplay, FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";

import "swiper/css";
import "swiper/css/scrollbar";
const OriginalPortfolio = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const portfolio = [
    {
      title: "찬또야 어디가",
      contents: "열심히 일한 자, 어디든 떠나라!\n찬또를 위해 준비한 한옥 힐링 여행 콘텐츠",
      img: img1,
      link: "https://youtu.be/cfzpznYQ-Tg",
    },
    {
      title: "장윤정의 와인주락",
      contents: "연예계 대표적인 주력가 장윤정 회장이 각종 회장님들을 만나다! 와인과 음악, 그리고 우리의 이야기가 있는 고품격 토크쇼. ",
      img: img2,
      link: "https://youtu.be/cWTbgqMjSFE",
    },
    {
      title: "하우스테이",
      contents: "외국인 주민들의 힐링을 위해 랄랄과 조나단이\n뭉쳤다! 본격 외국인 주민 인식개선 힐링 상담소.",
      img: img3,
      link: "https://youtu.be/fI2SuXmUUsY",
    },
    {
      title: "안전하고 용맹한 이야기",
      contents: "아이들도! 시민들도! 직원들도! 모두가 쉽고\n재밋게 즐길 수 있는 The. 안전한. 퀴즈!",
      img: img4,
      link: "https://youtu.be/Lk3E3qqxXkI",
    },
  ];
  return (
    <section className="originalPortfolio">
      <div className="portContainer">
        <h1 className="portfolioTitle">
          OUR <br />
          PORTFOLIO
        </h1>
        {isMobile ? (
          <Swiper
            id="originalSwiper"
            speed={4000}
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
                  <div className="originalPortMobile">
                    <img src={img.img} alt="portfolio image" />
                    <h1>{img.title}</h1>
                    <p>{img.contents}</p>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          <div className="imgCardContainer">
            {portfolio && portfolio.map((img, id) => <PortfolioImgCard key={id} title={img.title} contents={img.contents} img={img.img} link={img.link} />)}
          </div>
        )}
      </div>
    </section>
  );
};

export default OriginalPortfolio;
