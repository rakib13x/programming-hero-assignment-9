import Contacts from "../Contacts/Contacts";
import Events from "../Events/Events";
import FeedBack from "../FeedBack/FeedBack";
import Footer from "../Footer/Footer";

import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Events />
      <FeedBack />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
