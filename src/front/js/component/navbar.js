import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";



export const Navbar = () => {

	const navigate = useNavigate();

    const handleLogout = () => {
        sessionStorage.removeItem("token"); // Elimina el token del almacenamiento
        navigate("/login"); // Redirige al usuario al login
    };

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <span className="navbar-brand">MyAuthApp</span>
				<div>
					<button className="btn btn-outline-light" onClick={() => navigate("/")} > Inicio </button>
				<button className="btn btn-outline-light ms-2" onClick={handleLogout}>Cerrar Sesión</button>
				</div>
                
            </div>
        </nav>
	);
};
