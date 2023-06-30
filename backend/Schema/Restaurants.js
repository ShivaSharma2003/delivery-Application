import mongoose from "mongoose";

const RestaurantSchema = mongoose.Schema(
  {
    time: {
      type: Date,
      default: Date.now,
    },

    adminId: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    Image: {
      type: String,
      required: true,
      default: "https://unsplash.com/photos/poI7DelFiVA",
    },

    address: {
      type: String,
    },

    city: {
      type: String,
    },

    State: {
      type: String,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    openAt: {
      type: String,
      required: true,
    },

    closeAt: {
      type: String,
      required: true,
    },

    isRestaurantOpen: {
      type: Boolean,
      required: true,
      default: true,
    },

    isVegetarian: {
      type: Boolean,
      required: true,
      default: true,
    },

    isNonVegetarian: {
      type: Boolean,
      required: true,
      default: false,
    },

    logitude: {
      type: String,
      required: true,
      default: "00.0000",
    },

    latitude: {
      type: String,
      required: true,
      default: "00.000",
    },

    dishes: {
      type: [String],
    },

    ratings: {
      type: Number,
    },

    totalRating: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

const Restaurant = await mongoose.model("Restaurants", RestaurantSchema);

export default Restaurant;
