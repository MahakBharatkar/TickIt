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
  const [activeTab, setActiveTab] = useState("");

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
        <Header
          handleInputChange={handleInputChange}
          searchInput={searchInput}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          setAddNewTask={setAddNewTask}
        />

        {addNewTask ? (
          <TaskForm onSubmit={handleAddTask} cancelFunction={setAddNewTask} />
        ) : null}
        <TaskList
          tasks={tasks}
          setTasks={setTasks}
          searchInput={searchInput}
          activeTab={activeTab}
        />
      </div>
    </div>
  );
}

export default App;
