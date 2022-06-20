import React from "react";
import {handleDate} from "../../utils/Utils";
import "../../styles/Animals/AnimalsItem.css";
import {NavLink} from "react-router-dom";

const AnimalsItem = (props) => {
    const sex = props.animal.sexCd === "F" ? "암컷" : "수컷";

    return (
        <div id="animals-item">
            <div className="left-side">
                <img src={`${props.animal.popfile}`} alt=""/>
                <NavLink to={`/animals/${props.animal.desertionNo}`} className="button">자세히 보기</NavLink>
            </div>
            <div className="right-side">
                <div className="traits">
                    <div className="traits-title">공고번호</div>
                    <div className="traits-contents">{props.animal.desertionNo}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">접수일</div>
                    <div className="traits-contents">{props.animal.happenDt}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">품종</div>
                    <div className="traits-contents">{props.animal.kindCd}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">성별</div>
                    <div className="traits-contents">{sex}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">발견장소</div>
                    <div className="traits-contents">{props.animal.happenPlace}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">특징</div>
                    <div className="traits-contents">{props.animal.specialMark}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">상태</div>
                    <div className="traits-contents">{props.animal.processState}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">공고기간</div>
                    <div className="traits-contents">{props.animal.noticeSdt}-{props.animal.noticeEdt}</div>
                </div>
            </div>
        </div>
    )
}

export default AnimalsItem;