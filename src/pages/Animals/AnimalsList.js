import React, {useEffect, useState} from "react";
import "../../styles/Animals/AnimalsList.css";
import axios from "axios";
import {proxyServer, serviceKey} from "../../services/api";

const AnimalsList = () => {
    const [animals, setAnimals] = useState();

    useEffect(() => {
        init();
    }, [])

    const init = async () => {
        const data = await axios.get(`../openApi/abandonmentPublic?serviceKey=${serviceKey}&_type=json`)
        setAnimals(data.result);
    }

    return (
        <div id="animals-list">
            <div className="search-wrap">

            </div>

            <div className="list-num">

            </div>
            <div className="list-wrap">

            </div>
        </div>
    )
}

export default AnimalsList;