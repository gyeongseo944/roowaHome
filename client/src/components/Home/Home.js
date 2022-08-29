import HomeBottom from "./HomeBottom/HomeBottom";
import MainMindMap from "./MainMindMap/MainMindMap";
import MainPoster from "./MainPoster/MainPoster";
import MainVideo from "./MainVideo/MainVideo";
import OurPortfolio from "./OurPortfolio/OurPortfolio";
import WideImage from "./WideImage/WideImage";

function Home() {
  return (
    <main>
      <MainVideo />
      <MainMindMap />
      {/* <MainPoster /> */}
      <OurPortfolio />
      <WideImage />
      <HomeBottom />
    </main>
  );
}

export default Home;
