import React, {useEffect, useState} from "react";
import "../../styles/Animals/AnimalsList.css";
import axios from "axios";
import {serviceKey} from "../../services/api";
import AnimalsItem from "./AnimalsItem";

const AnimalsList = () => {
    const [animals, setAnimals] = useState();

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        const data = await axios.get(`/openApi/abandonmentPublic?serviceKey=${serviceKey}&_type=json`)
        setAnimals(data.response.body.items.item);
    }

    return (
        <div id="animals-list">
            <div className="search-wrap">

            </div>

            <div className="list-num">{animals.length}</div>
            <div className="list-wrap">
                {animals.map(animal =>
                    <AnimalsItem
                        key={animal.desetionNo}
                        animal={animal}
                    />
                )}
            </div>
        </div>
    )
}

export default AnimalsList;