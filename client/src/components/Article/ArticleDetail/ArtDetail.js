import React from "react";
import "./ArtDetail.scss";

const ArtDetail = (props) => {
  return (
    <div className="article_detail">
      <div className="detail_title_article">
        <h1>{props.title}</h1>
        <span>{props.date}</span>
      </div>
      <div className="detail_contents_article">
        <img src={props.image.url} alt="article image" />
        <div className="detail_contents_textzone">
          <p className="article_contents">{props.contents}</p>
          {props.source && props.link && (
            <a href={props.link} target="_blank">
              <p className="article_source">출처 : {props.source}</p>
            </a>
          )}
          {props.source && !props.link && <p className="article_source">출처 : {props.source}</p>}
        </div>
      </div>
    </div>
  );
};

export default ArtDetail;
