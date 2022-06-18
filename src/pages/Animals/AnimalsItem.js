import React from "react";

const AnimalsItem = (props) => {
    const sex = props.animal.sexCd === "F" ? "암컷" : "수컷";

    const handleDate = (date) => {
        return `${date.substr(0, 4)}-${date.substr(4, 2)}-${date.substr(6)}`
    }

    return (
        <div id="animals-item">
            <div className="left-side">
                <img src="" alt=""/>
                <button>자세히 보기</button>
            </div>
            <div className="right-side">
                <div className="traits">
                    <div className="traits-title">공고번호</div>
                    <div className="traits-contents">{props.key}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">접수일</div>
                    <div className="traits-contents">{handleDate(props.animal.happendDt)}</div>
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
                    <div className="traits-contents">{handleDate(props.animal.noticeSdt)}-{handleDate(props.noticeEdt)}</div>
                </div>
            </div>
        </div>
    )
}

export default AnimalsItem;