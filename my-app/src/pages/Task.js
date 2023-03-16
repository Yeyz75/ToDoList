import React, { useState } from "react";
import "../styles/Task.css";

function Task() {
    // Definir el estado para la lista de tareas y la tarea actual
    const [taskList, setTaskList] = useState([]);
    const [currentTask, setCurrentTask] = useState("");

    // Función para agregar una tarea a la lista
    const handleAddTask = () => {
        if (currentTask !== "") {
            setTaskList([...taskList, currentTask]);
            setCurrentTask("");
        }
    };

    // Función para eliminar una tarea de la lista
    const handleDeleteTask = (taskIndex) => {
        const newList = [...taskList];
        newList.splice(taskIndex, 1);
        setTaskList(newList);
    };

    // Función para marcar una tarea como completada
    const handleCompleteTask = (taskIndex) => {
        const newList = [...taskList];
        newList[taskIndex] = "✓ " + newList[taskIndex];
        setTaskList(newList);
    };

    // Función para editar una tarea de la lista
    const handleEditTask = (taskIndex) => {
        setCurrentTask(taskList[taskIndex]);
        handleDeleteTask(taskIndex);
    };

    return (
        <div className="task-container">
            <h1>Task List</h1>
            <div className="task-input-container">
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={currentTask}
                    onChange={(e) => setCurrentTask(e.target.value)}
                />
                <button className="add-task" onClick={handleAddTask}>Add Task</button>
            </div>
            <div className="task-list-container">
                <ul className="task-list">
                    {taskList.map((task, index) => (
                        <li key={index}>
                            {task}
                            <div className="task-buttons">
                                <button className="complete-task" onClick={() => handleCompleteTask(index)}>✓</button>
                                <button className="edit-task" onClick={() => handleEditTask(index)}>✎</button>
                                <button className="delete-task" onClick={() => handleDeleteTask(index)}>✕</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Task;

