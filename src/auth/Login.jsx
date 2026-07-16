import { useNavigate } from "react-router-dom";
import React from "react";
import Button from "../Components/Button";

function Login () {
    const navigate = useNavigate();
    function handleLogin() {
        localStorage.setItem(1234, 123);

        navigate("/dashboard");
    }

    return (
        <Button name="login-btn" onClick={handleLogin}>
            Login
        </Button>
    );
}

export default Login;