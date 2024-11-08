import express from "express";
import {
  loginvalidator,
  signupvalidator,
} from "../middlewares/userValidator.js";
import { handlelogin, handlesignup } from "../controllers/usercontrollers.js";

const router = express.Router();

router.route("/signup").post(signupvalidator, handlesignup);
router.route("/login").post(loginvalidator, handlelogin);

export default router;
