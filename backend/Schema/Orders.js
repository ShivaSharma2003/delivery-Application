import mongoose, { mongo } from "mongoose";

const OrderSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    restaurantId: {
      type: String,
      required: true,
    },

    deliveryFees: {
      type: Number,
      required: true,
    },

    TotalAmount: {
      type: Number,
      required: true,
    },

    isdelivered: {
      type: Boolean,
      required: true,
    },

    isPaid: {
      type: Boolean,
      required: true,
    },

    paymentMethod: {
      type: String,
      required: true,
      default: "cash",
    },

    orderDate: {
      type: Date,
      required: true,
      default: Date.now,
    },

    ratings: {
      type: Number,
      default: 0,
    },

    totalItems: {
      type: Number,
      required: true,
    },

    totalDish: {
      type: [String],
      required: true,
    },

    isRated: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

const Orders = mongoose.model("Orders", OrderSchema);

export default Orders;
