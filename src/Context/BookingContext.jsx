import { createContext, useContext, useState } from "react";

const BookingDataContext = createContext();

export const useBookingData = () => {
  return useContext(BookingDataContext);
};

export const BookingDataProvider = ({ children }) => {
  const [bookedEvents, setBookedEvents] = useState([]);

  const addBooking = (event) => {
    setBookedEvents([...bookedEvents, event]);
  };

  const removeBooking = (eventId) => {
    setBookedEvents(bookedEvents.filter((event) => event.id !== eventId));
  };

  return (
    <BookingDataContext.Provider
      value={{
        bookedEvents,
        addBooking,
        removeBooking,
      }}
    >
      {children}
    </BookingDataContext.Provider>
  );
};
