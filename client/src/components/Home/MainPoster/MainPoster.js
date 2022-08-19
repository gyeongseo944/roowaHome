import "./MainPoster.scss";

function MainPoster() {
  return (
    <section className="mainPoster">
      <img
        className="mainPosterContainer"
        src={require("../../../assets/home/homeBottom/mainPoster.png")}
        alt="포럼 포스터"
      />
    </section>
  );
}

export default MainPoster;
