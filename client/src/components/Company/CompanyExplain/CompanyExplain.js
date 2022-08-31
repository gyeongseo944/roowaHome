import "./CompanyExplain.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function CompanyExplain() {
  const ref = useRef();
  const ref2 = useRef();
  const isInView = useInView(ref, {
    margin: "0px 0px -20% 0px",
  });
  const isInView2 = useInView(ref2, {
    margin: "0px 0px -20% 0px",
  });

  return (
    <section className="companyExplain">
      <div className="block">
        <div className="imgBox">
          <motion.div
            className="imgWrapper"
            animate={
              isInView && {
                right: "-100%",
                transition: { duration: 1 },
              }
            }
          ></motion.div>
          <img
            ref={ref}
            src={require("../../../assets/company/x15.png")}
            alt="이루어, 드림"
          />
        </div>
        <div className="textBox">
          <div className="titleText">이루어, 드림.</div>
          <div className="subText">
            루와는 <strong>‘마음을 움직이는 콘텐츠’</strong> 를 만든다는 슬로건
            아래 고객사의 목표와 꿈을, 이루어드리는 기업입니다.
          </div>
        </div>
      </div>
      <div className="block">
        <div className="textBox">
          <div className="titleText">핵심가치 세가지</div>
          <div className="subText">
            루와 구성원들은 세 가지 핵심가치를 중심으로 사고하고, 토론하며,
            성장해 나가고 있습니다.
          </div>
        </div>
        <div className="imgBox">
          <motion.div
            className="imgWrapper"
            animate={
              isInView2 && {
                left: "-100%",
                transition: { duration: 1 },
              }
            }
            viewport={{ margin: "0px 0px -20% 0px", once: true }}
          ></motion.div>
          <img
            ref={ref2}
            src={require("../../../assets/company/x20.png")}
            alt="이루어, 드림"
          />
        </div>
      </div>
      <div className="block around">
        <div className="list">
          <div className="number">01</div>
          <div className="listTitle">동반성장</div>
          <div className="listSub">
            성장파트너인 고객사의 성장이 곧 루와의 성장입니다.
          </div>
        </div>
        <div className="list">
          <div className="number">02</div>
          <div className="listTitle">트렌드리더</div>
          <div className="listSub">
            {
              "시장의 트렌드를 빠르게 읽으며,\n최고의 마케팅 솔루션을 제공하겠습니다."
            }
          </div>
        </div>
        <div className="list">
          <div className="number">03</div>
          <div className="listTitle">신뢰와 존중</div>
          <div className="listSub">
            고객과의 신뢰와 존중을 바탕으로 책임감을 갖고 서비스를
            제공하겠습니다.
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompanyExplain;
