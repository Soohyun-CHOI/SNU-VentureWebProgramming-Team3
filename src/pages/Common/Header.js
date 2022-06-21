import React from "react";
import {NavLink} from "react-router-dom";
import "../../styles/Common/Header.css";

const Header = () => {
    return (
        <div id="header">
            <div className="header-contents-box">
                <NavLink className="left-side" to="/">사이트이름</NavLink>
                <div className="nav">
                    <NavLink className="nav-item" to="/animals">유기유실동물 공고</NavLink>
                    <NavLink className="nav-item" to="/lost">분실신고</NavLink>
                    <NavLink className="nav-item" to="/animalti">동물티아이</NavLink>
                </div>
                <div className="right-side">로그인</div>
            </div>
        </div>
    )
}

export default Header;