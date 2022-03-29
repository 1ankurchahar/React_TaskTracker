import React from "react";

const Task = ({ task, onDelete, changeReminder }) => {
    return (
        <div
            onDoubleClick={() => changeReminder(task.id)}
            className={`task ${task.reminder ? "reminder" : ""}`}>
            <h3>
                {task.text}
                <span
                    onClick={() => onDelete(task.id)}
                    style={{ color: "red", cursor: "pointer" }}>
                    x
                </span>
            </h3>
            <p>{task.day}</p>
        </div>
    );
};

export default Task;
