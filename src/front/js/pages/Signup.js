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
        <div className="container mt-5">
            <h1 className="text-center mb-4">¡Únete a MyAuthApp! </h1>
            <form
                className="mx-auto p-4 border rounded bg-light shadow"
                style={{ maxWidth: "400px" }}
                onSubmit={handleSubmit}
            >
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Tu correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Contraseña
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    Registrarse
                </button>
            </form>
        </div>
    );
};
