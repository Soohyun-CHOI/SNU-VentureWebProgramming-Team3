import React, {useEffect, useState} from "react";
import {getAnimals} from "../../services/api";
import AnimalsItem from "./AnimalsItem";
import AnimalsSummarySearch from "../Common/AnimalsSummarySearch";

const AnimalsCats = () => {
    const [originData, setOriginData] = useState([]);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        getAnimals(setOriginData, "cats");
        getAnimals(setAnimals, "cats");
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

export default AnimalsCats;