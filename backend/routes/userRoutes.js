import express from "express";
const router = express.Router();
import {
  authUser,
  getUser,
  registerUser,
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

//signin
router.post("/", registerUser);

//login
router.post("/login", authUser);

//auth
router.route("/profile").get(protect, getUser);

export default router;
