import React, { useState } from "react";
import styles from "./styles.module.css";
import TaskForm from "../TaskForm";

const COLOR_MAPPING = {
  Low: "#03C988",
  Medium: "#03A5C9",
  High: "#C90327",
};

const TaskCard = ({ task, handleDeleteTask, onEdit }) => {
  const [editMode, setEditMode] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const { id = "", title = "", description = "", priority = "" } = task;

  const handleEditTask = (updatedData) => {
    onEdit({ id, updatedData });
    setEditMode(false);
  };

  return (
    <div
      className={`${styles.task_card} ${isExpanded ? styles.expanded : ""}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {editMode ? (
        <TaskForm
          initialData={task}
          onSubmit={handleEditTask}
          cancelFunction={setEditMode}
        />
      ) : (
        <>
          <div className={styles.title_div}>
            <h3 className={styles.task_title}>{title}</h3>

            <div className={styles.btn_container}>
              <button
                className={styles.edit_btn}
                onClick={(e) => {
                  e.stopPropagation();
                  setEditMode(true);
                }}
              >
                <i className="fas fa-pencil-alt"></i>
              </button>

              <button
                className={styles.delete_btn}
                onClick={(e) => {
                  e.stopPropagation();
                  handleDeleteTask(id);
                }}
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>

          <div
            style={{ background: COLOR_MAPPING[priority] }}
            className={styles.priority_tag}
          >
            {priority}
          </div>

          <p className={styles.task_description}>{description}</p>
        </>
      )}
    </div>
  );
};

export default TaskCard;
