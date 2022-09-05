import React, { useRef, useEffect } from "react";
import "./CompanyMap.scss";
import logo from "../../../assets/x2022new.png";
import { motion, useInView } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import check from "../../../assets/company/check.png";

const { kakao } = window;

const CompanyMap = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const mapRef = useRef();
  const ref = useRef();
  const isInView = useInView(ref);
  // 지도 관련 effect
  useEffect(() => {
    // 지도를 표시할 element
    const container = mapRef.current;
    const options = {
      center: new kakao.maps.LatLng(37.4857087327254, 126.89379348756631),
      level: isMobile ? 5 : 3,
    };
    const map = new kakao.maps.Map(container, options); // 지도 생성
    // 지도에 회사 마커 생성
    map.setZoomable(false);
    const marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(37.48490206515186, 126.89377935423316),
      clickable: true,
    });
    //지도에 zoom 조절 바 만들기
    const zoom = new kakao.maps.ZoomControl();
    map.addControl(zoom, kakao.maps.ControlPosition.RIGHT);
    // 지도에 표시할 주소 창
    const mapInfo = `
      <div class="mapInfoWrap">
        <div class="mapTitle">  
          <h1>(주)달달프렌즈</h1>
        </div>
        <div class="mapContainer">
          <div class="mapLogo">
            <img src=${logo} alt="roowa logo" />
          </div>  
          <div class="mapText">  
            <div class="ellipsis">서울 구로구 디지털로31길 19 1002호 </div>  
            <div class="jibun ellipsis">(우) 08381 (지번) 구로동 197-7 </div>  
          </div> 
        </div>
      </div>     
    `;
    const mapInfoMoblie = `
      <div class="mapInfoWrap">
        <div class="mapTitle">  
          <h1>(주)달달프렌즈</h1>
        </div>
        <div class="mapContainer">
          <div class="mapText">  
            <div class="ellipsis">서울 구로구 디지털로31길 19 1002호 </div>  
            <div class="jibun ellipsis">(우) 08381 (지번) 구로동 197-7 </div>  
          </div> 
        </div>
      </div>     
    `;
    //주소창 표시
    const mapIntoWindow = new kakao.maps.InfoWindow({
      content: isMobile ? mapInfoMoblie : mapInfo,
      removable: true,
    });
    mapIntoWindow.open(map, marker);
    //마크 클릭하면 주소창 나오기
    kakao.maps.event.addListener(marker, "click", () => {
      mapIntoWindow.open(map, marker);
    });
  }, []);

  return (
    <div className="companyMapContainer">
      <div className="contactUsContainer">
        <h1 className="companyContact">CONTACT US</h1>
        {isMobile ? (
          <></>
        ) : (
          <>
            <p className="contactTitle">주식회사 달달프렌즈</p>
            <div className="contactInfo">
              <p>
                서울특별시 구로구 디지털로31길19, 1002호 <br />
                manager@roowa.co.kr <br />
                070-4324-2017
              </p>
              <p>
                Opening hours. am 9:30 - pm 6:30 <br />
                Lunch break. pm 12:00 - pm 13:30 (Sat, Sun Off)
              </p>
            </div>
          </>
        )}
        <div className="contactMap" ref={mapRef}></div>
        {isMobile ? (
          <>
            <p className="contactTitle">주식회사 달달프렌즈</p>
            <div className="contactInfo">
              <div>
                <img src={check} alt="check" />
                <p>
                  서울특별시 구로구 디지털로31길19, 1002호 <br />
                  manager@roowa.co.kr <br />
                  070-4324-2017
                </p>
              </div>
              <div>
                <img src={check} alt="check" />
                <p>
                  Opening hours. am 9:30 - pm 6:30 <br />
                  Lunch break. pm 12:00 - pm 13:30 (Sat, Sun Off)
                </p>
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
        <motion.div className="contactBottom" ref={ref} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ delay: 0.3, duration: 0.5 }}>
          <p>
            콘텐츠 마케팅 서비스, <span className="contactFilled">루와</span>
          </p>
          <img src={logo} alt="roowa logo image" />
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyMap;
