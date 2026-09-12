import mongoose from "mongoose";

const driverSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    licenseNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },

    isAvailable: {
      type: Boolean,
      default: false,
    },

    rating: {
      type: Number,
      default: 5,
      min: 0,
      max: 5,
    },
  },
  {
    timestamps: true,
  },
);

const Driver = mongoose.model("Driver", driverSchema);

export default Driver;
