import { useNavigate } from "react-router-dom";
import { TfiShare } from "react-icons/tfi";
import { FcLike } from "react-icons/fc";
import { BsArrowRight } from "react-icons/bs";
const EventsCards = ({ cards }) => {
  const navigate = useNavigate();
  const handleViewDetailsClick = () => {
    navigate(`/event-details/${cards.id}`);
  };
  return (
    <div className="mb-8">
      <div className="pt-20 relative">
        <div className="bg-base-100 rounded-xl shadow-xl">
          <figure className="relative">
            <img
              src={cards.event_image}
              alt="Shoes"
              className="rounded-xl w-full h-[200px] object-cover"
            />
            <div className="absolute top-2 left-2 p-2 bg-white text-black rounded">
              <span className="text-md font-bold ">$20</span>
            </div>

            <div className="absolute top-2 right-12 p-2 bg-white rounded-full cursor-pointer">
              <TfiShare />
            </div>
            <div className="absolute top-2 right-2 p-2 bg-white rounded-full cursor-pointer">
              <FcLike />
            </div>
          </figure>
          <div className=" items-center text-center rounded-xl pt-6 space-y-2">
            <div className="flex items-center justify-center gap-6 mx-6">
              <p className="font-bold text-black text-2xl text-center ">
                {cards.event_name}
              </p>
            </div>
            <div>
              <p className="text-lg font-semibold px-3">
                {cards.short_description}
              </p>
            </div>
            <div className="card-actions rounded-xl pb-2 pl-2 justify-center ">
              <button
                className="btn btn-neutral flex justify-center text-white"
                onClick={handleViewDetailsClick}
              >
                Read more
                <BsArrowRight style={{ color: "white" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCards;
