import { useState } from "react";
import Banner from "../common/Banner";
import "./Contact.scss";

function Contact() {
  const onChange = (e) => {
    e.target.parentNode.parentNode.childNodes.forEach((node) => {
      node.classList = "";
    });
    e.target.parentNode.classList = "active";
  };

  const [pop, setPop] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setPop(true);
  };

  return (
    <>
      <Banner />
      <main className="main">
        <div className="contactContainer">
          <div className="box1">
            <div className="box1Img">이미지 영역</div>
            <div className="box1Text">
              상담을 원하시는 기업 및 개인은 아래 양식으로 내용을 작성하여
              의뢰해주시고, 루와와 함께 해보세요.
            </div>
          </div>
          <div className="formContainer">
            <form onSubmit={onSubmit}>
              <div className="labelBox">
                <label className="label" htmlFor="company">
                  업체명
                </label>
              </div>
              <div className="inputBox">
                <input type="text" id="company" />
              </div>

              <div className="labelBox">
                <label className="label" htmlFor="name">
                  성함/직책
                </label>
              </div>
              <div className="inputBox">
                <input type="text" id="name" />
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
                  <input type="text" id="phone" />
                </div>
                <div className="phoneDash"></div>
                <div className="inputBox phone">
                  <input type="text" id="phone" />
                </div>
                <div className="phoneDash"></div>
                <div className="inputBox phone">
                  <input type="text" id="phone" />
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
                <input type="email" id="email" />
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
                <textarea type="textarea" id="consult" />
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
                    onChange={onChange}
                    value={1}
                    type="radio"
                    name="root"
                  />
                  네이버검색
                </label>
                <label>
                  <input
                    onChange={onChange}
                    value={2}
                    type="radio"
                    name="root"
                  />
                  네이버검색
                </label>
                <label>
                  <input
                    onChange={onChange}
                    value={3}
                    type="radio"
                    name="root"
                  />
                  네이버검색
                </label>
                <label>
                  <input
                    onChange={onChange}
                    value={4}
                    type="radio"
                    name="root"
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
      {pop ? (
        <>
          <div id="overlay"></div>
          <div className="popupBox">
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
          </div>
        </>
      ) : null}
    </>
  );
}

export default Contact;
