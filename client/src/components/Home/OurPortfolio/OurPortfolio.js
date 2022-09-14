import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
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
              <Link to="/metaverse">
                <div className="portfolioShowMore">
                  <span>더 알아보기</span>
                  <img
                    src={require("../../../assets/home/x65.png")}
                    alt="더 알아보기"
                  />
                </div>
              </Link>
            )}
          </div>
          <PortfolioSwiper />
          {isMobile && (
            <Link to="/metaverse">
              <div className="portfolioShowMore">
                <span>더 알아보기</span>
                <img
                  src={require("../../../assets/home/x65.png")}
                  alt="더 알아보기"
                />
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

export default OurPortfolio;
