import user from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateToken from "../utils/generateToken.js";

export const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, phone, password } = req.body;

    if (!firstname || !email || !phone || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        message: "Password must be at least 8 characters long",
      });
    }

    const existingUser = await user.findOne({
      $or: [{ email }, { phone }],
    });

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await user.create({
      fullname: {
        firstname : firstname.trim(),
        lastname : lastname?.trim(),
      },
      email,
      phone,
      password: hashedPassword,
      role : "rider"
    });

    const token = generateToken(newUser._id);

    res.cookie("token", token, {
      httpOnly: true,
    });

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        fullname: newUser.fullname,
        email: newUser.email,
        phone: newUser.phone,
        role: newUser.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!password || !email) {
      return res.status(400).json({
        message: "email and password are required",
      });
    }

    const existingUser = await user.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password,
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }

    const token = generateToken(existingUser._id);

    res.cookie("token", token, {
      httpOnly: true,
    });

    return res.status(200).json({
      message: "Login successful",
      user: {
        id: existingUser._id,
        fullname: existingUser.fullname,
        email: existingUser.email,
        phone: existingUser.phone,
        role : existingUser.role
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
      return res.status(400).json({
        message: "Old password and new password are required",
      });
    }

    if (newPassword.length < 8) {
      return res.status(400).json({
        message: "New password must be at least 8 characters long",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      oldPassword,
      req.user.password,
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Old password is incorrect",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    req.user.password = hashedPassword;

    await req.user.save();

    return res.status(200).json({
      message: "Password changed successfully",
    });
  } catch (error) {
    console.error("Change password error:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = req.user;

    return res.status(200).json({
      message: "User fetched successfully.",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
        phone: user.phone,
      },
    });
  } catch (error) {
    console.error("Get user error:", error);

    return res.status(500).json({
      message: "Internal server error.",
    });
  }
};

//chamge password logic to be added
