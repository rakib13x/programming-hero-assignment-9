const YourReview = () => {
  return (
    <div className="pt-[60px]">
      <p className="text-gray-400 text-xl">
        If you are satisfied with our service,then here you can
      </p>
      <p className="text-5xl font-bold text-black pt-[40px]">Give a Review</p>
      <div className="pt-[120px]">
        <div class="max-w-[600px] mx-auto bg-white p-6 rounded-lg shadow-md ">
          <h2 class="text-3xl font-bold text-gray-800 mb-4">Write a Review</h2>
          <form>
            <div class="mb-4">
              <label for="username" class="block text-gray-600 text-xl mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div class="mb-4">
              <label for="review" class="block text-gray-600 text-xl mb-2">
                Your Review
              </label>
              <textarea
                id="review"
                name="review"
                rows="4"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button
                type="submit"
                class="btn-neutral text-white px-4 py-2 rounded-lg hover:bg-gray-400 hover:duration-700"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default YourReview;
