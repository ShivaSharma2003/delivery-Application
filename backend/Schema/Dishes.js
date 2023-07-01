import mongoose from "mongoose";

const DishSchema = mongoose.Schema(
  {
    restaurantId: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      require: true,
      default: "https://unsplash.com/photos/fnztlIb52gU",
    },

    amount: {
      type: Number,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    isVegetarian: {
      type: Boolean,
      required: true,
    },

    isNonVegetarian: {
      type: Boolean,
      required: true,
    },

    description: {
      type: String,
    },

    ratings: Number,
    totalRatings: [],
  },
  {
    timestamps: true,
  }
);

const Dish = mongoose.model("Dish", DishSchema);

export default Dish;
