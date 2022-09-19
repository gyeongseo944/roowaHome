import "./Article.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import GridCard from "./GridCard/GridCard";
import Loader from "../common/Loader/Loader";
import naviHome from "../../assets/navBtns/articleBtns/x547c81c586.png";
import naviArrow from "../../assets/navBtns/articleBtns/x59.png";
import { useRecoilState } from "recoil";
import { articleListAtom } from "../../atom";
import { useMediaQuery } from "react-responsive";
//test
const Article = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [ListData, setListData] = useRecoilState(articleListAtom);
  const [Article, setArticle] = useState([]);
  const [Notice, setNotice] = useState([]);

  const [TapArticle, setTapArticle] = useState(true);
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);
    if (!ListData) {
      axios.get("http://roowa.kr/article/getList").then((res) => {
        setListData(res.data);
        setArticle(res.data.article);
        setNotice(res.data.notice);
        setLoading(false);
      });
    } else {
      setArticle(ListData.article);
      setNotice(ListData.notice);

      setLoading(false);
    }
  }, []);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div className="articleContainer">
          <div className="article_title">
            <h1>뉴스 &middot; 알림</h1>
            {isMobile ? (
              <></>
            ) : (
              <div className="naviArticle">
                <Link to="/">
                  <img src={naviHome} alt="home button" className="naviHome" />
                </Link>
                <img className="naviArrow" src={naviArrow} alt="Chevron" />
                <span className="naviBtn">ABOUT</span>
                <img className="naviArrow" src={naviArrow} alt="Chevron" />
                <span className="naviBtn">뉴스 &middot; 알림</span>
              </div>
            )}

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
          </div>

          <div className="article_container">
            <div className="grid_container">
              {TapArticle
                ? Article &&
                  Article.map((article, index) => (
                    <React.Fragment key={index + article.id}>
                      <GridCard
                        page={"article"}
                        page_id={article.id}
                        thisIndex={index}
                        image={
                          article.properties["Image*"].files[0].external
                            ? article.properties["Image*"].files[0].external.url
                            : article.properties["Image*"].files[0].file.url
                        }
                        title={article.properties["Title*"].title[0].plain_text}
                        date={article.properties["Date*"].date.start}
                      />
                    </React.Fragment>
                  ))
                : Notice &&
                  Notice.map((notice, index) => (
                    <React.Fragment key={index + notice.id}>
                      <GridCard
                        page={"notice"}
                        page_id={notice.id}
                        thisIndex={index}
                        image={notice.properties["Image*"].files[0].file}
                        title={notice.properties["Title*"].title[0].plain_text}
                        date={notice.properties["Date*"].date.start}
                      />
                    </React.Fragment>
                  ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Article;
