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
  const subtitle = "루와에서 함께\n_____ _____ 해보세요";
  const mobileSubtitle = "루와에서\n함께__\n해보세요";
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const sampleData = [
    {
      url: 1,
      smallTitle: "Metaverse Contents Marketing",
      bigTitle: "메타버스 콘텐츠 마케팅",
      Price: "별도 협의",
    },
    {
      url: 1,
      smallTitle: "Contents Marketing Service ",
      bigTitle: "콘텐츠 마케팅 서비스",
      Price: "별도 협의",
    },
    {
      url: 1,
      smallTitle: "Metaverse Contents Marketing",
      bigTitle: "메타버스 콘텐츠 마케팅",
      Price: "별도 협의",
    },
    {
      url: 1,
      smallTitle: "Contents Marketing Service ",
      bigTitle: "콘텐츠 마케팅 서비스",
      Price: "별도 협의",
    },
    {
      url: 1,
      smallTitle: "Metaverse Contents Marketing",
      bigTitle: "메타버스 콘텐츠 마케팅",
      Price: "별도 협의",
    },
    {
      url: 1,
      smallTitle: "Contents Marketing Service ",
      bigTitle: "콘텐츠 마케팅 서비스",
      Price: "별도 협의",
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
            <Link to={`/pay/${1}`} className="card">
              <div className="cardImage"></div>
              <div className="cardTitle">
                <div className="cardSmallTitle">
                  Metaverse Cotents Marketing
                </div>
                <div className="cardBigTitle">메타버스 콘텐츠 마케팅</div>
                <div className="cardPrice">별도 협의</div>
              </div>
            </Link>
            <Link to={`/pay/${1}`} className="card">
              <div className="cardImage"></div>
              <div className="cardTitle">
                <div className="cardSmallTitle">Cotents Marketing Service</div>
                <div className="cardBigTitle">콘텐츠 마케팅 서비스</div>
                <div className="cardPrice">별도 협의</div>
              </div>
            </Link>
            <Link to={`/pay/${1}`} className="card">
              <div className="cardImage"></div>
              <div className="cardTitle">
                <div className="cardSmallTitle">Original Cotents</div>
                <div className="cardBigTitle">오리지널 콘텐츠</div>
                <div className="cardPrice">별도 협의</div>
              </div>
            </Link>
            <Link to={`/pay/${1}`} className="card">
              <div className="cardImage"></div>
              <div className="cardTitle">
                <div className="cardSmallTitle">Original Cotents</div>
                <div className="cardBigTitle">오리지널 콘텐츠</div>
                <div className="cardPrice">별도 협의</div>
              </div>
            </Link>
            <Link to={`/pay/${1}`} className="card">
              <div className="cardImage"></div>
              <div className="cardTitle">
                <div className="cardSmallTitle">Original Cotents</div>
                <div className="cardBigTitle">오리지널 콘텐츠</div>
                <div className="cardPrice">별도 협의</div>
              </div>
            </Link>
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
                const img = require(`../../assets/pay/payCard.png`);
                return (
                  <SwiperSlide className="paySwiperSlide" key={index}>
                    <Link to={`/pay`} className="card">
                      <img src={img} alt={data.bigTitle} />
                      <div className="cardTitle">
                        <div className="cardSmallTitle">{data.smallTitle}</div>
                        <div className="cardBigTitle">{data.bigTitle}</div>
                        <div className="cardPrice">{data.Price}</div>
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
