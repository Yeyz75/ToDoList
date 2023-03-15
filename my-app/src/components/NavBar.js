import React from "react";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <a href="/home" className="navbar-brand">
                ToDoList
            </a>
            <div className="navbar-links">
                <a href="../pages/Home.js" className="navbar-link">
                    Home
                </a>
                <a href="../pages/Task" className="navbar-link">
                    Tasks
                </a>
                <a href="../pages/About" className="navbar-link">
                    About
                </a>
            </div>
        </nav>
    );
}

export default NavBar;

