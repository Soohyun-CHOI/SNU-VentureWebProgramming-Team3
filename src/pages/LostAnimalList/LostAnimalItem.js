import React from "react";
import "../../styles/LostAnimalList/LostAnimalItem.css"

const LostAnimalItem = (props) => {
    return (
        <div id="lost-animal-item">
            <img src={props.lostAnimal.image_url} alt=""/>
            <div className="right-side">
                <div className="traits">
                    <div className="traits-title">등록 일자</div>
                    <div>{props.lostAnimal.created_at.substr(0, 10)}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">특징</div>
                    <div>{props.lostAnimal.feature}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">품종</div>
                    <div>{props.lostAnimal.kind}</div>
                </div>
            </div>
        </div>
    )
}

export default LostAnimalItem;