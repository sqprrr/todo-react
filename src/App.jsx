import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import Filters from "./components/Filters";

export default function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = tasks.filter(task =>
    filter === "all" ? true :
    filter === "completed" ? task.completed :
    !task.completed
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <AddTask setTasks={setTasks} />
      <Filters filter={filter} setFilter={setFilter} />
      <TaskList tasks={filteredTasks} setTasks={setTasks} />
    </div>
  );
}
