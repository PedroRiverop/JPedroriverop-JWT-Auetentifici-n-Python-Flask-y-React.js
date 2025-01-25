import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopSecret from "../../img/top-secret.png"

export const Private = () => {
    const navigate = useNavigate();
    const handleLogout = () => {
        sessionStorage.removeItem("token"); // Elimina el token del almacenamiento
        navigate("/login"); // Redirige al usuario al login
    };

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
        <div className="container text-center mt-5">
            <h1 className="display-4 fw-bold text-success">🎉 ¡Zona Privada! 🎉</h1>
            <p className="lead text-muted">
                Bienvenido a la zona secreta de MyAuthApp. ¡Solo para usuarios autorizados! 😎
            </p>
            <img src={TopSecret} alt="Zona Privada" className="img-fluid rounded my-4"/>
            <br/>
            <button className="btn btn-warning btn-lg" onClick={handleLogout}>
                Salir de la Zona Privada
            </button>
        </div>
    );
};
