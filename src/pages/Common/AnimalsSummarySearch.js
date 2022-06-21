import React, {useState} from "react";
import "../../styles/Common/AnimalsSummarySearch.css";

const AnimalsSummarySearch = (props) => {
    const [searchKey, setSearchKey] = useState("");
    const [selected, setSelected] = useState("kindCd");

    const handleSearchOnChange = (e) => {
        setSearchKey(e.target.value);
    }

    const handleSelectedOnChange = (e) => {
        setSelected(e.target.value);
    }

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchKey === "") {
            props.setAnimals(props.originData);
        } else {
            if (selected === "kindCd") {
                props.setAnimals(props.originData.filter(animal => animal.kindCd.includes(searchKey)));
            } else if (selected === "sexCd") {
                let sex = searchKey === "암" || searchKey === "암컷" ? "F" : (searchKey === "수" || searchKey === "수컷" ? "M" : searchKey);
                props.setAnimals(props.originData.filter(animal => animal.sexCd.includes(sex)));
            } else if (selected === "careNm") {
                props.setAnimals(props.originData.filter(animal => animal.careNm.includes(searchKey)));
            }
        }
    }

    return (
        <div id="animals-summary-search">
            <div className="summary">
                ✔️ 「동물보호법」 제17조, 시행령7조 및 동법 시행규칙 제20조에 따라 유기·유실동물을 보호하고 있는 경우에는 소유자 등이
                보호조치 사실을 알 수 있도록 7일 동안 공고하여야 합니다.<br/>
                ✔️ 공고 중인 동물 소유자는 해당 시군구 및 동물보호센터에 문의하시어 동물을 찾아가시기 바랍니다.<br/>
                ✔️ 다만, 「동물보호법」 제19조 및 동법 시행규칙 제21조에 따라 소유자에게 보호비용이 청구될 수 있습니다.<br/>
                ✔️ 또한 「동물보호법」 제17조에 따른 공고가 있는 날부터 10일이 경과하여도 소유자 등을 알 수 없는 경우에
                「유실물법」 제12조 및 「민법」 제253조의 규정에도 불구하고 해당 시·도지사 또는 시장·군수·구청장이 그 동물의 소유권을 취득하게 됩니다.
            </div>

            <div className="search-title">유기유실동물 검색 🔎</div>
            <div className="search-wrap">
                <form onSubmit={e => handleSearch(e)}>
                    <span>검색유형</span>
                    <select name="type" onChange={handleSelectedOnChange} value={selected}>
                        <option value="kindCd">품종</option>
                        <option value="sexCd">성별</option>
                        <option value="careNm">보호센터</option>
                    </select>
                    <span>검색어</span>
                    <input type="text" value={searchKey} onChange={handleSearchOnChange} placeholder="검색어를 입력하세요."/>
                    <button type="submit">검색</button>
                </form>
                <div className="search-notice">
                    ✔️ 공고중인 동물 소유자는 [자세히 보기]를 참고하시어 해당 시군구 및 동물보호센터 또는 동물보호상담센터 1577-0954로 문의하시기 바랍니다.<br/>
                    ✔️ 동물보호센터 및 동물병원 근무시간은 09:00시부터 18:00까지이므로 문의전화는 근무시간에만 가능합니다.
                </div>
            </div>
        </div>
    )
}

export default AnimalsSummarySearch;