import React, {useEffect, useState} from "react";
import axios from "axios";
import {serviceKey} from "../../services/api";
import "../../styles/Animals/Animals.css";
import {Routes, Route} from "react-router-dom";
import {AnimalsList, AnimalsDetail} from "../index";
import {dummyAnimals} from "../../utils/Utils";

const Animals = () => {
    // const [animals, setAnimals] = useState([]);
    const animals = dummyAnimals;

    // useEffect(() => {
    //     init();
    // }, [])
    //
    // const init = async () => {
    //     try {
    //         const data = await axios.get(`/openApi/abandonmentPublic?serviceKey=${serviceKey}&_type=json`);
    //         console.log(data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    return (
        <div id="animals">
            <div className="banner">
                <div className="banner-title">유기유실동물 공고</div>
                <div className="banner-subtitle">농림축산식품부는 유기동물관리에서 동물등록에 이르기까지 동물보호 업무 전반을 통합적으로 관리하기 위해 <br/>
                    각 시도(시군구)의 동물보호업무 담당부서와 연계하여 동물보호관리시스템을 운영하고 있습니다.
                </div>
            </div>

            <Routes>
                <Route exact path="" element={<AnimalsList animals={animals}/>} />
                <Route exact path=":id" element={<AnimalsDetail animals={animals} />} />
            </Routes>
        </div>
    )
}

export default Animals;