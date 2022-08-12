import React, { useEffect } from "react";
import "./GridCard.scss";
import { Col } from "antd";
const GridCard = (props) => {
  const test = props;
  useEffect(() => {
    console.log(test);
  }, []);

  return (
    <Col span={8}>
      <div className="gridContainer">
        <div className="dimmedImg">
          <img className="cardImg" src={props.image.url} />
        </div>
        <p className="gridTitle">{props.title}</p>
        <p className="gridDate">{props.date}</p>
      </div>
    </Col>
  );
};

export default GridCard;
