import React, {useEffect, useState} from "react";
import "../../styles/Animals/AnimalsList.css";
import AnimalsItem from "./AnimalsItem";
import {getAnimals} from "../../services/api";
import AnimalsSummarySearch from "../Common/AnimalsSummarySearch";
import {dummyAnimals} from "../../utils/Utils";

const AnimalsList = () => {
    const [originData, setOriginData] = useState([]);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        // getAnimals(setOriginData);
        // getAnimals(setAnimals);
        setAnimals(dummyAnimals);
        setOriginData(dummyAnimals);
    }, [])
    
    return (
        <div id="animals-list">
            <AnimalsSummarySearch
                originData={originData}
                setAnimals={setAnimals}
            />
            <div className="list-num">총 {animals.length} 건</div>
            <div className="list-wrap">
                {animals?.map(animal =>
                    <AnimalsItem
                        key={animal.desertionNo}
                        animal={animal}
                    />
                )}
            </div>
        </div>
    )
}

export default AnimalsList;