import express from "express";
import {
  changePassword,
  getUser,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/user.controller.js";
import AuthMiddleware from "../middlewares/auth.middleware.js";

const userRoutes = express.Router();

userRoutes.post("/register", registerUser);
userRoutes.post("/login", loginUser);
userRoutes.post("/logout", logoutUser);
userRoutes.get("/me", AuthMiddleware, getUser);
userRoutes.patch("/change-password", AuthMiddleware, changePassword);

export default userRoutes;
