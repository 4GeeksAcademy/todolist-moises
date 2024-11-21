import React, { useState } from "react";

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && newTask.trim()) {
            setTasks([...tasks, newTask.trim()]);
            setNewTask("");
        }
    };

    const handleDelete = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <div className="todo-container">
            <h1 className="todo-title">TodoList</h1>
            <input
                type="text"
                className="todo-input"
                placeholder="Añadir una tarea"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <ul className="todo-list">
                {tasks.length > 0 ? (
                    <>
                        {tasks.map((task, index) => (
                            <li key={index} className="task-item">
                                <span className="task-text">{task}</span>
                                <button
                                    onClick={() => handleDelete(index)}
                                    className="delete-button"
                                >
                                    X
                                </button>
                            </li>
                        ))}
                        <li className="task-count">
                            Tareas pendientes: {tasks.length}
                        </li>
                    </>
                ) : (
                    <li className="empty-list">No hay tareas, añadir tareas</li>
                )}
            </ul>
        </div>
    );
};

export default Home;
