import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserAccountSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
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
    },

    city: {
      type: String,
    },

    state: {
      type: String,
    },

    pastOrders: {
      type: [String],
    },

    password: {
      type: String,
      required: true,
    },

    latitude: {
      type: String,
      default: "00.000",
    },

    longitude: {
      type: String,
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

UserAccountSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserAccountSchema.methods.ComparePassword = async function (EnteredPassword) {
  return await bcrypt.compare(EnteredPassword, this.password);
};

const UserAccount = mongoose.model("UserAccounts", UserAccountSchema);

export default UserAccount;
