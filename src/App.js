import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([]);
  const [addNewTask, setAddNewTask] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  const handleAddTask = (task) => {
    const newTask = { id: uuidv4(), ...task };
    setTasks([...tasks, newTask]);
  };

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="App">
      <div className="app-container">
      <Header handleInputChange={handleInputChange} searchInput={searchInput}/>
      

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
      <TaskList tasks={tasks} setTasks={setTasks} searchInput={searchInput} />

      </div>

      
    </div>
  );
}

export default App;
