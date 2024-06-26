import Helmet from "@/components/UI/helmet/Helmet";
import Banner from "../components/Banner";
import Services from "../components/Services";
import NewArrivals from "../components/NewArrivals";
import Experiences from "../components/Experiences";
import TimerCount from "../components/TimerCount";
import Materials from "../components/Materials";

const Home = () => {
  return (
    <Helmet title="Home">
      <Banner />
      <Services />
      <NewArrivals />
      <Experiences />
      <TimerCount />
      <Materials />
    </Helmet>
  );
};

export default Home;
