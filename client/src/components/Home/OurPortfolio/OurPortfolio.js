import { useMediaQuery } from "react-responsive";
import "./OurPortfolio.scss";
import PortfolioSwiper from "./PortfolioSwiper";

function OurPortfolio() {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <>
      <section className="portfolio">
        <div className="portfolioContainer">
          <div className="portfolioTitleBox">
            <h1 className="portfolioTitle">{"Our\nPortfolio"}</h1>
            {!isMobile && (
              <div className="portfolioShowMore">
                <span>더 알아보기</span>
                <img
                  src={require("../../../assets/home/x65.png")}
                  alt="더 알아보기"
                />
              </div>
            )}
          </div>
          <PortfolioSwiper />
          {isMobile && (
            <div className="portfolioShowMore">
              <span>더 알아보기</span>
              <img
                src={require("../../../assets/home/x65.png")}
                alt="더 알아보기"
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default OurPortfolio;
