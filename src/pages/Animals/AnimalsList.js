import React, {useEffect, useState} from "react";
import "../../styles/Animals/AnimalsList.css";
import AnimalsItem from "./AnimalsItem";
import {type} from "@testing-library/user-event/dist/type";

const AnimalsList = (props) => {
    const [animals, setAnimals] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [selected, setSelected] = useState("kindCd");

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        setAnimals(props.animals);
    }

    const handleSearchOnChange = (e) => {
        setSearchKey(e.target.value);
    }

    const handleSelectedOnChange = (e) => {
        setSelected(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchKey === "") {
          setAnimals(props.animals);
        } else {
            if (selected === "kindCd") {
                setAnimals(props.animals.filter(animal => animal.kindCd.includes(searchKey)));
            } else if (selected === "sexCd") {
                let sex = searchKey === "암컷" ? "F" : (searchKey === "수컷" ? "M" : searchKey);
                setAnimals(props.animals.filter(animal => animal.sexCd.includes(sex)));
            } else if (selected === "careNm") {
                setAnimals(props.animals.filter(animal => animal.careNm.includes(searchKey)));
            }
        }
        console.log(selected);
    }
    
    return (
        <div id="animals-list">
            <div className="summary">
                「동물보호법」 제17조, 시행령7조 및 동법 시행규칙 제20조에 따라 유기·유실동물을 보호하고 있는 경우에는 소유자 등이<br/>
                보호조치 사실을 알 수 있도록 7일 동안 공고하여야 합니다.<br/>
                공고 중인 동물 소유자는 해당 시군구 및 동물보호센터에 문의하시어 동물을 찾아가시기 바랍니다.<br/>
                다만, 「동물보호법」 제19조 및 동법 시행규칙 제21조에 따라 소유자에게 보호비용이 청구될 수 있습니다.<br/>
                또한 「동물보호법」 제17조에 따른 공고가 있는 날부터 10일이 경과하여도 소유자 등을 알 수 없는 경우에는<br/>
                「유실물법」 제12조 및 「민법」 제253조의 규정에도 불구하고 해당 시·도지사 또는 시장·군수·구청장이 그 동물의 소유권을 취득하게 됩니다.
            </div>
            <div className="search-wrap">
                <form onSubmit={e => handleSearch(e)}>
                    <select name="type" onChange={handleSelectedOnChange} value={selected}>
                        <option value="kindCd">품종</option>
                        <option value="sexCd">성별</option>
                        <option value="careNm">보호센터</option>
                    </select>
                    <input type="text" value={searchKey} onChange={handleSearchOnChange}/>
                    <button type="submit">검색</button>
                </form>
            </div>

            <div className="list-num">총 {animals.length} 건</div>
            <div className="list-wrap">
                {animals ? animals.map(animal =>
                    <AnimalsItem
                        key={animal.desertionNo}
                        animal={animal}
                    />
                ) : null}
            </div>
        </div>
    )
}

export default AnimalsList;