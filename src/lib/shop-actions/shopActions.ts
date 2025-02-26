"use server";

import { mongo } from "mongoose";
import Product from "../models/Product";
import User from "../models/User";
import connectDB from "../mongodb";

export default async function AddReview(prevState, formData: FormData) {
  const data = Object.fromEntries(formData);
  console.log(data);

  if (!data.review) {
    return { error: "Please enter your review" };
  }
  if (!data.rating) {
    return { error: "Please select a rating" };
  }
  try {
    await connectDB();
    const product = await Product.findById(data.productId);
    const reviewInfo = {
      rating: data.rating,
      authorName: data.userName,
      comment: data.review,
      reviewerId: data.userId,
    };
    product.reviews.push(reviewInfo);
    await product.save();
    // console.log("fdsf");

    return { success: "Review added successfully" };
  } catch (error) {
    return { error: "somthing went wrong please try again" };
  }
}
