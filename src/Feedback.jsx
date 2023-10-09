import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

const Feedback = () => {
  return (
    <div>
      {/* For Larger Devices (Grid Layout) */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4">
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-4">
            <div className="flex items-center">
              <img
                className="w-12 h-12 rounded-full mr-4"
                src="https://via.placeholder.com/50"
                alt="Customer Avatar"
              />
              <div>
                <h2 className="text-lg font-semibold">John Doe</h2>
                <p className="text-gray-600">Customer</p>
              </div>
            </div>
            <p className="text-gray-700 mt-4">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              placerat hendrerit urna, id accumsan augue tincidunt eu."
            </p>
            <div className="mt-4 flex justify-between">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="text-gray-600">3 days ago</p>
            </div>
          </div>
        </div>
        ;
      </div>

      <div className="lg:hidden">
        <Swiper slidesPerView={1} navigation pagination={{ clickable: true }}>
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-4">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4"
                  src="https://via.placeholder.com/50"
                  alt="Customer Avatar"
                />
                <div>
                  <h2 className="text-lg font-semibold">John Doe</h2>
                  <p className="text-gray-600">Customer</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                placerat hendrerit urna, id accumsan augue tincidunt eu."
              </p>
              <div className="mt-4 flex justify-between">
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-gray-600">3 days ago</p>
              </div>
            </div>
          </div>
          ;<SwiperSlide>{/* Feedback card content */}</SwiperSlide>
          {/* Add more SwiperSlide components for additional feedback cards */}
        </Swiper>
      </div>
    </div>
  );
};

export default Feedback;
