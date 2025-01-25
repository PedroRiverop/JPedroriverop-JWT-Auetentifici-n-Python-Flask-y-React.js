import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await fetch("https://crispy-guacamole-xjr7j4w5rvxfvvvr-3001.app.github.dev/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            const data = await response.json();
            sessionStorage.setItem("token", data.token);
            navigate("/private");
        } else {
            alert("Login fallido");
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};
