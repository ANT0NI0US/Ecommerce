import Banner from "../components/Banner";
import Services from "../components/Services";
import NewArrivals from "../components/NewArrivals";
import Experiences from "../components/Experiences";
import Offers from "../components/offers/Offers";
import OurHappyCustomers from "../components/OurHappyCustomers";
import Materials from "../components/Materials";
import useHelmet from "@/hooks/useHelmet";

export default function Home() {
  useHelmet("Home");
  return (
    <>
      <Banner />
      <NewArrivals />
      <Services />
      <Experiences />
      <Offers />
      <OurHappyCustomers />
      <Materials />
    </>
  );
}
