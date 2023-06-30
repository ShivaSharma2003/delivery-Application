import mongoose from "mongoose";

const CartSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    restuarantId: {
      type: String,
      required: true,
    },

    dishId: {
      type: [String],
      required: true,
    },
    items: {
      type: [String],
      required: true,
    },
    deliveryFees: {
      type: Number,
      required: true,
    },

    gstCharge: {
      type: Number,
      required: true,
    },

    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", CartSchema);

export default Cart;
