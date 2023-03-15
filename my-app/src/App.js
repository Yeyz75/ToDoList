import React from "react";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import ToDoList from "./pages/ToDoList";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <ToDoList />
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
