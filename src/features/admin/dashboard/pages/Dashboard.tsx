import Helmet from "@/components/UI/helmet/Helmet";
import CommonSection from "@/components/UI/commonSection/CommonSection";
import { serviceProps } from "@/shared/types";

import ServiceData from "../components/ServiceData";

const servicesData: serviceProps[] = [
  {
    title: "Total Sales",
    bg: "bg-card-bg-01",
  },
  {
    title: "Orders",
    bg: "bg-card-bg-02",
  },
  {
    title: "Total Products",
    bg: "bg-card-bg-03",
  },
  {
    title: "Total Users",
    bg: "bg-card-bg-04",
  },
];

const Dashboard = () => {
  return (
    <Helmet title="Dashboard">
      <CommonSection title="Dashboard" />
      <section className="w-full py-[60px]">
        <div className="flexCenter mx-auto w-5/6 flex-col gap-[10px] md:flex-row">
          {servicesData.map((service, index) => (
            <ServiceData key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </Helmet>
  );
};

export default Dashboard;
