import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, onDelete, changeReminder }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    onDelete={onDelete}
                    changeReminder={changeReminder}
                />
            ))}
        </>
    );
};

export default Tasks;
