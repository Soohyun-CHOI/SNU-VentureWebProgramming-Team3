import {useAuth} from "../contexts/AuthContext";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

export const useRedirectToHome = () => {
    const { currentUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (currentUser) {
            navigate("/")
        }
    }, [currentUser])
}