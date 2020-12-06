import express from "express";
const router = express.Router();
import {
  authUser,
  getUser,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser,
  getUserById,
  updateUser,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

//signin
router.post("/", registerUser);

//get all users
router.get("/", protect, admin, getUsers);

//login
router.post("/login", authUser);

//auth
router.route("/profile").get(protect, getUser).put(protect, updateUserProfile);

//get user by id
router.get("/:id", protect, admin, getUserById);

//update user by id
router.put("/:id", protect, admin, updateUser);

//delete user by id
router.delete("/:id", protect, admin, deleteUser);

export default router;
