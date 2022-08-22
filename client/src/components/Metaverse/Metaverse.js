import Banner from "../common/Banner";
import MetaverseTitle from "./MetaverseTitle/MetaverseTitle";
import "./Metaverse.scss";
import MetaverseYouTube from "./MetaverseYouTube/MetaverseYouTube";
import MetaverseGIF from "./MetaverseGIF/MetaverseGIF";
import MetarverseExpansion from "./MetarverseExpansion/MetarverseExpansion";
import MetarverseMarketing from "./MetarverseMarketing/MetarverseMarketing";

function Metaverse() {
  return (
    <>
      <Banner
        title={"콘텐츠 마케팅 서비스 루와"}
        subtitle={"1기업 1메타버스 시대를\n대비하는 가장 확실한 방법"}
        navText={["business", "메타버스 마케팅"]}
        src={require("../../assets/metaverse/opacityBanner.png")}
      />
      <main className="metaverseMain">
        <MetaverseTitle />
        <MetaverseYouTube />
        <MetaverseGIF />
        <MetarverseExpansion />
        <MetarverseMarketing />
      </main>
    </>
  );
}

export default Metaverse;
