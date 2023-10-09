import React, { useState } from "react";
import Footer from "../Footer/Footer";
import { FaThumbsUp, FaThumbsDown, FaShare } from "react-icons/fa";
const YourReview = () => {
  // State to hold reviews
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ username: "", review: "" });

  // Function to handle review submission
  const handleSubmitReview = (e) => {
    e.preventDefault();

    const reviewObject = {
      username: newReview.username,
      review: newReview.review,
    };

    setReviews([...reviews, reviewObject]);

    setNewReview({ username: "", review: "" });
  };

  return (
    <>
      <div className="pt-[60px]">
        <p className="text-gray-400 text-xl">
          If you are satisfied with our service, then here you can
        </p>
        <p className="text-5xl font-bold text-black pt-[40px]">Give a Review</p>
        <div className="pt-[120px]">
          <div className="max-w-[600px] mx-auto bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Write a Review
            </h2>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-gray-600 text-xl mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                  required
                  value={newReview.username}
                  onChange={(e) =>
                    setNewReview({ ...newReview, username: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="review"
                  className="block text-gray-600 text-xl mb-2"
                >
                  Your Review
                </label>
                <textarea
                  id="review"
                  name="review"
                  rows="4"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                  required
                  value={newReview.review}
                  onChange={(e) =>
                    setNewReview({ ...newReview, review: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="btn-neutral text-white px-4 py-2 rounded-lg hover:bg-gray-400 hover:duration-700"
                >
                  Submit Review
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <h2 className="text-3xl font-bold text-gray-800 mb-4 pt-8">Reviews</h2>
      <div className="lg:grid lg:grid-cols-3 grid-cols-1 gap-10   mt-8  px-16">
        {reviews.map((review, index) => (
          <div key={index} className="mb-4">
            <div className="shadow-md p-4 rounded-lg space-y-3">
              <h3 className="text-2xl text-black font-semibold">
                {review.username}
              </h3>
              <p className="text-gray-400 ">{review.review}</p>
              <div className="mt-2 flex items-center justify-center gap-6">
                <button className="btn-like">
                  <FaThumbsUp />
                </button>
                <button className="btn-dislike">
                  <FaThumbsDown />
                </button>
                <button className="btn-dislike">
                  <FaShare />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="pt-[400px]">
        <Footer />
      </div>
    </>
  );
};
export default YourReview;
