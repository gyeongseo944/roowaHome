import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import "./OriginalExplain.scss";

const variants = {
  initial: { width: "100%" },
  whileInView: {
    width: "0%",
    transition: { duration: 0.5 },
  },
};

function OriginalExplain() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <section className="originalExplain">
      <div className="textBox">
        {!isMobile ? (
          <>
            {
              "루와는 콘텐츠 이전에 시청자의 마음을 먼저 들여다봅니다.\n그들의 마음을 사로잡기 위해\n"
            }
            <strong>매력적인 스토리텔링</strong>
            {"을 기획합니다.\n\n그들의 "}
            <strong>마음</strong>을 움직이기 위해 <strong>양질의 콘텐츠</strong>
            를 제작합니다.
          </>
        ) : (
          <>
            {
              "루와는 콘텐츠 이전에\n시청자의 마음을 먼저 들여다봅니다.\n그들의 마음을 사로잡기 위해\n"
            }
            <strong>매력적인 스토리텔링</strong>
            {"을 기획합니다.\n\n그들의 "}
            <strong>마음</strong>
            {"을 움직이기 위해\n"}
            <strong>양질의 콘텐츠</strong>
            {"를 제작합니다."}
          </>
        )}
      </div>

      <div className="imgBox">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>
        <img
          src={require("../../../assets/original/x15.png")}
          alt="오리지널 콘텐츠"
        />
      </div>

      <div className="textBox">
        루와는 <strong>오리지널 콘텐츠 제작을 위한 시스템을 구축</strong>
        했습니다.
        <br />
        <br />
        <strong>내부 스튜디오</strong> 및{" "}
        <strong>다수의 협력 스튜디오를 보유</strong>하고 있으며
        <br />
        <strong>기획, 촬영, 편집, 마케팅, 디자인</strong> 등의
        <br />
        모든 제작 과정을 수행하는 확실한 <strong>전문가</strong>들이 협력하며
        <br />
        프로젝트를 진행합니다.
      </div>
      <div className="bottomImg">
        <motion.div
          variants={variants}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.5 }}
        ></motion.div>
        <img
          src={require("../../../assets/original/x19.png")}
          alt="오리지널 콘텐츠"
        />
      </div>
    </section>
  );
}

export default OriginalExplain;
