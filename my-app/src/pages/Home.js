import React from "react";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container">
            <h1>¡Bienvenido a tu To-Do List!</h1>
            <p>Aquí podrás organizar tus tareas diarias de manera fácil y sencilla.</p>
            <img
                className="home-image"
                src="https://cdn.pixabay.com/photo/2017/07/31/11/46/background-2550161_960_720.jpg"
                alt="Imagen de fondo"
            />
        </div>
    );
}

export default Home;
