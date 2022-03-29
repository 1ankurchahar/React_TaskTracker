import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = (props) => {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);

    // ADD Task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000);
        const newTask = { id, ...task };

        setTasks([...tasks, newTask]);
    };

    // Delete The Task
    const DeleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    // Toggle Reminder
    const changeReminder = (id) => {
        console.log("Reminder", id);
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: !task.reminder } : task,
            ),
        );
    };

    return (
        <div className='container'>
            <Header
                title='Task Manager'
                showAddTask={showAddTask}
                onAdd={() => setShowAddTask(!showAddTask)}
            />
            {/* If ShowAddTask is true then show AddTask Component */}
            {showAddTask && <AddTask onAdd={addTask} />}
            {tasks.length > 0 ? (
                <Tasks
                    tasks={tasks}
                    onDelete={DeleteTask}
                    changeReminder={changeReminder}
                />
            ) : (
                "NO TASKS TO SHOW"
            )}
        </div>
    );
};

export default App;
