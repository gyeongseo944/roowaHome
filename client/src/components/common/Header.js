import { useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <header className="headerContainer">
        <div className="headerLogo" onClick={() => navigate("/")}>
          ROOWA
        </div>
        <ul className="headerNav">
          <li className="headerNavBtn" onClick={() => navigate("/article")}>
            ABOUT
          </li>
          <li className="headerNavBtn" onClick={() => navigate("/")}>
            ORIGINAL CONTENTS
          </li>
          <li className="headerNavBtn" onClick={() => navigate("/")}>
            CONTENTS MARKETING
          </li>
          <li className="headerNavBtn" onClick={() => navigate("/")}>
            METAVERSE
          </li>
          <li className="headerNavBtn" onClick={() => navigate("/contact")}>
            CONTACT
          </li>
        </ul>
      </header>
      {/* <nav className="hiddenManuContainer">
        <div className="hiddenManuWrapper">
          <ul className="aboutUl">
            <li>루와소개</li>
            <li>언론보도</li>
            <li>공지사항</li>
            <li>채용공고</li>
          </ul>
        </div>
      </nav> */}
    </>
  );
}

export default Header;
