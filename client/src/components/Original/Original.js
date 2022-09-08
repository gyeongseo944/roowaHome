import "./Original.scss";
import Banner from "../common/Banner";
import OriginalPortfolio from "./OriginalPortfolio/OriginalPortfolio";
import OriginalBottom from "./OriginalBottom/OriginalBottom";
import MetaverseYouTube from "../Metaverse/MetaverseYouTube/MetaverseYouTube";
import OriginalExplain from "./OriginalExplain/OriginalExplain";
import OriginalCard from "./OriginalCard/OriginalCard";
import OriginalProject from "./OriginalProject/OriginalProject";
import { useMediaQuery } from "react-responsive";

function Original() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <Banner
        title={"마음을 움직이는 콘텐츠를 만듭니다"}
        subtitle={
          !isMobile
            ? "매력적인 스토리텔링을 통해\n'근거있는' 콘텐츠를 만듭니다."
            : "매력적인\n스토리텔링과\n근거있는 콘텐츠 제작"
        }
        navText={["business", "오리지널 콘텐츠"]}
        src={require(!isMobile
          ? "../../assets/banner/daskBannerOrigin.png"
          : "../../assets/original/bannerOriginal.png")}
      />
      <main className="originMain">
        <div className="originMainContainer">
          <MetaverseYouTube title={"original\ncontents"} src="cfzpznYQ-Tg" />
          <OriginalExplain />
          <OriginalCard />
          <OriginalProject />
          <OriginalPortfolio />
          <OriginalBottom />
        </div>
      </main>
    </>
  );
}

export default Original;
