import React, {useState} from "react";
import {Alert} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import "../../styles/Auth/Dashboard.css";

export default function Dashboard() {
    const [error, setError] = useState("")
    const {currentUser, logout} = useAuth()
    const navigate = useNavigate()

    async function handleLogout() {
        setError("")
        try {
            await logout()
            navigate("/login")
        } catch {
            setError("Failed to log out")
        }
    }

    return (
        <div id="dashboard">
            <div className="title">프로필</div>
            <div className="dashboard-contents-box">
                {error && <Alert variant="danger">{error}</Alert>}
                <div className="text"><span>이메일:</span>{currentUser.email}</div>
                <Link to="/update-profile" className="update-profile">프로필 수정</Link>
            </div>
            <button onClick={handleLogout}>로그아웃</button>
        </div>
    )
}
