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
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>

						<button onClick={handleLogout}>Cerrar Sesión</button>
					</Link>
					
				</div>
			</div>
		</nav>
	);
};
