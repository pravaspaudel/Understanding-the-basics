import express from "express";
import { signup, login } from "../controllers/authcontroller.js";
import {
  signupvalidation,
  loginvalidation,
} from "../middlewares/datavalidators.js";

const router = express.Router();

router.route("/login").post(signupvalidation, login);
router.route("/signup").post(loginvalidation, signup);

export default router;
