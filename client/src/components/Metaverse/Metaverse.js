import Banner from "../common/Banner";
import "./Metaverse.scss";
import MetaverseYouTube from "./MetaverseYouTube/MetaverseYouTube";
import MetaverseGIF from "./MetaverseGIF/MetaverseGIF";
import MetarverseExpansion from "./MetarverseExpansion/MetarverseExpansion";
import MetarverseMarketing from "./MetarverseMarketing/MetarverseMarketing";
import MetaverseQR from "./MetaverseQR/MetaverseQR";
import MetaverseProcess from "./MetaverseProcess/MetaverseProcess";
import MetaversePortfolio from "./MetaversePortfolio/MetaversePortfolio";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

function Metaverse() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <>
      <Banner
        title={"콘텐츠 마케팅 서비스 루와"}
        subtitle={
          !isMobile
            ? "1기업 1메타버스 시대를\n대비하는 가장 확실한 방법"
            : "1기업 1메타버스\n시대를 대비하는\n가장 확실한 방법"
        }
        navText={["business", "메타버스 마케팅"]}
        src={require(!isMobile
          ? "../../assets/metaverse/opacityBanner.png"
          : "../../assets/banner/bannerMetaverse.png")}
      />
      <main className="metaverseMain">
        <MetaverseYouTube
          title="metaverse marketing contents"
          src="iubVXEjw8lw"
        />
        <MetaverseGIF />
        <MetarverseExpansion />
        <MetarverseMarketing />
        <MetaverseProcess />
        <MetaversePortfolio />
        <MetaverseQR />
      </main>
    </>
  );
}

export default Metaverse;
