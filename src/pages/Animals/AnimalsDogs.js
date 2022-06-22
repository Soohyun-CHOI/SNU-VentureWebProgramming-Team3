import React, {useEffect, useState} from "react";
import {getAnimals} from "../../services/api";
import AnimalsItem from "./AnimalsItem";
import AnimalsSummarySearch from "../Common/AnimalsSummarySearch";
import {dummyAnimals} from "../../utils/Utils";

const AnimalsDogs = () => {
    const [originData, setOriginData] = useState([]);
    const [animals, setAnimals] = useState([]);

    useEffect(() => {
        // getAnimals(setOriginData, "dogs");
        // getAnimals(setAnimals, "dogs");
        setOriginData(dummyAnimals.filter(animal => animal.kindCd.includes("[개]")));
        setAnimals(dummyAnimals.filter(animal => animal.kindCd.includes("[개]")));
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

export default AnimalsDogs;