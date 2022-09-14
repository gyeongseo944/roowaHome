import "./OriginalProject.scss";
import logoZip from "../../../assets/original/logoZip.gif";
import logoZipMo from "../../../assets/original/logoZipMo.gif";
import { useMediaQuery } from "react-responsive";
function OriginalProject() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="OriginalProject">
      <h1>PROJECT</h1>
      <div className="logoContainer">
        <div className="logoItem">
          <img src={isMobile ? logoZipMo : logoZip} alt="Project logos" />
        </div>
      </div>
    </section>
  );
}

export default OriginalProject;
