import "./OriginalProject.scss";

function OriginalProject() {
  return (
    <section className="OriginalProject">
      <h1>PROJECT</h1>
      <div className="logoContainer">
        <div className="logoItem">
          <img src={require("../../../assets/original/logo1.png")} alt="Project logos" />
        </div>
        <div className="logoItem">
          <img src={require("../../../assets/original/logo2.png")} alt="Project logos" />
        </div>
        <div className="logoItem">
          <img src={require("../../../assets/original/logo3.png")} alt="Project logos" />
        </div>
        <div className="logoItem">
          <img src={require("../../../assets/original/logo4.png")} alt="Project logos" />
        </div>
        <div className="logoItem">
          <img src={require("../../../assets/original/logo5.png")} alt="Project logos" />
        </div>
        <div className="logoItem">
          <img src={require("../../../assets/original/logo6.png")} alt="Project logos" />
        </div>
      </div>
    </section>
  );
}

export default OriginalProject;
