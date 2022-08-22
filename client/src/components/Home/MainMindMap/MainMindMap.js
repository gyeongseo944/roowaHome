import "./MainMindMap.scss";

function MainMindMap() {
  return (
    <section className="mindMapSection">
      <div className="mindMapContainer">
        <div className="card">
          <div className="grid"></div>
          <div className="metaverse">
            <h2 className="textGradient">METAVERSE</h2>
          </div>
        </div>
        <div className="bubbles">
          <span style={{ "--id": 0, "--idd": 0 }}>
            <p>Consulting</p>
          </span>
          <span style={{ "--id": 1, "--idd": 7 }}>
            <p>Marketing</p>
          </span>
          <span style={{ "--id": 2, "--idd": 6 }}>
            <p>Video</p>
          </span>
          <span style={{ "--id": 3, "--idd": 5 }}>
            <p>Branding</p>
          </span>
          <span style={{ "--id": 4, "--idd": 4 }}>
            <p>Creator</p>
          </span>
          <span style={{ "--id": 5, "--idd": 3 }}>
            <p>World Map</p>
          </span>
          <span style={{ "--id": 6, "--idd": 2 }}>
            <p>Contents</p>
          </span>
          <span style={{ "--id": 7, "--idd": 1 }}>
            <p>Event</p>
          </span>
        </div>
      </div>
      {/* <svg>
        <filter id="Gooey">
          <feGaussianBlur in="SourceGraphic" />
          <feColorMatrix
            values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 30 -40
          "
          />
        </filter>
      </svg> */}
    </section>
  );
}

export default MainMindMap;
