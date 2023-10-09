import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Hero.css";
import { Pagination, Navigation } from "swiper/modules";

function shuffleArray(array) {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

export default function Hero() {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const shuffledData = shuffleArray(data);
        setSlider(shuffledData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="pt-10">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {slider.map((sliderImage, index) => (
          <SwiperSlide key={index}>
            <img
              src={sliderImage.event_image}
              className="object-cover"
              style={{ height: "600px" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
