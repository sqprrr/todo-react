export default function TaskList({ tasks, setTasks }) {
  const toggle = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const remove = (index) => {
    const updated = [...tasks];
    updated.splice(index, 1);
    setTasks(updated);
  };

  return (
    <ul>
      {tasks.map((task, i) => (
        <li key={i} className="flex justify-between mb-2">
          <span className={task.completed ? "line-through" : ""}>{task.name}</span>
          <div>
            <button onClick={() => toggle(i)} className="mr-2">
              {task.completed ? "Undo" : "Done"}
            </button>
            <button onClick={() => remove(i)} className="text-red-500">Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
