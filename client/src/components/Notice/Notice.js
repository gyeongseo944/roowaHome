import "./Notice.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row } from "antd";
import GridCard from "../common/GridCard/GridCard";
import Loader from "../common/Loader/Loader";
import naviHome from "../../assets/navBtns/articleBtns/x547c81c586.png";
import naviArrow from "../../assets/navBtns/articleBtns/x59.png";

const Notice = () => {
  const [Notice, setNotice] = useState([]);
  const [IdArr, setIdArr] = useState([]);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);
    axios.get("/api/notice/getList").then((res) => {
      console.log(res.data);
      setNotice(res.data.result);
      setIdArr(res.data.idArr);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div>
          <div className="notice_title">
            <h1>공지사항</h1>
            <div className="naviNotice">
              <Link to="/">
                <img src={naviHome} alt="home button" className="naviHome" />
              </Link>
              <img className="naviArrow" src={naviArrow} alt="Chevron" />
              <span className="naviBtn">ABOUT</span>
              <img className="naviArrow" src={naviArrow} alt="Chevron" />
              <span className="naviBtn">공지사항</span>
            </div>
          </div>
          <div className="notice_container">
            <div className="grid_container">
              <Row gutter={[32, 40]}>
                {Notice &&
                  Notice.map((notice, index) => (
                    <React.Fragment key={index + notice.id}>{/* <GridCard page={"notice"} page_id={notice.id} /> */}</React.Fragment>
                  ))}
                {/* {Article &&
                  Article.map((article, index) => (
                    <React.Fragment key={index + article.id}>
                      <GridCard
                        page={"article"}
                        page_id={article.id}
                        idArr={IdArr}
                        thisIndex={index}
                        image={article.img.files[0].file}
                        title={article.title.results[0].title.plain_text}
                        date={article.date.date.start}
                      />
                    </React.Fragment>
                  ))} */}
              </Row>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Notice;
