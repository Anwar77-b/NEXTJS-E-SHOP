// import connectDB from "@/lib/mongodb";

import Image from "next/image";
import Review from "../Review";
import { useActionState, useOptimistic, useState } from "react";
import AddReview from "@/lib/shop-actions/shopActions";
import StarRatingInput from "./StarRatingInput";
import { startTransition } from "react";

function ReviewsCards({ info, session }) {
  const [state, addReviewAction] = useActionState(AddReview, undefined);
  const [optRev, setOpRev] = useOptimistic(info.reviews || []);
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = async (formData) => {
    const data = Object.fromEntries(formData);

    // Create a temporary ID for the optimistic review
    const tempId = "temp-" + Date.now();

    const reviewInfo = {
      idd: tempId, // assign the temporary id
      rating: data.rating,
      authorName: data.userName, // Fix typo: userNae -> userName
      comment: data.review,
      reviewerId: data.userId,
    };

    // Optimistically update state inside startTransition
    startTransition(() => {
      setOpRev((prev) => [...prev, reviewInfo]);
    });

    try {
      // Send the new review to the API
      const savedReview = await addReviewAction(formData);

      // Replace the optimistic review with the saved one
      startTransition(() => {
        setOpRev((prev) =>
          prev.map((review) => (review.idd === tempId ? savedReview : review))
        );
      });
    } catch (err) {
      console.log(err);
      // Remove the optimistic review on error
      startTransition(() => {
        setOpRev((prev) => prev.filter((review) => review.idd !== tempId));
      });
    }
  };

  return (
    <div className="py-4">
      <div className="md:flex justify-between items-center">
        <h2 className="text-xl md:text-2xl font-semibold mb-4">
          Customer Reviews
        </h2>
        <select
          name=""
          className="w-full md:w-[200px] p-2 border border-black rounded-md"
        >
          <option value="Newest">Newest</option>
        </select>
      </div>
      <div className="flex items-center gap-4">
        <Review rate={1} />
        <p>{optRev.length} Reviews</p>
      </div>
      {state?.error && <p className="text-red-500">{state.error}</p>}
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent page refresh
          const formData = new FormData(e.target);
          handleSubmit(formData);
        }}
        // action={handleSubmit}
        className={`p-2 border-2 my-2 flex justify-between items-center border-gray-200 rounded-lg ${
          session ? "" : "hidden"
        }`}
      >
        <input
          type="text"
          name="userId"
          defaultValue={session?.userId}
          hidden
        />
        <input type="text" name="productId" defaultValue={info._id} hidden />
        <input
          type="text"
          name="userName"
          defaultValue={session?.userName}
          hidden
        />
        <div className="flex justify-between items-center w-10/12">
          <input
            type="text"
            name="review"
            className="border-0  outline-0 w-10/12"
            placeholder="Share your thoughts"
          />
          <StarRatingInput name="rating" />
        </div>
        <button className="py-2 px-4 bg-black rounded-full text-sm text-white">
          {isPending ? "Adding..." : "Add Review"}
        </button>
      </form>
      <h3 className="text-xl font-semibold my-4">{optRev.length} Reviews</h3>
      {optRev.map((review, i) => {
        if (!review) return null; // Skip undefined reviews
        return <ReviewCard key={i} review={review} />;
      })}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="pb-4 border-b mt-4 border-b-gray-200 mb-2">
      <div className="flex gap-6">
        <div className="relative w-12 h-12 rounded-full bg-red-400">
          <Image fill src={"/chair.jpg"} alt="" className="rounded-full" />
        </div>
        <div>
          <h3 className="pb-1">{review.authorName}</h3>

          <div className="scale-90">
            <Review rate={review.rating} />
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-800 pt-1 md:pl-[4.5rem]">
        {review.comment}
      </p>
    </div>
  );
}

export default ReviewsCards;
