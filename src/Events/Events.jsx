import { useEffect, useState } from "react";
import EventsCards from "../EventsCards/EventsCards";
import AOS from "aos";
import "aos/dist/aos.css";
const Events = () => {
  const [showCards, setShowCards] = useState([]);
  console.log(showCards);
  useEffect(() => {
    AOS.init({ duration: 2000 });
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        setShowCards(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="pt-20">
      <h2 className="text-3xl font-bold">Experience the Best Events in Town</h2>
      <p className="pt-2 text-xl font-semibold">Get Ready to Be Amazed</p>
      <div
        className="grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 justify-center pl-24 md:gap-10"
        data-aos="fade-bottom"
      >
        {showCards.map((cards) => (
          <EventsCards cards={cards} key={cards.id} />
        ))}
      </div>
    </div>
  );
};

export default Events;
