import "./ArticleDetail.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import Arrow from "../../../assets/navBtns/articleBtns/x59.png";
import Loader from "../../common/Loader/Loader";
import { useMediaQuery } from "react-responsive";

const ArticleDetail = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const param = useParams();
  const [Detail, setDetail] = useState({});
  const [Loading, setLoading] = useState(true);
  const location = useLocation();
  const variables = {
    pageId: param.id,
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    axios.post("/api/article/getDetail", variables).then((res) => {
      setDetail(res.data.properties);
      setLoading(false);
    });
  }, [param]);

  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <div className="article_detail_container">
          {Detail["Title*"] && (
            <div>
              <div className="article_detail">
                <div className="detail_title_article">
                  <h1>{Detail["Title*"].title[0].plain_text}</h1>
                  <span>{Detail["Date*"].date.start}</span>
                </div>
                <div className="detail_contents_article">
                  <img src={Detail["Image*"].files[0].file.url} alt="article image" />
                  <div className="detail_contents_textzone">
                    {Detail["Contents"].rich_text.length ? <p className="article_contents">{Detail["Contents"].rich_text[0].plain_text}</p> : null}
                    {location.state.pageType === "Article" ? (
                      <div>
                        {Detail.Resource.url && Detail.Link.url && (
                          <a href={Detail.Link.url} target="_blank">
                            <p className="article_source">출처 : {Detail.Resource.url}</p>
                          </a>
                        )}
                        {Detail.Resource.url && !Detail.Link.url && <p className="article_source">출처 : {Detail.Resource.url}</p>}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="article_list">
                {location.state.thisIndex != 0 && (
                  <div className="beforeList">
                    <span>
                      이전
                      <img src={Arrow} />
                    </span>
                    <Link
                      to={`/article/${location.state.idArr[location.state.thisIndex - 1].id}`}
                      state={{
                        idArr: location.state.idArr,
                        thisIndex: location.state.thisIndex - 1,
                        pageType: location.state.pageType,
                      }}
                    >
                      <span className="nextArticle">{location.state.idArr[location.state.thisIndex - 1].title}</span>
                    </Link>
                  </div>
                )}
                {location.state.thisIndex < location.state.idArr.length - 1 && (
                  <div className="afterList">
                    <span>
                      다음
                      <img src={Arrow} />
                    </span>
                    <Link
                      to={`/article/${location.state.idArr[location.state.thisIndex + 1].id}`}
                      state={{
                        idArr: location.state.idArr,
                        thisIndex: location.state.thisIndex + 1,
                        pageType: location.state.pageType,
                      }}
                    >
                      <span className="nextArticle">{location.state.idArr[location.state.thisIndex + 1].title}</span>
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
