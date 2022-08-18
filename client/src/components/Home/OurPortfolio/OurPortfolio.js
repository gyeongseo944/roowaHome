import "./OurPortfolio.scss";
import PortfolioSwiper from "./PortfolioSwiper";

function OurPortfolio() {
  return (
    <>
      <section className="portfolio">
        <div className="portfolioContainer">
          <div className="portfolioTitleBox">
            <h1 className="portfolioTitle">{"Our\nPortfolio"}</h1>
            <div className="portfolioShowMore">
              <span>더 알아보기</span>
              <img
                src={require("../../../assets/home/x65.png")}
                alt="더 알아보기"
              />
            </div>
          </div>
          <PortfolioSwiper />
        </div>
      </section>
    </>
  );
}

export default OurPortfolio;
