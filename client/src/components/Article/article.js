import "./Article.scss";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Row } from "antd";
import GridCard from "./GridCard/GridCard";
import naviHome from "../../assets/navBtns/articleBtns/x547c81c586.png";
import naviArrow from "../../assets/navBtns/articleBtns/x59.png";

const Article = () => {
  const [Article, setArticle] = useState([]);
  const [IdArr, setIdArr] = useState([]);
  useEffect(() => {
    axios.get("/api/article/getList").then((res) => {
      setArticle(res.data.result);
      setIdArr(res.data.idArr);
      console.log(res.data.result);
    });
  }, []);

  return (
    <>
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
        <div className="grid_container">
          <Row gutter={[32, 40]}>
            {Article &&
              Article.map((article, index) => (
                <React.Fragment key={index + article.id}>
                  <GridCard
                    page={"article"}
                    page_id={article.id}
                    bfId={(index = 0 ? null : IdArr[index - 1])}
                    afId={(index = IdArr.length - 1 ? null : IdArr[index + 1])}
                    image={article.img.files[0].file}
                    title={article.title.results[0].title.plain_text}
                    date={article.date.date.start}
                    test={`index num : ${index}`}
                  />
                </React.Fragment>
              ))}
          </Row>
        </div>
      </div>
    </>
  );
};

export default Article;
