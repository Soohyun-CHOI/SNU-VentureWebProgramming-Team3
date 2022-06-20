import axios from "axios";
import React, {useEffect, useState} from "react";
import toast from "react-hot-toast";
import LostAnimalItem from "./LostAnimalItem";
import Banner from "../Common/Banner";
import {NavLink} from "react-router-dom";
import "../../styles/LostAnimalList/LostAnimalList.css";

const LostAnimalList = () => {
    const [lostList, setLostList] = useState([]);

    useEffect(() => {
        getList();
    }, []);

    const getList = (num = 5) => {
        axios.get("/api/animals/v2", {params: {num: num}})
            .then(res => {
                setLostList(res.data.animals);
            })
            .catch((err) => {
                toast.error("등록에 실패하였습니다." + err.response.data.detail[0].type);
            });
    };

    return (
        <div id="lost-animal-list">
            <Banner title="분실신고"/>
            <div className="lost-animal-list-contents-box">
                <div className="summary">
                    ✔️ 여기는 동물을 분실한 경우 동물정보를 올려 분실 동물을 찾을 수 있는 공간입니다.<br/>
                    ✔️ 동물을 분실한 경우 동물보호법 제12조제1항 및 같은 법 시행규칙 제8조제1항 및 제9조제2항에 따라 등록대상동물을
                    10일 이내 시장, 군수, 구청장에게 분실 신고하셔야 합니다.
                </div>
                <div className="top-side">
                    <div className="list-num">총 {lostList.length} 건</div>
                    <NavLink to="/report" className="report">신고 등록하기</NavLink>
                </div>
                {lostList?.map(lostAnimal => (
                    <LostAnimalItem
                        key={lostAnimal.id}
                        lostAnimal={lostAnimal}
                    />
                ))}
            </div>
        </div>
    );
};

export default LostAnimalList;
