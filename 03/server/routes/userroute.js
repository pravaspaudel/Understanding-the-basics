import express from "express";
import {
  loginvalidator,
  signupvalidator,
} from "../middlewares/userValidator.js";
import {
  handlelogin,
  handlesignup,
  handleShop,
} from "../controllers/usercontrollers.js";
import authenticateuser from "../middlewares/authentication.js";

const router = express.Router();

router.route("/signup").post(signupvalidator, handlesignup);
router.route("/login").post(loginvalidator, handlelogin);
router.route("/shop").get(authenticateuser, handleShop);

export default router;
