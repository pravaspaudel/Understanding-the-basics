import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"; // Import Axios

const TaskDetails = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [newName, setNewName] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/v1/tasks/${id}`
        );
        setTask(response.data.task1);
        setNewName(response.data.task1.name);
      } catch (err) {
        console.error("Fetch error:", err);
        setError("Error fetching task");
      }
    };
    fetchTask();
  }, [id]);

  const handleUpdate = async () => {
    if (!newName.trim()) return;
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/v1/tasks/${id}`,
        {
          name: newName,
        }
      );
      console.log(response.data);
      navigate("/");
    } catch (err) {
      console.error("Error updating task:", err);
      setError("Error updating task");
    }
  };

  return (
    <div className="text-black flex flex-col items-center">
      {error && <p className="text-red-500">{error}</p>}
      {task ? (
        <>
          <h1 className="font-bold mt-5">Edit Task</h1>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className="rounded p-2 border-2 border-red-700"
          />
          <button
            onClick={handleUpdate}
            className="bg-blue-400 p-2 rounded mt-2"
          >
            Update Task
          </button>
        </>
      ) : (
        <p>Loading task...</p>
      )}
    </div>
  );
};

export default TaskDetails;
