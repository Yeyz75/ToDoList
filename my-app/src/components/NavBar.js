import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <Link to="/pages/Home" className="navbar-brand">
                ToDoList
            </Link>
            <div className="navbar-links">
                <Link to="/pages/Home" className="navbar-link">
                    Home
                </Link>
                <Link to="/pages/Task" className="navbar-link">
                    Tasks
                </Link>
                <Link to="/pages/About" className="navbar-link">
                    About
                </Link>
            </div>
        </nav>
    );
}

export default NavBar;
