import React, {useEffect, useState} from "react";
import {getAnimals} from "../../services/api";
import AnimalsItem from "./AnimalsItem";
import AnimalsSummarySearch from "../Common/AnimalsSummarySearch";

const AnimalsCats = () => {
    const [animals, setAnimals] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [selected, setSelected] = useState("kindCd");

    useEffect(() => {
        getAnimals(setAnimals, "cats");
    }, [])

    const handleSearchOnChange = (e) => {
        setSearchKey(e.target.value);
    }

    const handleSelectedOnChange = (e) => {
        setSelected(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchKey === "") {
            setAnimals(animals);
        } else {
            if (selected === "kindCd") {
                setAnimals(animals.filter(animal => animal.kindCd.includes(searchKey)));
            } else if (selected === "sexCd") {
                let sex = searchKey === "암" || searchKey === "암컷" ? "F" : (searchKey === "수" || searchKey === "수컷" ? "M" : searchKey);
                setAnimals(animals.filter(animal => animal.sexCd.includes(sex)));
            } else if (selected === "careNm") {
                setAnimals(animals.filter(animal => animal.careNm.includes(searchKey)));
            }
        }
    }

    return (
        <div id="animals-list">
            <AnimalsSummarySearch
                selected={selected}
                searchKey={searchKey}
                handleSelectedOnChange={handleSelectedOnChange}
                handleSearchOnChange={handleSearchOnChange}
                handleSearch={handleSearch}
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