// models/User.js
import mongoose from "mongoose";

// Define the address schema (can be reused for both billing and shipping addresses)
const AddressSchema = new mongoose.Schema({
  address: {
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
  phoneNumber: {
    type: String,
    required: true,
  },
});

// Define the User schema
const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    dispName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Ensure email is unique
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"], // Email validation
    },
    password: {
      type: String,
      required: true,
    },
    billingAddress: AddressSchema, // Embedding the address schema for billing
    shippingAddress: AddressSchema, // Embedding the address schema for shipping
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the User model
const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
