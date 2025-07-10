import React, { useState } from "react";

export default function AddTask({ setTasks }) {
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setTasks(prev => [...prev, {
      name: input,
      completed: false
    }]);
    setInput("");
  };

  return (
    <div className="mb-4">
      <input value={input} onChange={(e) => setInput(e.target.value)} className="border p-1" />
      <button onClick={handleAdd} className="ml-2 bg-green-500 text-white px-2">Add</button>
    </div>
  );
}
