import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";
import Banner from "../common/Banner";
import "./Contact.scss";

function Contact() {
  // company, name, phone, email, content, path
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: "123",
      name: "123",
      phone1: "111",
      phone2: "222",
      phone3: "333",
      email: "123@naver.com",
      content: "123",
      path: "4",
    },
  });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [pop, setPop] = useState(false);
  /** 라디오 버튼 체인지 이벤트. 글꼴 두께 active 클래스 적용 */
  const onChange = (e) => {
    e.target.parentNode.parentNode.childNodes.forEach((node) => {
      node.classList = "";
    });
    e.target.parentNode.classList = "active";
  };
  /** 유효성 검사 통과시 실행 */
  const onValid = (data) => {
    data.phone = getValues(["phone1", "phone2", "phone3"]).join("-");
    console.log(data);
    setPop(true);
  };
  const onInvalid = () => {
    console.log(errors);
  };
  console.log(errors);

  return (
    <>
      <Banner
        subtitle={
          isMobile
            ? "상담 원하시는\n내용은 빠르게 답변\n드리겠습니다."
            : "상담 원하시는 내용은 빠르게\n답변 드리겠습니다."
        }
        src={isMobile ? require("../../assets/banner/bannerContact.png") : null}
      />
      <main className="contactMain">
        <div className="contactContainer">
          <div className="box1">
            <div className="box1Img">이미지 영역</div>
            <div className="box1Text">
              {!isMobile
                ? "상담을 원하시는 기업 및 개인은 아래 양식으로 내용을 작성하여 의뢰해주시고, 루와와 함께 해보세요."
                : "상담을 원하시는 기업 및 개인은\n아래 양식으로 내용을 작성하여 의뢰해주시고,\n루와와 함께 해보세요."}
            </div>
          </div>
          <div className="formContainer">
            <form onSubmit={handleSubmit(onValid, onInvalid)}>
              <div className="labelBox">
                <label className="label" htmlFor="company">
                  업체명
                </label>
              </div>
              <div className="inputBox">
                <input
                  {...register("company", { required: "필 입력사항 입니다." })}
                  type="text"
                  id="company"
                />
              </div>

              <div className="labelBox">
                <label className="label" htmlFor="name">
                  성함/직책
                </label>
              </div>
              <div className="inputBox">
                <input
                  {...register("name", { required: "필수 입력사항 입니다." })}
                  type="text"
                  id="name"
                />
              </div>

              <div className="labelBox">
                <label className="label" htmlFor="phone">
                  연락처
                </label>
                <span className="labelSub">
                  상세한 견적 안내를 위해 전화 상담을 진행하고 있습니다.
                </span>
              </div>
              <div className="phoneBoxArea">
                <div className="inputBox phone">
                  <input
                    {...register("phone1", {
                      required: "필수 입력사항 입니다.",
                    })}
                    type="text"
                    id="phone"
                  />
                </div>
                <div className="phoneDash"></div>
                <div className="inputBox phone">
                  <input
                    {...register("phone2", {
                      required: "필수 입력사항 입니다.",
                    })}
                    type="text"
                    id="phone"
                  />
                </div>
                <div className="phoneDash"></div>
                <div className="inputBox phone">
                  <input
                    {...register("phone3", {
                      required: "필수 입력사항 입니다.",
                    })}
                    type="text"
                    id="phone"
                  />
                </div>
              </div>

              <div className="labelBox">
                <label className="label" htmlFor="email">
                  이메일 주소
                </label>
                <span className="labelSub">
                  서비스 소개서, 견적서 등을 이메일 주소로 전달드립니다.
                </span>
              </div>
              <div className="inputBox">
                <input
                  {...register("email", {
                    required: "필수 입력사항 입니다.",
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                      message: "정확한 이메일 주소를 입력해주시기 바랍니다.",
                    },
                  })}
                  type="email"
                  id="email"
                />
              </div>

              <div className="labelBox ">
                <label className="label" htmlFor="consult">
                  상담 내용
                </label>
                <span className="labelSub">
                  예산/ 내용/ 기간 등을 작성해주세요.
                </span>
              </div>
              <div className="inputBox textarea">
                <textarea
                  {...register("content", {
                    required: "필수 입력사항 입니다.",
                  })}
                  type="textarea"
                  id="consult"
                />
              </div>

              <div className="labelBox">
                <span className="label">루와를 알게된 경로</span>
                <span className="labelSub">
                  좋은 서비스를 제공해드리기 위해 방문 경로를 수집하고 있습니다.
                </span>
              </div>
              <div className="radioBox">
                <label>
                  <input
                    {...register("path", {
                      required: "필수 입력사항 입니다.",
                    })}
                    value={1}
                    type="radio"
                    onChange={onChange}
                  />
                  네이버검색
                </label>
                <label>
                  <input
                    {...register("path", {
                      required: "필수 입력사항 입니다.",
                    })}
                    value={2}
                    type="radio"
                    onChange={onChange}
                  />
                  네이버검색
                </label>
                <label>
                  <input
                    {...register("path", {
                      required: "필수 입력사항 입니다.",
                    })}
                    value={3}
                    type="radio"
                    onChange={onChange}
                  />
                  네이버검색
                </label>
                <label>
                  <input
                    {...register("path", {
                      required: "필수 입력사항 입니다.",
                    })}
                    value={4}
                    type="radio"
                    onChange={onChange}
                  />
                  네이버검색
                </label>
              </div>

              <div className="submitBtnBox">
                <button className="submitBtn">
                  <span>상담 요청하기</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      {pop && (
        <>
          <div id="overlay"></div>
          <motion.div
            className="popupBox"
            initial={{
              scale: 0,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: 1,
            }}
          >
            <img
              onClick={() => setPop(false)}
              className="exitIcon"
              alt="exitIcon"
              src={require("../../assets/x134.png")}
            />
            <div className="msgBox">
              <span>
                정상적으로 접수 되었습니다.
                <br />
                빠른 시일내에 연락드리겠습니다.
              </span>
            </div>
            <button className="buttonBox" onClick={() => setPop(false)}>
              확인
            </button>
          </motion.div>
        </>
      )}
    </>
  );
}

export default Contact;
