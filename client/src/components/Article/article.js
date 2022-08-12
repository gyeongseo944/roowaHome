import "./Article.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "antd";
import GridCard from "./GridCard/GridCard";

const Article = () => {
  const [Article, setArticle] = useState([]);
  useEffect(() => {
    axios.get("/api/getArticle").then((res) => {
      setArticle(res.data);
    });
  }, []);

  return (
    <>
      <div className="article_title">
        <h1>언론보도</h1>
      </div>
      <div className="article_container" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "60%", height: "auto", margin: "0 auto" }}>
          <Row gutter={[32, 40]}>
            {Article &&
              Article.map((article, index) => (
                <React.Fragment key={index}>
                  <GridCard
                    page={"article"}
                    image={article.img.files[0].file}
                    title={article.title.results[0].title.plain_text}
                    date={article.date.date.start}
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
