import React, {useRef, useState} from "react";
import {Alert} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import {useRedirectToHome} from "../../hooks/Redirection";
import "../../styles/Auth/Signup.css";

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {signup} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    useRedirectToHome()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <div id="signup">
            <div className="title">회원가입</div>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="signup-item">
                    <div>이메일</div>
                    <input type="email" ref={emailRef} required/>
                </div>
                <div className="signup-item">
                    <div>비밀번호</div>
                    <input type="password" ref={passwordRef} required/>
                </div>
                <div className="signup-item">
                    <div>비밀번호 확인</div>
                    <input type="password" ref={passwordConfirmRef} required/>
                </div>
                <button disabled={loading} type="submit">회원가입</button>
            </form>
            <div className="text">
                이미 계정이 있으신가요? <Link to="/login" className="link">로그인</Link>
            </div>
        </div>
    )
}
