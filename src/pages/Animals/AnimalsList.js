import React, {useEffect, useState} from "react";
import "../../styles/Animals/AnimalsList.css";
import axios from "axios";
import {serviceKey} from "../../services/api";
import AnimalsItem from "./AnimalsItem";

const AnimalsList = () => {
    // const [animals, setAnimals] = useState([]);
    const animals = [{
        "desertionNo": "448567202200339",
        "filename": "http://www.animal.go.kr/files/shelter/2022/05/202206201406715_s.jpg",
        "happenDt": "20220620",
        "happenPlace": "의창구 봉곡동 39-5번지 가게 안",
        "kindCd": "[개] 슈나우져",
        "colorCd": "흰색+회색",
        "age": "2014(년생)",
        "weight": "0.5(Kg)",
        "noticeNo": "경남-창원1-2022-00263",
        "noticeSdt": "20220620",
        "noticeEdt": "20220630",
        "popfile": "http://www.animal.go.kr/files/shelter/2022/05/202206201406715.jpg",
        "processState": "보호중",
        "sexCd": "F",
        "neuterYn": "N",
        "specialMark": "L-6-1-18 흰색+회색. 미용되어있음. 내장칩동물등록:이름;청호",
        "careNm": "창원유기동물보호소",
        "careTel": "055-225-5701",
        "careAddr": "경상남도 창원시 의창구 창이대로 71 (명서동, 창원시농업기술센터) 축산과",
        "orgNm": "경상남도 창원시 의창성산구",
        "chargeNm": "창원의창선산구",
        "officetel": "055-225-5701"
    }, {
        "desertionNo": "448537202200631",
        "filename": "http://www.animal.go.kr/files/shelter/2022/04/20220620120645_s.jpg",
        "happenDt": "20220620",
        "happenPlace": "가조도 보건진료소",
        "kindCd": "[개] 말티즈",
        "colorCd": "흰색",
        "age": "2012(년생)",
        "weight": "4(Kg)",
        "noticeNo": "경남-거제-2022-00518",
        "noticeSdt": "20220620",
        "noticeEdt": "20220630",
        "popfile": "http://www.animal.go.kr/files/shelter/2022/04/20220620120645.jpg",
        "processState": "보호중",
        "sexCd": "M",
        "neuterYn": "Y",
        "specialMark": "자가미용추정.신고자가 옷입힘",
        "careNm": "거제시유기동물보호소",
        "careTel": "055-639-6368",
        "careAddr": "경상남도 거제시 사등면 두동로1길 109 (사등면, 한국자원재생공사폐비닐적재장) 거제시유기동물보호소",
        "orgNm": "경상남도 거제시",
        "chargeNm": "김부근",
        "officetel": "055-639-6366"
    }, {
        "desertionNo": "447522202200224",
        "filename": "http://www.animal.go.kr/files/shelter/2022/04/20220620140630_s.jpg",
        "happenDt": "20220620",
        "happenPlace": "동명면기성리",
        "kindCd": "[개] 푸들",
        "colorCd": "연갈색",
        "age": "2020(년생)",
        "weight": "4(Kg)",
        "noticeNo": "경북-칠곡-2022-00183",
        "noticeSdt": "20220620",
        "noticeEdt": "20220628",
        "popfile": "http://www.animal.go.kr/files/shelter/2022/04/20220620140630.jpg",
        "processState": "보호중",
        "sexCd": "M",
        "neuterYn": "Y",
        "specialMark": "일주일전할머니가구조후 미용한상태 활발한성격",
        "careNm": "칠곡유기동물보호센터",
        "careTel": "054-973-5710",
        "careAddr": "경상북도 칠곡군 석적읍 포망로 341 (석적읍) ",
        "orgNm": "경상북도 칠곡군",
        "chargeNm": "동물보호담당",
        "officetel": "054-979-6493"
    }]

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        // const data = await axios.get(`/openApi/abandonmentPublic?serviceKey=${serviceKey}&_type=json`)
        // setAnimals(data.response.body.items.item);
    }

    return (
        <div id="animals-list">
            <div className="banner">
                <div className="banner-title">유기유실동물 공고</div>
                <div className="banner-subtitle">농림축산식품부는 유기동물관리에서 동물등록에 이르기까지 동물보호 업무 전반을 통합적으로 관리하기 위해 <br/>
                각 시도(시군구)의 동물보호업무 담당부서와 연계하여 동물보호관리시스템을 운영하고 있습니다.
                </div>
            </div>

            <div className="animals-list-box">
                <div className="summary">
                    「동물보호법」 제17조, 시행령7조 및 동법 시행규칙 제20조에 따라 유기·유실동물을 보호하고 있는 경우에는 소유자 등이<br/>
                    보호조치 사실을 알 수 있도록 7일 동안 공고하여야 합니다.<br/>
                    공고 중인 동물 소유자는 해당 시군구 및 동물보호센터에 문의하시어 동물을 찾아가시기 바랍니다.<br/>
                    다만, 「동물보호법」 제19조 및 동법 시행규칙 제21조에 따라 소유자에게 보호비용이 청구될 수 있습니다.<br/>
                    또한 「동물보호법」 제17조에 따른 공고가 있는 날부터 10일이 경과하여도 소유자 등을 알 수 없는 경우에는<br/>
                    「유실물법」 제12조 및 「민법」 제253조의 규정에도 불구하고 해당 시·도지사 또는 시장·군수·구청장이 그 동물의 소유권을 취득하게 됩니다.
                </div>
                <div className="search-wrap">

                </div>

                <div className="list-num">총 {animals.length} 건</div>
                <div className="list-wrap">
                    {animals ? animals.map(animal =>
                        <AnimalsItem
                            key={animal.desertionNo}
                            animal={animal}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default AnimalsList;