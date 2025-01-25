import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { useNavigate } from "react-router-dom";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();

	return (
		<div className="container text-center mt-5">
		<h1 className="display-4 fw-bold"> Bienvenido a MyAuthApp </h1>
		<p className="lead text-muted">¡Descubre un mundo seguro con nuestras autenticaciones!</p>
		<img src={rigoImageUrl} alt="MyAuthApp" className="img-fluid rounded my-4" />
		<div>
			<button className="btn btn-primary btn-lg m-2" onClick={() => navigate("/login")} >
				Iniciar Sesión
			</button>
			<button className="btn btn-success btn-lg m-2" onClick={() => navigate("/signup")} >
				Registrarse
			</button>
		</div>
	</div>
	);
};
