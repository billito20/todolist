import React from "react";

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const toggleCompletion = () => {
    onUpdate(task.id, { ...task, completed: !task.completed });
  };

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleCompletion}
        className="task-checkbox"
      />
      <span className="task-name">{task.name}</span>
      <button onClick={() => onDelete(task.id)} className="delete-task-button">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
