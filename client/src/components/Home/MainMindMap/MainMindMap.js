import "./MainMindMap.scss";
import react, { useEffect, useRef } from "react";
import { useInView } from "framer-motion";

function MainMindMap() {
  const ref = useRef();
  const isInView = useInView(ref);
  useEffect(() => {
    if (isInView) {
      if (!ref.current.classList.contains("mindMapContainer")) {
        ref.current.classList.add("mindMapContainer");
      }
    }
  }, [isInView]);

  return (
    <section className="mindMapSection">
      <div className="" ref={ref}>
        <div className="card">
          <div className="grid"></div>
          <div className="metaverse">
            <h2 className="textGradient">METAVERSE</h2>
          </div>
        </div>
        <div className="bubbles">
          <span style={{ "--id": 0, "--idd": 0, "--s": 0 }}>
            <p>Consulting</p>
          </span>
          <span style={{ "--id": 1, "--idd": 7, "--s": 0 }}>
            <p>Marketing</p>
          </span>
          <span style={{ "--id": 2, "--idd": 6, "--s": 2 }}>
            <p>Video</p>
          </span>
          <span style={{ "--id": 3, "--idd": 5, "--s": 1 }}>
            <p>Branding</p>
          </span>
          <span style={{ "--id": 4, "--idd": 4, "--s": 0 }}>
            <p>Creator</p>
          </span>
          <span style={{ "--id": 5, "--idd": 3, "--s": 2 }}>
            <p>World Map</p>
          </span>
          <span style={{ "--id": 6, "--idd": 2, "--s": 2.5 }}>
            <p>Contents</p>
          </span>
          <span style={{ "--id": 7, "--idd": 1, "--s": 1 }}>
            <p>Event</p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default MainMindMap;
