import mongoose from "mongoose";

const UserAccountSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: [String],
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    pastOrders: {
      type: [String],
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    latitude: {
      type: String,
      required: true,
      default: "00.000",
    },

    longitude: {
      type: String,
      required: true,
      default: "00.000",
    },

    favouritesRestaurants: {
      type: [String],
    },

    Cart: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const UserAccount = mongoose.model("UserAccount", UserAccountSchema);

export default UserAccount;
