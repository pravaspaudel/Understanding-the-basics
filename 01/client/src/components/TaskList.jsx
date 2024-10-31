import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [inputName, setInputName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/tasks");
        setTasks(response.data.tasks);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Error fetching tasks");
      }
    };
    fetchTasks();
  }, []);

  const handleAddClick = async () => {
    if (!inputName.trim()) return;
    try {
      const response = await axios.post("http://localhost:8000/api/v1/tasks", {
        name: inputName,
        completed: false,
      });

      setTasks((prevTasks) => [...prevTasks, response.data.task1]);
      setInputName("");
    } catch (err) {
      console.error("Error adding task:", err);
      setError("Error adding task");
    }
  };

  return (
    <div className="text-white flex flex-col items-center">
      <h1 className="font-bold mt-5">Add your todos here</h1>
      <div className="flex gap-2">
        <input
          type="text"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
          className="rounded p-2 border-2 border-red-700"
          placeholder="Add task here"
        />
        <button onClick={handleAddClick} className="bg-red-400 p-2 rounded">
          Add
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
      <h2 className="text-center font-semibold mt-5">Task List</h2>
      <div className="bg-green-600 p-4">
        {tasks.map((task) => (
          <div
            key={task._id}
            onClick={() => navigate(`/tasks/${task._id}`)}
            className="p-2 cursor-pointer"
          >
            {task.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
