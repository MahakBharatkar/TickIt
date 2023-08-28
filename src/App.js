import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [addNewTask, setAddNewTask] = useState(false);

  const handleAddTask = (task) => {
    const newTask = { id: uuidv4(), ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <h1 className="heading">Tickit</h1>

      {addNewTask ? (
        <TaskForm onSubmit={handleAddTask} cancelFunction={setAddNewTask} />
      ) : (
        <div>
          <button
            className="add_new_button"
            onClick={() => setAddNewTask(true)}
          >
            + New Task
          </button>
        </div>
      )}
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
