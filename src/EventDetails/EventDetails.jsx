import { useState } from "react";
import { useLoaderData, useParams, useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useBookingData } from "../Context/BookingContext";
const EventDetails = () => {
  const cardsData = useLoaderData();
  const { id } = useParams();
  const cardData = Array.isArray(cardsData)
    ? cardsData.find((cardData) => cardData?.id == id)
    : "";
  const [booked, setBooked] = useState(false);

  const { bookedEvents, addBooking, removeBooking } = useBookingData(); // Access the booking data context

  const handleBooked = () => {
    if (!bookedEvents.some((event) => event.id === id)) {
      const selectedEvent = cardsData.find((cardData) => cardData?.id == id);
      addBooking(selectedEvent);
      toast.success(`Booking successful! Thank you for booking.`);
    }
  };
  return (
    <div className="pt-[-230px]">
      <div className="md:max-w-[1400px] max-w-[600px] w-full pt-[100px] px-14 space-y-6">
        <div
          className="hero h-[700px] relative"
          style={{
            backgroundImage: `url(${cardData.event_image})`,
          }}
        >
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md"></div>
          </div>
        </div>
        <p>
          <h2 className="font-bold text-3xl">{cardData.event_name}</h2>
        </p>
        <p className="text-xl">{cardData.description}</p>
      </div>
      <div className="pt-8">
        <button
          className={` h-12 w-[20%] left-6 bottom-4 z-100 border-none hover:bg-slate-300 duration-500 text-white text-xl rounded ${
            booked ? "bg-green-500" : "bg-black"
          }`}
          onClick={handleBooked}
          disabled={false}
        >
          {booked ? "Booked " : " Book a event with us"}
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EventDetails;
