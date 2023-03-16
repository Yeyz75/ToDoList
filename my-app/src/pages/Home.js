import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-header">
                <h1>ToDo List</h1>
                <p>A simple and minimalistic task manager</p>
            </div>
            <div className="home-content">
                <p>Stay organized and manage your tasks with ToDo List. Create a new task, mark it as complete, or delete it when it's no longer needed.</p>
                <Link to="../pages/Task" className="home-btn">Get Started</Link>
            </div>
            <div className="home-features">
                <h2>Features</h2>
                <ul>
                    <li>Simple and intuitive user interface</li>
                    <li>Create new tasks and assign due dates</li>
                    <li>Mark tasks as complete or delete them</li>
                    <li>Filter tasks by status or due date</li>
                </ul>
            </div>
        </div>
    );
};

export default Home;
