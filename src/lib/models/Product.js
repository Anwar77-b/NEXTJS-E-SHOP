// models/Product.js
import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
  {
    authorName: {
      type: String,
      required: true,
    },
    reviewerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    comment: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
// Define the Color schema (as an object with name and imgUrl)
const ColorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true, // URL of the image representing the color
  },
});

// Define the Product schema
const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    measurements: {
      type: String, // You can change this to a more complex structure if needed
      required: true,
    },
    colors: {
      type: [ColorSchema], // Array of Color objects
      required: true,
    },
    images: {
      type: [String], // Array of image URLs
      required: true,
    },
    category: {
      type: String, // You can replace this with a reference to a Category model if needed
      required: true,
    },
    reviews: [ReviewSchema], // Now embedded instead of referenced

    sku: {
      type: String,
      required: true,
      unique: true, // Ensures uniqueness of the SKU
    },
    details: String, // Normal field (now a string)

    packaging: {
      width: {
        type: Number,
        required: true,
      },
      height: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
        required: true,
      },
      packages: {
        type: Number,
        required: true,
        default: 1, // Default to 1 package
      },
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

// Create the Product model
const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

export default Product;
