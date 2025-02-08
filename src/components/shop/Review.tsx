import React from "react";
import { BsStar } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

function Review() {
  return (
    <div className="flex gap-1 *:scale-90 py-2">
      <FaStar></FaStar>
      <FaStar></FaStar>
      <FaStar></FaStar>
      <FaStar></FaStar>
      <BsStar></BsStar>
    </div>
  );
}

export default Review;
