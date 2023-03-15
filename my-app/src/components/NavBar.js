import React from "react";
import "../styles/NavBar.css";

function NavBar() {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-brand">
                ToDoList
            </a>
            <div className="navbar-links">
                <a href="/" className="navbar-link">
                    Home
                </a>
                <a href="/tasks" className="navbar-link">
                    Tasks
                </a>
                <a href="/about" className="navbar-link">
                    About
                </a>
            </div>
        </nav>
    );
}

export default NavBar;

