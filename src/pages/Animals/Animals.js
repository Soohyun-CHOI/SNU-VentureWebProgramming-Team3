import React, {useEffect, useState} from "react";
import axios from "axios";
import {serviceKey} from "../../services/api";
import {Routes, Route} from "react-router-dom";
import {AnimalsList, AnimalsDetail} from "../index";
import {dummyAnimals} from "../../utils/Utils";
import Banner from "../Common/Banner";

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
            <Banner title="유기유실동물 공고"/>
            <Routes>
                <Route exact path="" element={<AnimalsList animals={animals}/>} />
                <Route exact path=":id" element={<AnimalsDetail animals={animals} />} />
            </Routes>
        </div>
    )
}

export default Animals;