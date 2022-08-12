import { Link } from "react-router-dom";
import Banner from "../common/Banner";
import "./Pay.scss";

function Pay() {
  const subtitle = "루와에서 함께\n_____ _____ 해보세요";
  return (
    <>
      <Banner
        title="루와 서비스 결제"
        subtitle={subtitle}
        src={require("../../assets/banner/x2af718a2b.png")}
      />
      <main className="payMain">
        <div className="payContainer">
          <Link to={`/pay/${1}`} className="card">
            <div className="cardImage"></div>
            <div className="cardTitle">
              <div className="cardSmallTitle">Metaverse Cotents Marketing</div>
              <div className="cardBigTitle">메타버스 콘텐츠 마케팅</div>
              <div className="cardPrice">별도 협의</div>
            </div>
          </Link>
          <Link to={`/pay/${1}`} className="card">
            <div className="cardImage"></div>
            <div className="cardTitle">
              <div className="cardSmallTitle">Cotents Marketing Service</div>
              <div className="cardBigTitle">콘텐츠 마케팅 서비스</div>
              <div className="cardPrice">별도 협의</div>
            </div>
          </Link>
          <Link to={`/pay/${1}`} className="card">
            <div className="cardImage"></div>
            <div className="cardTitle">
              <div className="cardSmallTitle">Original Cotents</div>
              <div className="cardBigTitle">오리지널 컨텐츠</div>
              <div className="cardPrice">별도 협의</div>
            </div>
          </Link>
          <Link to={`/pay/${1}`} className="card">
            <div className="cardImage"></div>
            <div className="cardTitle">
              <div className="cardSmallTitle">Original Cotents</div>
              <div className="cardBigTitle">오리지널 컨텐츠</div>
              <div className="cardPrice">별도 협의</div>
            </div>
          </Link>
          <Link to={`/pay/${1}`} className="card">
            <div className="cardImage"></div>
            <div className="cardTitle">
              <div className="cardSmallTitle">Original Cotents</div>
              <div className="cardBigTitle">오리지널 컨텐츠</div>
              <div className="cardPrice">별도 협의</div>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}

export default Pay;
