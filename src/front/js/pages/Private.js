import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Private = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Obtener el token del sessionStorage
        const token = sessionStorage.getItem("token");
        
        // Si no hay token, redirige a la página principal
        if (!token) {
            navigate("/");
        }
    }, [navigate]);

    // Renderizar un mensaje divertido
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>🎉 ¡Bienvenido a la zona privada! 🎉</h1>
            <p>¡Este es un espacio secreto solo para usuarios con acceso! 😎</p>
        </div>
    );
};
