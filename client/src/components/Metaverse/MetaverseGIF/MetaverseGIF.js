import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "./MetaverseGIF.scss";

function MetaverseGIF() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const variants = {
    initial: { left: "0vw" },
    animate: { left: "100vw", transition: { duration: 1 } },
  };
  const variantsRight = {
    initial: { right: "0vw" },
    animate: { right: "100vw", transition: { duration: 1 } },
  };

  return (
    <section className="metarverseGIF">
      <div className="metaverseExplanation">
        <span>
          {"루와의 메타버스 마케팅은\n가장 클라이언트의 목적에 부합하는\n"}
          <strong>메타버스 콘셉트</strong>와{" "}
          <strong>월드맵 기획, 제작, 브렌디드 굿즈</strong>
          {"를 포함한\n모든 활용과 "}
          <strong>홍보 서비스</strong>를 제공합니다
        </span>
      </div>
      <div className="metarverseGIFLine">
        <motion.div
          className="imgWrapper"
          variants={variants}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.4, once: true }}
        ></motion.div>
        <div className="metarverseGIFBlock GIFBlock1">
          <img
            src={require("../../../assets/metaverse/metaGIF1.gif")}
            alt="GIF 이미지"
          />
        </div>
        <div className="metarverseGIFBlock GIFBlock2">
          <div className="GIFSub">가장 파급력 있는 마케팅 트렌드</div>
          <div className="GIFTitle">메타버스 브랜딩</div>
          <div className="GIFExplains">
            {!isMobile
              ? "자사의 브랜드와 비즈니스를 메타버스 월드맵과 건축물, 굿즈 아이템으로 표현해보세요. 유저들이 즐기고, 콘텐츠를 제작하는데 활용할 수 있는 메타버스는 친숙하고 세련된 브랜드를 구축하는 가장 좋은 방식입니다."
              : "자사의 브랜드와 비즈니스를 메타버스 월드맵과 건축물,\n굿즈 아이템으로 표현해보세요.\n유저들이 즐기고, 콘텐츠를 제작하는데\n활용할 수 있는 메타버스는\n친숙하고 세련된 브랜드를 구축하는 가장 좋은 방식입니다."}
          </div>
        </div>
      </div>
      <div className="metarverseGIFLine">
        <div className="metarverseGIFBlock GIFBlock3">
          <div className="GIFSub">
            공간과 접근성의 한계를 벗어난 비즈니스 수단
          </div>
          <div className="GIFTitle">메타버스 이벤트</div>
          <div className="GIFExplains">
            {!isMobile
              ? "박람회, 온라인 전시부터 실시간 행사까지. 메타버스를 활용하면 공간의 제약을 받지 않고 온라인으로 다양한 관계를 형성하고 니즈를 해결할 수 있습니다. 화상대화와 영상 시청, OX 퀴즈와 같은 온라인 게임까지 특별한 메타버스 경험을 만들어보세요"
              : "박람회, 온라인 전시부터 실시간 행사까지.\n메타버스를 활용하면 공간의 제약을 받지 않고 온라인으로\n다양한 관계를 형성하고 니즈를 해결할 수 있습니다.\n화상대화와 영상 시청, OX 퀴즈와 같은 온라인 게임까지\n특별한 메타버스 경험을 만들어보세요"}
          </div>
        </div>
        <motion.div
          className="imgWrapper"
          variants={variantsRight}
          initial="initial"
          whileInView="animate"
          viewport={{ amount: 0.4, once: true }}
        ></motion.div>
        <div className="metarverseGIFBlock GIFBlock4">
          <img
            src={require("../../../assets/metaverse/metaGIF2.gif")}
            alt="GIF 이미지"
          />
        </div>
      </div>
    </section>
  );
}

export default MetaverseGIF;
