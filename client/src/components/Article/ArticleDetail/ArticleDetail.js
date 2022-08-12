import "./ArticleDetail.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import DetailArt from "./DetailArt";

const ArticleDetail = () => {
  const param = useParams();
  const [Detail, setDetail] = useState({});
  const [test, setTest] = useState(false);

  useEffect(() => {
    axios
      .get("/api/article/getDetail", {
        params: {
          pageId: param.id,
        },
      })
      .then((res) => {
        console.log(res.data.contents.results[0].rich_text.text.content);
        setDetail(res.data);
      })
      .then(setTest(true));
  }, []);

  return (
    <div>
      {/* {test && (
        <DetailArt
          // title={Detail.title.results[0].title.plain_text}
          // image={Detail.image.files[0].file}
          date={Detail.date.date.start}
          // contents={Detail.contents.results[0].rich_text.text.content}
          source={Detail.source.url}
          link={Detail.link.url}
        />
      )} */}
    </div>
  );
};

export default ArticleDetail;
