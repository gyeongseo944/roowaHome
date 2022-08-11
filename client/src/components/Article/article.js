import "./Article.scss";
import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

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
      <div className="container contact_page">
        <div style={{ height: "1200px" }}>
          <div style={{ color: "black" }}>ggggg</div>
        </div>
      </div>
    </>
  );
};

export default Article;
