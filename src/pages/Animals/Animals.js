import React, {useEffect, useState} from "react";
import {getAnimals} from "../../services/api";
import {Routes, Route} from "react-router-dom";
import {AnimalsList, AnimalsDetail, AnimalsCats, AnimalsDogs} from "../index";
import Banner from "../Common/Banner";
import "../../styles/Animals/Animals.css";
import {dummyAnimals} from "../../utils/Utils";

const Animals = () => {
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        // getAnimals(setAnimals);
        setAnimals(dummyAnimals);
    }, [])

    return (
        <div id="animals">
            <Banner title="유기유실동물 공고"/>
            <Routes>
                <Route exact path="/single/:id" element={<AnimalsDetail animals={animals}/>}/>
                <Route exact path="/cats" element={<AnimalsCats/>}/>
                <Route exact path="/dogs" element={<AnimalsDogs/>}/>
                <Route exact path="/*" element={<AnimalsList/>}/>
            </Routes>
        </div>
    )
}

export default Animals;