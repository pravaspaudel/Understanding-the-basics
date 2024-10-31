import task from "../models/task.model.js";
import mongoose from "mongoose";

//get any task
const gettask = async (request, response) => {
  try {
    const task1 = await task.findById(request.params.id);
    if (!task1) {
      return response
        .status(404)
        .json({ msg: "Task of {request.paranot found" });
    }
    response.status(200).json({ task1 });
  } catch (e) {
    console.log("error ", e);
    response.status(500).json({ msg: "Server error" });
  }
};

//get all task
const getalltask = async (request, response) => {
  try {
    const tasks = await task.find({}); // fetch all tasks from db
    if (tasks.length === 0) {
      // if array is empty
      return response.status(404).json({ msg: "No tasks of found" });
    }
    response.status(200).json({ tasks });
  } catch (error) {
    console.log("error ", error);
    response.status(500).json({ msg: "Server error" });
  }
};

//update task
const updatetask = (request, response) => {
  try {
    const { id: taskId } = request.params;

    const uptask = task.findOneAndUpdate({ _id: taskId }, request.body, {
      new: true,
      runValidators: true,
    });

    if (!uptask) {
      return response
        .status(404)
        .json({ msg: "Task of {request.paranot found" });
    }
  } catch (error) {
    response.status(500).json({ msg: `sever error ${error}` });
  }
};

//delete task

const deletetask = async (request, response) => {
  try {
    const { id: taskID } = request.params;
    const trimmedTaskID = taskID.trim(); // Remove any whitespace

    if (!trimmedTaskID) {
      return response.status(400).json({ msg: "Invalid ID format" });
    }

    const taskdel = await task.findOneAndDelete({ _id: trimmedTaskID });
    console.log("Request Params:", request.params);

    if (!taskdel) {
      return response
        .status(404)
        .json({ msg: "No task found with the given ID" });
    }

    response.status(200).json({ msg: "Task deleted successfully" });
  } catch (e) {
    console.log("Error deleting task:", e);
    response.status(500).json({ msg: "Server error" });
  }
};

//create task
const createtask = async (request, response) => {
  try {
    const task1 = await task.create(request.body);
    response.status(201).json({ task1 });
  } catch (e) {
    response.status(500).json({ msg: "error" });
  }
};

export { gettask, updatetask, getalltask, deletetask, createtask };
