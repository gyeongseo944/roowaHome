import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import "./MainMindMap.scss";

function MainMindMap() {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 0.3 });

  return (
    <section className="mindMapSection">
      <div className="mindMapContainer">
        <div
          ref={ref}
          className="mindMapWrapper"
          style={{
            width: isInView ? "100%" : "465px",
            height: isInView ? "100%" : "465px",
            transition: "all 0.9s ease",
          }}
        >
          <div className="mindMapCircle">
            <span>metarverse</span>
            <div className="mindMap1 mindMapLine"></div>
            <div className="mindMap1Text mindMapText">Contents</div>
            <div className="mindMap2 mindMapLine"></div>
            <div className="mindMap2Text mindMapText">Event</div>
            <div className="mindMap3 mindMapLine"></div>
            <div className="mindMap3Text mindMapText">Consulting</div>
            <div className="mindMap4 mindMapLine"></div>
            <div className="mindMap4Text mindMapText">Marketing</div>
            <div className="mindMap5 mindMapLine"></div>
            <div className="mindMap5Text mindMapText">Video</div>
            <div className="mindMap6 mindMapLine"></div>
            <div className="mindMap6Text mindMapText">Branding</div>
            <div className="mindMap7 mindMapLine"></div>
            <div className="mindMap7Text mindMapText">Creator</div>
            <div className="mindMap8 mindMapLine"></div>
            <div className="mindMap8Text mindMapText">World Map</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainMindMap;
