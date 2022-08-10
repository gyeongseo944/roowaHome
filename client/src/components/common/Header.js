import "./Header.scss";

function Header() {
  return (
    <header className="headerContainer">
      <div className="headerLogo">ROOWA</div>
      <ul className="headerNav">
        <li className="headerNavBtn">ABOUT</li>
        <li className="headerNavBtn">ORIGINAL CONTENTS</li>
        <li className="headerNavBtn">CONTENTS MARKETING</li>
        <li className="headerNavBtn">METAVERSE</li>
        <li className="headerNavBtn">CONTACT</li>
      </ul>
    </header>
  );
}

export default Header;
