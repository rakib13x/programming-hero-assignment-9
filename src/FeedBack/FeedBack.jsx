import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./FeedBack.css";
import { Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function FeedBack() {
  const [showFeedBack, setShowFeedBack] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
    fetch("/feedback.json")
      .then((response) => response.json())
      .then((data) => {
        const shuffledData = shuffleArray(data);
        setShowFeedBack(shuffledData); // Set the shuffled data
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pt-[100px] " data-aos="fade-left">
      <div className="pb-[40px]">
        <p className="text-4xl font-bold text-black ">Customer Reviews</p>
        <p className="text-xl pt-2">See what our Customers saying</p>
      </div>
      {/* For Larger Devices (Grid Layout) */}
      <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4 ">
        {showFeedBack.map((feedback, index) => (
          <div key={index}>
            <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-4">
              <div className="flex items-center">
                <img
                  className="w-12 h-12 rounded-full mr-4 object-contain"
                  src={feedback.image}
                  alt="Customer Avatar"
                />
                <div>
                  <h2 className="text-lg font-semibold">{feedback.name}</h2>
                  <p className="text-gray-600">{feedback.profession}</p>
                </div>
              </div>
              <p className="text-gray-700 mt-4">{feedback.reviews}</p>
              <div className="mt-4 flex justify-between">
                <div className="rating">
                  <input
                    type="radio"
                    name={`rating-${index}`}
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name={`rating-${index}`}
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name={`rating-${index}`}
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name={`rating-${index}`}
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name={`rating-${index}`}
                    className="mask mask-star-2 bg-orange-400"
                  />
                </div>
                <p className="text-gray-600">{feedback.posted}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {showFeedBack.map((feedback, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto mb-4 pt-8">
                <div className="flex items-center gap-8">
                  <div>
                    <img
                      className=" rounded-full mr-4 object-cover"
                      src={feedback.image}
                      height={2}
                      alt="Customer Avatar"
                    />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">{feedback.name}</h2>
                    <p className="text-gray-600">{feedback.profession}</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">{feedback.reviews}</p>
                <div className="mt-4 flex justify-between">
                  <div className="rating">
                    <input
                      type="radio"
                      name={`rating-${index}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${index}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${index}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                    <input
                      type="radio"
                      name={`rating-${index}`}
                      className="mask mask-star-2 bg-orange-400"
                      checked
                    />
                    <input
                      type="radio"
                      name={`rating-${index}`}
                      className="mask mask-star-2 bg-orange-400"
                    />
                  </div>
                  <p className="text-gray-600">{feedback.posted}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
