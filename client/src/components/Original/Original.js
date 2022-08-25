import "./Original.scss";
import Banner from "../common/Banner";
import OriginalYoutube from "./OriginalYoutube/OriginalYoutube";

function Original() {
  return (
    <>
      <Banner
        title={"마음을 움직이는 콘텐츠를 만듭니다"}
        subtitle={"매력적인 스토리텔링을 통해\n'근거있는' 콘텐츠를 만듭니다."}
        navText={["business", "오리지널 콘텐츠"]}
        src={require("../../assets/metaverse/opacityBanner.png")}
      />
      <main className="originMain">
        <OriginalYoutube />
      </main>
    </>
  );
}

export default Original;
