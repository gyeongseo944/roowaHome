import "./ArticleDetail.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import ArtDetail from "./ArtDetail";
import Arrow from "../../../assets/navBtns/articleBtns/x59.png";
import Loader from "../../common/Loader/Loader";

const ArticleDetail = () => {
  const param = useParams();
  const [Detail, setDetail] = useState({});
  const [Loading, setLoading] = useState(true);
  const location = useLocation();
  const variables = {
    pageId: param.id,
    idArr: location.state.idArr,
    thisIndex: location.state.thisIndex,
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setLoading(true);
    axios.post(`/api/article/get${location.state.pageType}`, variables).then((res) => {
      console.log(res.data);
      setDetail(res.data);
      setLoading(false);
    });
  }, [param]);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div className="article_detail_container">
          {Detail.title && (
            <div>
              <ArtDetail
                title={Detail.title.results[0].title.plain_text}
                image={Detail.image.files[0].file}
                date={Detail.date.date.start}
                contents={Detail.contents.results.length < 1 ? null : Detail.contents.results[0].rich_text.text.content}
                source={Detail.source ? Detail.source : null}
                link={Detail.link ? Detail.link : null}
              />
              <div className="article_list">
                {Detail.bfId && (
                  <div className="beforeList">
                    <span>
                      이전
                      <img src={Arrow} />
                    </span>
                    <Link
                      to={`/article/${Detail.bfId}`}
                      state={{
                        idArr: location.state.idArr,
                        thisIndex: location.state.thisIndex - 1,
                      }}
                    >
                      <span className="nextArticle">{Detail.bfTitle}</span>
                    </Link>
                  </div>
                )}
                {Detail.afId && (
                  <div className="afterList">
                    <span>
                      다음
                      <img src={Arrow} />
                    </span>
                    <Link
                      to={`/article/${Detail.afId}`}
                      state={{
                        idArr: location.state.idArr,
                        thisIndex: location.state.thisIndex + 1,
                      }}
                    >
                      <span className="nextArticle">{Detail.afTitle}</span>
                    </Link>
                  </div>
                )}
                <Link to="/article">
                  <div className="toList">목록</div>
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ArticleDetail;
