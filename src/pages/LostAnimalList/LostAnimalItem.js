import React from "react";
import "../../styles/LostAnimalList/LostAnimalItem.css"

const LostAnimalItem = (props) => {
    return (
        <div id="lost-animal-item">
            <img src={props.lostAnimal.image_url} alt=""/>
            <div className="center-side">
                <div className="traits">
                    <div className="traits-title">품종</div>
                    <div>{props.lostAnimal.kind}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">성별</div>
                    <div>{props.lostAnimal.sex}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">분실일자</div>
                    <div>{props.lostAnimal.last_datetime_of_notice.substr(0, 10)}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">분실장소</div>
                    <div>{props.lostAnimal.located_at}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">특징</div>
                    <div>{props.lostAnimal.feature}</div>
                </div>
                <div className="traits">
                    <div className="traits-title">상태</div>
                    <div>{props.lostAnimal.status}</div>
                </div>
            </div>
            <div className="right-side">
                접수일: {props.lostAnimal.created_at.substr(0, 10)}
            </div>
        </div>
    )
}

export default LostAnimalItem;