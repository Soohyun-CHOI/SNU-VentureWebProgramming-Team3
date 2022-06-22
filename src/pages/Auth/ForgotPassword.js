import React, {useRef, useState} from "react";
import {Alert} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext";
import {Link} from "react-router-dom";
import "../../styles/Auth/ForgotPassword.css";

export default function ForgotPassword() {
    const emailRef = useRef()
    const {resetPassword} = useAuth()
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage("")
            setError("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage("Check your inbox for further instructions")
        } catch {
            setError("Failed to reset password")
        }

        setLoading(false)
    }

    return (
        <div id="forgot-password">
            <h2 className="title">비밀번호 재설정</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="forgot-password-item">
                    <div>Email</div>
                    <input type="email" ref={emailRef} required/>
                </div>
                <button disabled={loading} type="submit">비밀번호 재설정</button>
            </form>
            <Link to="/login" className="link">로그인</Link>
            <div className="text">
                아직 계정이 없으신가요? <Link to="/signup" className="link">회원가입</Link>
            </div>
        </div>
    )
}
