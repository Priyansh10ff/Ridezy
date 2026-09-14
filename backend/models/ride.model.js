import mongoose from "mongoose";

const rideSchema = new mongoose.Schema(
  {
    rider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },

    driver: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },

    pickup: {},

    destination: {},

    vechileType: {},

    fare: {},

    status: {},
  },
  {
    timestamps,
  },
);

const ride = mongoose.model("Ride", rideSchema);

export default ride;
