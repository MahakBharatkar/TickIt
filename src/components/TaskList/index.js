import React, { useEffect, useState } from "react";
import TaskCard from "../TaskCard.js";
import styles from "./styles.module.css";

const TaskList = ({ tasks, setTasks, searchInput, activeTab }) => {
  const [filteredTasks, setFilteredTasks] = useState([]);

  const onEdit = ({ taskId, updatedTask }) => {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, ...updatedTask } : task
    );
    setTasks(newTasks);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    const result = tasks.filter((task) => {
      const { title, priority } = task;

      let filterTasksBySearch = true;
      let filterTasksByPriority = true;

      if (searchInput) {
        filterTasksBySearch = title
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      }

      if (activeTab) {
        filterTasksByPriority = activeTab === priority;
      }

      return filterTasksBySearch && filterTasksByPriority;
    });
    setFilteredTasks(result);
  }, [searchInput, tasks, activeTab]);

  if (filteredTasks.length === 0) return;

  return (
    <div className={styles.task_list}>
      {filteredTasks.map((item) => {
        return (
          <TaskCard
            key={item.id}
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
