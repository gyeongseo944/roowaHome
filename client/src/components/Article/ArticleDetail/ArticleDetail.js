import "./ArticleDetail.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";

const ArticleDetail = () => {
  const param = useParams();
  const [Detail, setDetail] = useState({});
  const location = useLocation();
  const bfId = location.state.bfId;
  const afId = location.state.afId;
  console.log(location);
  const variables = {
    pageId: param.id,
    bfId: bfId,
    afId: afId,
  };

  useEffect(() => {
    axios.post("/api/article/getDetail", variables).then((res) => {
      setDetail(res.data);
    });
  }, []);

  return (
    <div>
      {Detail.title && (
        // <DetailArt
        //   title={Detail.title.results[0].title.plain_text}
        //   image={Detail.image.files[0].file}
        //   date={Detail.date.date.start}
        //   contents={Detail.contents.results[0].rich_text.text.content}
        //   source={Detail.source.url}
        //   link={Detail.link.url}
        // />
        <p></p>
      )}
    </div>
  );
};

export default ArticleDetail;
