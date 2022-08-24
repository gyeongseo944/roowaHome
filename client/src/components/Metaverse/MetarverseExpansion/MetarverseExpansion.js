import { motion } from "framer-motion";
import "./MetarverseExpansion.scss";

function MetarverseExpansion() {
  const father = {
    initial: {},
    inView: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const child = {
    initial: {
      opacity: 0,
      y: 20,
    },
    inView: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <section className="metarverseExpansion">
      <div className="expansionTitleBox">
        <div>다양한 방식으로</div>
        <div>메타버스를 활용해</div>
        <div>
          <strong>비즈니스를 확장</strong>할 수 있습니다.
        </div>
      </div>
      <motion.div
        className="imgGrid"
        variants={father}
        initial="initial"
        whileInView="inView"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="imgGridItem">
          <motion.div variants={child}>
            <div className="imgBorder">
              <img
                src={require("../../../assets/metaverse/x307.png")}
                alt="grid item"
              />
            </div>
            <span className="itemTitle">실시간 행사</span>
          </motion.div>
        </div>
        <div className="imgGridItem">
          <motion.div variants={child}>
            <div className="imgBorder">
              <img
                src={require("../../../assets/metaverse/x305.png")}
                alt="grid item"
              />
            </div>
            <span className="itemTitle">온라인 전시</span>
          </motion.div>
        </div>
        <div className="imgGridItem">
          <motion.div variants={child}>
            <div className="imgBorder">
              <img
                src={require("../../../assets/metaverse/x303.png")}
                alt="grid item"
              />
            </div>
            <span className="itemTitle">홍보 브랜딩</span>
          </motion.div>
        </div>
        <div className="imgGridItem">
          <motion.div variants={child}>
            <div className="imgBorder">
              <img
                src={require("../../../assets/metaverse/x287.png")}
                alt="grid item"
              />
            </div>
            <span className="itemTitle">메타버스 마케팅</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default MetarverseExpansion;
