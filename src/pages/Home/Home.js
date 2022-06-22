import React from "react";
import {NavLink} from "react-router-dom";
import "../../styles/Home/Home.css";
import {useAuth} from "../../contexts/AuthContext";

const Home = () => {
    const {currentUser} = useAuth()

    return (
        <div id="home">
            <div className="banner">
                <div className="banner-title">벤처동물학에 오신 것을 환영합니다.</div>
                {currentUser ?
                    <NavLink to="/animals" className="nav-link"><div className="button">유기동물 공고 보러가기</div></NavLink>
                    : <NavLink to="/login" className="nav-link"><div className="button">로그인하고 시작하기</div></NavLink>
                }
            </div>
            <div className="service-wrap">
                <NavLink className="service" to="/animals">🐶 유기유실동물 공고</NavLink>
                <NavLink className="service" to="/lost">📢 분실신고</NavLink>
                <NavLink className="service" to="/animalti">📝 동물티아이</NavLink>
            </div>
        </div>
    )
}

export default Home;
