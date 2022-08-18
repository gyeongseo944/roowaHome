import React, { useState } from "react";
import "./ArtDetail.scss";

const ArtDetail = (props) => {
  const source = props.source ? true : false;
  return (
    <div className="article_detail">
      <div className="detail_title_article">
        <h1>{props.title}</h1>
        <span>{props.date}</span>
      </div>
      <div className="detail_contents_article">
        <img src={props.image.url} alt="article image" />
        <div className="detail_contents_textzone">
          {props.contents && <p className="article_contents">{props.contents}</p>}
          {source && props.source.url && props.link.url && (
            <a href={props.link.url} target="_blank">
              <p className="article_source">출처 : {props.source.url}</p>
            </a>
          )}
          {source && props.source.url && !props.link.url && <p className="article_source">출처 : {props.source.url}</p>}
        </div>
      </div>
    </div>
  );
};

export default ArtDetail;
