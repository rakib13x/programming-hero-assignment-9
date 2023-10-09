import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="py-[120px]" data-aos="fade-right">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-gray-500 font-semibold">Wanna know more about us</p>
        <h1 className="text-3xl font-bold text-black">
          Subscribe To Get The Latest
          <br />
          <span className="flex items-center justify-center">
            News About Us
          </span>
        </h1>
        <p className="text-md text-gray-400 pb-6">
          Please Drop Your Email Below To Get Daily Update About What We Do
        </p>
        <div className="p-1 border border-black rounded-xl ">
          <input
            className="h-12 w-[300px] rounded items-center pl-4 focus:outline-none"
            placeholder="Enter Your Email Address"
          />
          <button className="h-12 w-[130px] bg-black rounded-xl text-white">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
