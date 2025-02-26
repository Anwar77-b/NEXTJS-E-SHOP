import React, { useState } from "react";
import { BsStar } from "react-icons/bs";
import { FaStar } from "react-icons/fa6";

const StarRatingInput: React.FC<{ name: string }> = ({ name }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex flex-col gap-2 mx-2">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => {
          const starValue = i + 1;
          return (
            <span
              key={starValue}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              className="cursor-pointer transition-transform hover:scale-110"
            >
              {starValue <= (hover || rating) ? <FaStar /> : <BsStar />}
            </span>
          );
        })}
      </div>
      {/* Hidden input to store the selected rating */}
      <input
        type="number"
        name={name}
        value={rating}
        readOnly
        className="hidden"
      />
    </div>
  );
};

export default StarRatingInput;
