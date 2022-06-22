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
                <NavLink className="left-side" to="/">벤처동물학</NavLink>
                <div className="nav">
                    <NavLink className="nav-item" to="/animals">유기유실동물 공고</NavLink>
                    <NavLink className="nav-item" to="/lost">분실신고</NavLink>
                    <NavLink className="nav-item" to="/animalti">동물티아이</NavLink>
                </div>
                <div className="right-side">
                    {currentUser ?
                        <>
                            <div onClick={() => navigate("/dashboard")} className="auth">프로필</div>
                            <div onClick={() => {
                                logout();
                                navigate("/login");
                            }} className="auth">로그아웃
                            </div>
                        </>
                        :
                        <>
                            <div onClick={() => navigate("/login")} className="auth">로그인</div>
                            <div onClick={() => navigate("/signup")} className="auth">회원가입</div>
                        </>
                    }
                </div>


            </div>
        </div>
    )
}

export default Header;
