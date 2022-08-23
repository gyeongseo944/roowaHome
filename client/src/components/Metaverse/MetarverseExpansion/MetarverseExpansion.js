import { motion } from "framer-motion";
import "./MetarverseExpansion.scss";

function MetarverseExpansion() {
  const variants = {
    offScreen: {
      opacity: 0,
      y: 20,
    },
    onScreen: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3 + 0.1,
        duration: 1,
      },
    }),
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
      <div className="imgGrid">
        <div className="imgGridItem">
          <motion.div
            variants={variants}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true }}
            custom={1}
          >
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
          <motion.div
            variants={variants}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true }}
            custom={2}
          >
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
          <motion.div
            variants={variants}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true }}
            custom={3}
          >
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
          <motion.div
            variants={variants}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{ once: true }}
            custom={4}
          >
            <div className="imgBorder">
              <img
                src={require("../../../assets/metaverse/x287.png")}
                alt="grid item"
              />
            </div>
            <span className="itemTitle">메타버스 마케팅</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default MetarverseExpansion;
