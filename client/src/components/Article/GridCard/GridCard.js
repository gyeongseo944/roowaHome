import React, { useEffect } from "react";
import "./GridCard.scss";
import { Col } from "antd";
import { Link } from "react-router-dom";
const GridCard = (props) => {
  return (
    <Col span={8}>
      <div className="gridContainer">
        <Link
          to={`/article/${props.page_id}`}
          state={{
            pageType: props.page,
            idArr: props.idArr,
            thisIndex: props.thisIndex,
          }}
        >
          <div className="dimmedImg">
            <img className="cardImg" src={props.image.url} />
          </div>
          <p className="gridTitle">{props.title}</p>
          <p className="gridDate">{props.date}</p>
        </Link>
      </div>
    </Col>
  );
};

export default GridCard;
