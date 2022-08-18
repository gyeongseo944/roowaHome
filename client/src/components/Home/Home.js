import "./Home.scss";
import HomeBottom from "./HomeBottom/HomeBottom";
import MainVideo from "./MainVideo/MainVideo";
import OurPortfolio from "./OurPortfolio/OurPortfolio";
import WideImage from "./WideImage/WideImage";

function Home() {
  return (
    <main>
      <MainVideo />
      <div className="homeBanner">
        <h1 className="homeBannerText">
          We
          <br />
          Create
          <br />
          Emotional
          <br />
          Content
        </h1>
      </div>
      <OurPortfolio />
      <WideImage />
      <HomeBottom />
    </main>
  );
}

export default Home;
