import React from "react";
import { useBookingData } from "../Context/BookingContext";
import Footer from "../Footer/Footer";

const MyBookings = () => {
  const { bookedEvents, removeBooking } = useBookingData();

  return (
    <>
      <div className="md:max-w-[1400px] max-w-[600px] m-auto w-full pt-[100px] px-14 space-y-6">
        <h2 className="font-bold text-4xl mb-4 pt-8">My Bookings</h2>
        {bookedEvents.length === 0 ? (
          <p>You haven't booked any events yet.</p>
        ) : (
          <div className="grid grid-cols-3 gap-8 pt-8">
            {bookedEvents.map((event) => (
              <div
                key={event.id}
                className="w-96 rounded  bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    src={event.event_image}
                    alt="Shoes"
                    className="rounded"
                  />
                </figure>
                <div className="card-body">
                  <p className="font-bold text-2xl">{event.event_type}</p>
                  <p className="text-xl font-bold">
                    Total cost:${event.ticket_price}
                  </p>
                  <p className=" text-xl">
                    Thank You sir,for book this event.we will contact you as
                    soon as possible.
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="pt-[400px]">
        <Footer />
      </div>
    </>
  );
};

export default MyBookings;
