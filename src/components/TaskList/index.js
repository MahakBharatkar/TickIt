import React from "react";
import TaskCard from "../TaskCard.js";
import styles from "./styles.module.css";

const TaskList = ({ tasks, setTasks }) => {
  const onEdit = ({ taskId, updatedTask }) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  if (tasks.length === 0) return;

  return (
    <div classNameName={styles.task_list}>
      {tasks.map((item) => {
        return (
          <TaskCard
            task={item}
            handleDeleteTask={handleDeleteTask}
            onEdit={onEdit}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
