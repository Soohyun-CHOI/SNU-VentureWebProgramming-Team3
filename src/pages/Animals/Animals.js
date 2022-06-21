import React, {useEffect, useState} from "react";
import axios from "axios";
import {getAnimals, serviceKey} from "../../services/api";
import {Routes, Route} from "react-router-dom";
import {AnimalsList, AnimalsDetail} from "../index";
import Banner from "../Common/Banner";
import "../../styles/Animals/Animals.css";

const Animals = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        getAnimals(setAnimals);
    }, [])

    return (
        <div id="animals">
            <Banner title="유기유실동물 공고"/>
            <Routes>
                <Route exact path="" element={<AnimalsList/>}/>
                <Route exact path=":id" element={<AnimalsDetail animals={animals}/>}/>
            </Routes>
        </div>
    )
}

export default Animals;