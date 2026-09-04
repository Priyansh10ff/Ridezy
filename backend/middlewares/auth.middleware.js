import jwt from "jsonwebtoken";
import user from "../models/user.model.js";

const AuthMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({
        message: "Unauthorized. Please login first.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const existingUser = await user.findById(decoded.userId);

    if (!existingUser) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = existingUser;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};

export default AuthMiddleware;
