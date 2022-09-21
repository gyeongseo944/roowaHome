import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useForm } from "react-hook-form";
import Banner from "../common/Banner";
import "./Contact.scss";
import axios from "axios";

function Contact() {
  // company, name, phone, email, content, path
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: "",
      name: "",
      phone1: "",
      phone2: "",
      phone3: "",
      email: "",
      content: "",
      path: "",
    },
  });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [pop, setPop] = useState(false);
  const radioOption = ["네이버검색", "구글검색", "지인추천", "SNS 및 기타"];
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
    (async () => {
      try {
        const response = await axios.post(
          "https://daldalfr1.gabia.io/send_mail",
          {
            subject: `${data.company} / ${data.name} 상담요청`,
            content: `<p style="font-size: 20px">상담 요청 접수 내용</P>
          <br></br>
          <p style="font-size: 20px">업체명 : ${data.company}</p>
          <br></br>
          <p style="font-size: 20px">성함 / 직책 : ${data.name}</p>
          <br></br>
          <p style="font-size: 20px">연락처 : ${data.phone}</p>
          <br></br>
          <p style="font-size: 20px">이메일 주소 : ${data.email}</p>
          <br></br>
          <p style="font-size: 20px">루와를 알게된 경로 : ${data.path}</p>
          <br></br>
          <p style="font-size: 20px">상담 내용 : ${data.content}</p>
          `,
          }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    })();

    setPop(true);
  };

  return (
    <>
      <Banner
        subtitle={
          isMobile
            ? "상담 원하시는\n내용은 빠르게 답변\n드리겠습니다."
            : "상담 원하시는 내용은 빠르게\n답변 드리겠습니다."
        }
        src={require(!isMobile
          ? "../../assets/banner/daskBannerContact.png"
          : "../../assets/banner/bannerContact.png")}
      />
      <main className="contactMain">
        <div className="contactContainer">
          <div className="box1">
            <img
              src={require("../../assets/contact/contactImg.png")}
              alt="상담문의"
              className="box1Img"
            />
            <div className="box1Text">
              {!isMobile
                ? "상담을 원하시는 기업 및 개인은 아래 양식으로 내용을 작성하여 의뢰해주시고, 루와와 함께 해보세요."
                : "상담을 원하시는 기업 및 개인은\n아래 양식으로 내용을 작성하여 의뢰해주시고,\n루와와 함께 해보세요."}
            </div>
          </div>
          <div className="formContainer">
            <form onSubmit={handleSubmit(onValid)}>
              <div className="labelBox">
                <label className="label" htmlFor="company">
                  업체명
                </label>
                {errors?.company && (
                  <div className="errorMessage">{errors.company.message}</div>
                )}
              </div>
              <div className="inputBox">
                <input
                  {...register("company", {
                    required: "필수 입력사항 입니다.",
                  })}
                  type="text"
                  id="company"
                />
              </div>

              <div className="labelBox">
                <label className="label" htmlFor="name">
                  성함/직책
                </label>
                {errors?.name && (
                  <div className="errorMessage">{errors.name.message}</div>
                )}
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
                {(errors?.phone1 || errors?.phone2 || errors?.phone3) && (
                  <div className="errorMessage">{"필수 입력사항 입니다."}</div>
                )}
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
                {errors?.email && (
                  <div className="errorMessage">{errors.email.message}</div>
                )}
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
                {errors?.content && (
                  <div className="errorMessage">{errors.content.message}</div>
                )}
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
                {errors?.path && (
                  <div className="errorMessage">{errors.path.message}</div>
                )}
              </div>
              <div className="radioBox">
                {radioOption.map((v, i) => (
                  <label key={i}>
                    <input
                      {...register("path", {
                        required: "필수 입력사항 입니다.",
                      })}
                      value={v}
                      type="radio"
                      onChange={onChange}
                    />
                    {v}
                  </label>
                ))}
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
