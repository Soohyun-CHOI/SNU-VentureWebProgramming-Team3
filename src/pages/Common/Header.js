import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import "../../styles/Common/Header.css";
import {useAuth} from "../../contexts/AuthContext";

const Header = () => {
    const navigate = useNavigate()
    const {currentUser, logout} = useAuth()

    return (
        <div id="header">
            <div className="header-contents-box">
                <NavLink className="left-side" to="/">사이트이름</NavLink>
                <div className="nav">
                    <NavLink className="nav-item" to="/animals">유기유실동물 공고</NavLink>
                    <NavLink className="nav-item" to="/lost">분실신고</NavLink>
                    <NavLink className="nav-item" to="/animalti">동물티아이</NavLink>
                </div>
                {
                    currentUser ?
                        <div onClick={() => {
                            logout()
                            navigate("/login")
                        }} className="right-side">로그아웃</div>
                        :
                        <div onClick={() => navigate('/login')} className="right-side">로그인</div>
                }


            </div>
        </div>
    )
}

export default Header;