import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://crispy-guacamole-xjr7j4w5rvxfvvvr-3001.app.github.dev/api/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            navigate("/login");
        } else {
            alert("Error en el registro");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
            <button type="submit">Registrar</button>
        </form>
    );
};
