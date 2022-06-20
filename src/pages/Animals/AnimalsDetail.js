import React, {useEffect, useState} from "react";
import "../../styles/Animals/AnimalsDetail.css";
import {useParams} from "react-router-dom";
import {handleDate} from "../../utils/Utils";

const AnimalsDetail = (props) => {
    const {id} = useParams();
    const [animal, setAnimal] = useState({});

    const sex = animal ? (animal.sexCd === "F" ? "암컷" : "수컷") : null;
    const neuter = animal ? (animal.neuterYn === "N" ? "아니오" : "예") : null;

    useEffect(() => {
        init(id);
    }, [])

    const init = (num) => {
        for (let element of props.animals) {
            if (element.desertionNo === num) setAnimal(element);
        }
    }

    return (
        <div id="animals-detail">
            <div className="left-side">
                <div className="title">📋 동물 사진</div>
                <img src={`${animal.popfile}`} alt=""/>
            </div>
            <div className="right-side">
                <div className="contents-box">
                    <div className="title">📋 동물 정보</div>
                    <div className="traits">
                        <div className="traits-title">공고번호</div>
                        <div className="traits-contents">{animal.desertionNo}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">품종</div>
                        <div className="traits-contents">{animal.kindCd}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">털색</div>
                        <div className="traits-contents">{animal.colorCd}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">성별</div>
                        <div className="traits-contents">{sex}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">중성화 여부</div>
                        <div className="traits-contents">{neuter}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">특징</div>
                        <div className="traits-contents">{animal.specialMark}</div>
                    </div>
                </div>

                <div className="contents-box">
                    <div className="title">📋 구조 정보</div>
                    <div className="traits">
                        <div className="traits-title">접수일</div>
                        <div className="traits-contents">{animal.happenDt ? handleDate(animal.happenDt) : null}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">발견장소</div>
                        <div className="traits-contents">{animal.happenPlace}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">공고기간</div>
                        <div className="traits-contents">{animal.noticeSdt ? handleDate(animal.noticeSdt) : null}-{animal.noticeEdt ? handleDate(animal.noticeEdt) : null}</div>
                    </div>
                </div>

                <div className="contents-box">
                    <div className="title">📋 동물보호센터 안내</div>
                    <div className="traits">
                        <div className="traits-title">관할보호센터명</div>
                        <div className="traits-contents">{animal.careNm}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">보호장소</div>
                        <div className="traits-contents">{animal.careAddr}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">전화번호</div>
                        <div className="traits-contents">{animal.careTel}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">관할기관</div>
                        <div className="traits-contents">{animal.orgNm}</div>
                    </div>
                    <div className="traits">
                        <div className="traits-title">담당자</div>
                        <div className="traits-contents">{animal.chargeNm} ({animal.officetel})</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AnimalsDetail;