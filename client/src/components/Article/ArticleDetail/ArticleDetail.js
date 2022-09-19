import "./ArticleDetail.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useLocation, useParams } from "react-router-dom";
import Arrow from "../../../assets/navBtns/articleBtns/x59.png";
import Loader from "../../common/Loader/Loader";
import { useMediaQuery } from "react-responsive";
import { articleListAtom } from "../../../atom";
import { useRecoilState } from "recoil";

const ArticleDetail = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const [Detail, setDetail] = useState({});
  const [Loading, setLoading] = useState(true);

  const location = useLocation();
  const pageType = location.state.pageType;
  const thisIndex = location.state.thisIndex;

  const [ListData, setListData] = useRecoilState(articleListAtom);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (!ListData) {
      axios.get("http://roowa.kr/article/getList").then((res) => {
        setListData(res.data);
        setDetail(res.data[pageType][thisIndex].properties);
        setLoading(false);
      });
    } else {
      setDetail(ListData[pageType][thisIndex].properties);
      setLoading(false);
    }
  }, [location]);
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
                  <img
                    src={
                      Detail["Image*"].files[0].external
                        ? Detail["Image*"].files[0].external.url
                        : Detail["Image*"].files[0].file.url
                    }
                    alt="article image"
                  />
                  <div className="detail_contents_textzone">
                    {Detail["Contents"].rich_text.length ? (
                      <p className="article_contents">
                        {Detail["Contents"].rich_text[0].plain_text}
                      </p>
                    ) : null}
                    {pageType === "article" ? (
                      <div>
                        {Detail.Resource.url && Detail.Link.url && (
                          <a href={Detail.Link.url} target="_blank">
                            <p className="article_source">
                              출처 : {Detail.Resource.url}
                            </p>
                          </a>
                        )}
                        {Detail.Resource.url && !Detail.Link.url && (
                          <p className="article_source">
                            출처 : {Detail.Resource.url}
                          </p>
                        )}
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>

              <div className="article_list">
                {thisIndex != 0 && (
                  <div className="beforeList">
                    <span>
                      이전
                      <img src={Arrow} />
                    </span>
                    <Link
                      to={`/article/${ListData[pageType][thisIndex - 1].id}`}
                      state={{
                        thisIndex: thisIndex - 1,
                        pageType: pageType,
                      }}
                    >
                      <span className="nextArticle">
                        {
                          ListData[pageType][thisIndex - 1].properties["Title*"]
                            .title[0].plain_text
                        }
                      </span>
                    </Link>
                  </div>
                )}
                {thisIndex < ListData[pageType].length - 1 && (
                  <div className="afterList">
                    <span>
                      다음
                      <img src={Arrow} />
                    </span>
                    <Link
                      to={`/article/${ListData[pageType][thisIndex + 1].id}`}
                      state={{
                        thisIndex: thisIndex + 1,
                        pageType: pageType,
                      }}
                    >
                      <span className="nextArticle">
                        {
                          ListData[pageType][thisIndex + 1].properties["Title*"]
                            .title[0].plain_text
                        }
                      </span>
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
