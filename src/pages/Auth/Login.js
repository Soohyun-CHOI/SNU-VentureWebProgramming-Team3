import React, {useRef, useState} from "react";
import {Alert} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import {useRedirectToHome} from "../../hooks/Redirection";
import "../../styles/Auth/Login.css";

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useRedirectToHome()

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError("Failed to log in")
        }
        setLoading(false)
    }

    return (
        <div id="login">
            <div className="title">로그인</div>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="login-item">
                    <div>이메일</div>
                    <input type="email" ref={emailRef} required/>
                </div>
                <div className="login-item">
                    <div>비밀번호</div>
                    <input type="password" ref={passwordRef} required/>
                </div>
                <button disabled={loading} type="submit">로그인</button>
            </form>
            <Link to="/forgot-password" className="link">비밀번호 찾기</Link>
            <div className="text">
                아직 계정이 없으신가요? <Link to="/signup" className="link">회원가입</Link>
            </div>
        </div>
    )
}
