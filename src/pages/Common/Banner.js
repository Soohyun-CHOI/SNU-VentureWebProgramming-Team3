import React from "react";
import "../../styles/Common/Banner.css";

const Banner = (props) => {
    return (
        <div id="banner">
            <div className="banner-title">{props.title}</div>
            <div className="banner-subtitle">벤처동물학은 유기동물관리에서 동물등록에 이르기까지 동물보호 업무 전반을 통합적으로 관리하기 위해<br/>
                각 시도(시군구)의 동물보호업무 담당부서와 연계하여 동물보호관리시스템을 운영하고 있습니다.
            </div>
        </div>
    )
}

export default Banner;
