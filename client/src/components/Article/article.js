import "./Article.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "antd";
import card from "./card/card";

const Article = () => {
  const [Article, setArticle] = useState([]);
  useEffect(() => {
    axios.get("/api/getArticle").then((res) => {
      console.log(res.data);
      setArticle(res.data);
    });
  }, []);

  return (
    <>
      <div className="article_container">
        <Row gutter={[32, 32]}>
          {Article &&
            Article.map((article, index) => {
              <React.Fragment key={index}></React.Fragment>;
            })}
        </Row>
      </div>
    </>
  );
};

export default Article;
