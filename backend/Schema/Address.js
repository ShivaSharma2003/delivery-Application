import mongoose from "mongoose";

const AddressSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },

    userName:
    {
      type : String,
      required : true
    },
    
    phoneNumber: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    Block: {
      type: String,
    },

    plotNumber: {
      type: String,
    },
    landmark: {
      type: String,
    },

    streetName: {
      type: String,
    },

    locality: {
      type: String,
    },

    pincode: {
      type: String,
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
    country: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

const Address = mongoose.model("Addresses", AddressSchema);

export default Address;
