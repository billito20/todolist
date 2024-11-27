import React, { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAdd({ id: Date.now(), name: taskName, completed: false });
      setTaskName("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-task-button">
        Add
      </button>
    </form>
  );
};

export default AddTask;
