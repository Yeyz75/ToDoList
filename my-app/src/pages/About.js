import React from "react";
import "../styles/About.css";

function About() {
    return (
        <div className="about-container">
            <h1>About</h1>
            <p>A To-Do List is a tool that helps you manage your tasks, keep track of your progress, and stay organized. It can be used for personal or professional purposes, and is an effective way to improve productivity and manage time more efficiently.</p>
            <h2>Key Features</h2>
            <ul>
                <li>Add, edit, and delete tasks</li>
                <li>Set deadlines and reminders</li>
                <li>Assign priorities and categories</li>
                <li>Filter and sort tasks</li>
                <li>Collaborate with others</li>
            </ul>
            <h2>About Us</h2>
            <p>We are a team of passionate developers dedicated to creating innovative solutions that improve people's lives. Our mission is to simplify the way people work, learn, and connect with each other.</p>
            <h2>Contact Us</h2>
            <p>If you have any questions or issues with our app, please don't hesitate to contact us at support@mytodolist.com.</p>
        </div>
    );
}

export default About;