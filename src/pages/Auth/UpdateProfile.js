import React, {useRef, useState} from "react";
import {Form, Button, Card, Alert} from "react-bootstrap";
import {useAuth} from "../../contexts/AuthContext";
import {Link, useNavigate} from "react-router-dom";
import "../../styles/Auth/UpdateProfile.css";

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const {currentUser, updatePassword, updateEmail} = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises)
            .then(() => {
                navigate("/")
            })
            .catch(() => {
                setError("Failed to update account")
            })
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div id="update-profile">
            <div className="title">프로필 수정</div>
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="update-profile-item">
                    <div>이메일</div>
                    <input
                        type="email"
                        ref={emailRef}
                        required
                        defaultValue={currentUser.email}
                    />
                </div>
                <div className="update-profile-item">
                    <div>비밀번호</div>
                    <input
                        type="password"
                        ref={passwordRef}
                        placeholder="비밀번호 변경을 원하지 않으신다면 이 칸은 비워주세요"
                    />
                </div>
                <div className="update-profile-item">
                    <div>비밀번호 확인</div>
                    <input
                        type="password"
                        ref={passwordConfirmRef}
                        placeholder="비밀번호 변경을 원하지 않으신다면 이 칸은 비워주세요"
                    />
                </div>
                <button disabled={loading} type="submit">프로필 수정</button>
            </form>
            <Link to="/" className="link">취소</Link>
        </div>
    )
}
