import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, onUpdate, onDelete }) => {
  return (
    <div className="task-list">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onUpdate={onUpdate}
            onDelete={onDelete}
          />
        ))
      ) : (
        <p className="no-tasks">No tasks to display!</p>
      )}
    </div>
  );
};

export default TaskList;
