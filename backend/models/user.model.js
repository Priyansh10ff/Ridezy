import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullname: {
      firstname: {
        type: String,
        required: true,
        minlength: 3,
        trim: true,
      },
      lastname: {
        type: String,
        minlength: 3,
        trim: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["rider", "driver"],
      default: "rider",
    },
  },
  {
    timestamps: true,
  },
);

const user = mongoose.model("User", userSchema);

export default user;
