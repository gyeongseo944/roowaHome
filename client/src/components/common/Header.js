import { useNavigate } from "react-router-dom";
import "./Header.scss";

function Header() {
  const navigate = useNavigate();

  return (
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
  );
}

export default Header;
