import "./Article.scss";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { Row } from "antd";
import GridCard from "./GridCard/GridCard";
import Loader from "../common/Loader/Loader";
import naviHome from "../../assets/navBtns/articleBtns/x547c81c586.png";
import naviArrow from "../../assets/navBtns/articleBtns/x59.png";
import { useRecoilState } from "recoil";
import { articleListAtom } from "../../atom";

const Article = () => {
  const [ListData, setListData] = useRecoilState(articleListAtom);
  const [Article, setArticle] = useState([]);
  const [Notice, setNotice] = useState([]);
  const [ArtIdArr, setArtIdArr] = useState([]);
  const [NotIdArr, setNotIdArr] = useState([]);
  const [TapArticle, setTapArticle] = useState(true);
  const [Loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);
    if (!ListData) {
      axios.get("/api/article/getList").then((res) => {
        setListData(res.data);
        setArtIdArr(res.data.articleIdArr);
        setArticle(res.data.articleResult);
        setNotIdArr(res.data.noticeIdArr);
        setNotice(res.data.noticeResult);
        setLoading(false);
      });
    } else {
      setArtIdArr(ListData.articleIdArr);
      setArticle(ListData.articleResult);
      setNotIdArr(ListData.noticeIdArr);
      setNotice(ListData.noticeResult);
      setLoading(false);
    }
  }, []);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div>
          <div className="article_title">
            <h1>뉴스 &middot; 알림</h1>
            <div className="naviArticle">
              <Link to="/">
                <img src={naviHome} alt="home button" className="naviHome" />
              </Link>
              <img className="naviArrow" src={naviArrow} alt="Chevron" />
              <span className="naviBtn">ABOUT</span>
              <img className="naviArrow" src={naviArrow} alt="Chevron" />
              <span className="naviBtn">뉴스 &middot; 알림</span>
            </div>
          </div>
          <div className="tapMenu">
            <div
              className={TapArticle ? "articleTap active" : "articleTap"}
              onClick={() => {
                setTapArticle(true);
              }}
            >
              언론보도
            </div>
            <div
              className={TapArticle ? "noticeTap" : "noticeTap active"}
              onClick={() => {
                setTapArticle(false);
              }}
            >
              공지사항
            </div>
          </div>
          <div className="article_container">
            <div className="grid_container">
              {TapArticle ? (
                <Row gutter={[32, 40]}>
                  {Article &&
                    Article.map((article, index) => (
                      <React.Fragment key={index + article.id}>
                        <GridCard
                          page={"Article"}
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
              ) : (
                <Row gutter={[32, 40]}>
                  {Notice &&
                    Notice.map((notice, index) => (
                      <React.Fragment key={index + notice.id}>
                        <GridCard
                          page={"Notice"}
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
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
