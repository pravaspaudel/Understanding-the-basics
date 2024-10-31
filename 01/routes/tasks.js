import express from "express";

const router = express.Router();

import {
  getalltask,
  gettask,
  updatetask,
  createtask,
  deletetask,
} from "../controllers/task.js";

router.route("/").get(getalltask).post(createtask);

router.route("/:id").get(gettask).patch(updatetask).delete(deletetask);

export default router;
