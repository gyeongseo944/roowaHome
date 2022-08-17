import "./Article.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row } from "antd";
import GridCard from "./GridCard/GridCard";
import Loader from "../common/Loader/Loader";
import naviHome from "../../assets/navBtns/articleBtns/x547c81c586.png";
import naviArrow from "../../assets/navBtns/articleBtns/x59.png";

const Article = () => {
  const [Article, setArticle] = useState([]);
  const [Notice, setNotice] = useState([]);
  const [ArtIdArr, setArtIdArr] = useState([]);
  const [NotIdArr, setNotIdArr] = useState([]);
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);

    axios.get("/api/article/getList").then((res) => {
      console.log(res.data);
      setArtIdArr(res.data.articleIdArr);
      setArticle(res.data.articleResult);
      setNotIdArr(res.data.noticeIdArr);
      setNotice(res.data.noticeResult);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div>
          <div className="article_title">
            <h1>언론보도</h1>
            <div className="naviArticle">
              <Link to="/">
                <img src={naviHome} alt="home button" className="naviHome" />
              </Link>
              <img className="naviArrow" src={naviArrow} alt="Chevron" />
              <span className="naviBtn">ABOUT</span>
              <img className="naviArrow" src={naviArrow} alt="Chevron" />
              <span className="naviBtn">언론보도</span>
            </div>
          </div>
          <div className="article_container">
            <div className="grid_container" style={{ borderBottom: "1px solid black", paddingBottom: "80px" }}>
              <Row gutter={[32, 40]}>
                {Article &&
                  Article.map((article, index) => (
                    <React.Fragment key={index + article.id}>
                      <GridCard
                        page={"article"}
                        page_id={article.id}
                        idArr={ArtIdArr}
                        thisIndex={index}
                        image={article.image.files[0].file}
                        title={article.title.results[0].title.plain_text}
                        date={article.date.date.start}
                      />
                    </React.Fragment>
                  ))}
              </Row>
            </div>
            {/* <div className="grid_container" style={{ borderBottom: "1px solid black", paddingBottom: "80px" }}>
              <Row gutter={[32, 40]}>
                {Notice &&
                  Notice.map((notice, index) => (
                    <React.Fragment key={index + notice.id}>
                      <GridCard
                        page={"notice"}
                        page_id={notice.id}
                        idArr={NotIdArr}
                        thisIndex={index}
                        image={notice.image.files[0].file}
                        title={notice.title.results[0].title.plain_text}
                        date={notice.date.date.start}
                      />
                    </React.Fragment>
                  ))}
              </Row>
            </div> */}
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
