import React, { useState } from "react";
import "../styles/NavBar.css";

function NavBar() {
    const [active, setActive] = useState(false);

    function handleClick() {
        setActive(!active);
    }

    return (
        <nav>
            <div className="navbar-logo">
                <a href="../pages/Home">Logo</a>
            </div>
            <ul className="navbar-links">
                <li><a href="../pages/Home">Home</a></li>
                <li><a href="../pages/Task">Task</a></li>
                <li><a href="../pages/About">About</a></li>
            </ul>
            <div className="navbar-hamburger" onClick={handleClick}>
                <div className={`hamburger ${active ? "active" : ""}`}></div>
            </div>
            <ul className={`navbar-links-mobile ${active ? "active" : ""}`}>
                <li><a href="../pages/Home">Home</a></li>
                <li><a href="../pages/Task">Task</a></li>
                <li><a href="../pages/About">About</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
