import React from "react";
import "./MetaversePortfolio.scss";
import PortfolioImgCard from "../../common/PortfolioImgCard/PortfolioImgCard";
import img1 from "../../../assets/metaverse/x8.png";
import img2 from "../../../assets/metaverse/x9.png";
import { useInView } from "framer-motion";

const MetaversePortfolio = () => {
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
        <div className="imgCardContainer">
          {portfolio && portfolio.map((img, id) => <PortfolioImgCard key={id} title={img.title} contents={img.contents} img={img.img} />)}
        </div>
      </div>
    </section>
  );
};

export default MetaversePortfolio;
