import "./Home.scss";
import MainVideo from "./MainVideo/MainVideo";

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
    </main>
  );
}

export default Home;
