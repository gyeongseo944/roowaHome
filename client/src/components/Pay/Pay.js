import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import { Autoplay, FreeMode, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Banner from "../common/Banner";
import "./Pay.scss";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";

function Pay() {
  const subtitle = "루와가\n이루어 드립니다";
  const mobileSubtitle = "루와가\n이루어\n드립니다";
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const sampleData = [
    {
      url: 1,
      smallTitle: "Metaverse Contents Marketing",
      bigTitle: "메타버스 콘텐츠 마케팅",
      price: "별도 협의",
      imgSrc: "1.png",
    },
    {
      url: 2,
      smallTitle: "Contents Marketing Service ",
      bigTitle: "콘텐츠 마케팅 서비스",
      price: "별도 협의",
      imgSrc: "2.png",
    },
    {
      url: 3,
      smallTitle: "Original Cotents",
      bigTitle: "오리지널 컨텐츠",
      price: "별도 협의",
      imgSrc: "3.png",
    },
  ];

  return (
    <>
      <Banner
        title="루와 서비스 결제"
        subtitle={!isMobile ? subtitle : mobileSubtitle}
        src={require(!isMobile
          ? "../../assets/banner/x2af718a2b.png"
          : "../../assets/banner/bannerPay.png")}
      />
      <main className="payMain">
        {!isMobile ? (
          <div className="payContainer">
            {sampleData.map((data, index) => (
              <Link to={`/pay/${data.url}`} className="card" key={index}>
                <img
                  className="cardImage"
                  src={require(`../../assets/pay/${data.imgSrc}`)}
                  alt={data.bigTitle}
                />
                <div className="cardTitle">
                  <div className="cardSmallTitle">{data.smallTitle}</div>
                  <div className="cardBigTitle">{data.bigTitle}</div>
                  <div className="cardPrice">{data.price}</div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <>
            <div className="title">{"our\nservice"}</div>
            <Swiper
              id="paySwiper"
              slidesPerView={"auto"}
              spaceBetween={40}
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
              {sampleData.map((data, index) => {
                return (
                  <SwiperSlide className="paySwiperSlide" key={index}>
                    <Link to={`/pay/${data.url}`} className="card">
                      <img
                        src={require(`../../assets/pay/${data.imgSrc}`)}
                        alt={data.bigTitle}
                      />
                      <div className="cardTitle">
                        <div className="cardSmallTitle">{data.smallTitle}</div>
                        <div className="cardBigTitle">{data.bigTitle}</div>
                        <div className="cardPrice">{data.price}</div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </>
        )}
      </main>
    </>
  );
}

export default Pay;
