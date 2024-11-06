import express from "express";
import { signup, login } from "../controllers/authcontroller.js";
import {
  signupvalidation,
  loginvalidation,
} from "../middlewares/datavalidators.js";

const router = express.Router();

router.route("/login").post(loginvalidation, login);
router.route("/signup").post(signupvalidation, signup);

export default router;
