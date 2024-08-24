import Helmet from "@/components/UI/helmet/Helmet";
import Banner from "../components/Banner";
import Services from "../components/Services";
import NewArrivals from "../components/NewArrivals";
import Experiences from "../components/Experiences";
import Offers from "../components/offers/Offers";
import Materials from "../components/Materials";

export default function Home() {
  return (
    <Helmet title="Home">
      <Banner />
      <NewArrivals />
      <Services />
      <Experiences />
      <Offers />
      <Materials />
    </Helmet>
  );
}
