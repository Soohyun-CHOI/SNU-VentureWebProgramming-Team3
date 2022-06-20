import React from "react";
import {NavLink} from "react-router-dom";
import "../../styles/Home/Home.css";

const Home = () => {
    return (
        <div id="home">
            <div className="banner">
                <div className="banner-title">사이트이름에 오신 것을 환영합니다.</div>
                <button>로그인하고 시작하기</button>
            </div>
            <div className="service-wrap">
                <NavLink className="service" to="/animals">🐶 유기유실동물 공고</NavLink>
                <NavLink className="service" to="/report">📢 분실신고</NavLink>
                <NavLink className="service" to="/animalti">📝 동물티아이</NavLink>
            </div>
        </div>
    )
}

export default Home;