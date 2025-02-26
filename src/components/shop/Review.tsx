import React from "react";
import { BsStar } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

interface ReviewProps {
  rate: number;
}

const Review: React.FC<ReviewProps> = ({ rate }) => {
  const clampedRate = Math.max(0, Math.min(5, rate)); // Ensure rate is between 0 and 5
  const stars: React.ReactNode[] = [];

  for (let i = 0; i < clampedRate; i++) {
    stars.push(<FaStar key={`filled-${i}`} />);
  }
  for (let i = 0; i < 5 - clampedRate; i++) {
    stars.push(<BsStar key={`empty-${i}`} />);
  }

  return <div className="flex gap-1 *:scale-90 py-2">{stars}</div>;
};

export default Review;
