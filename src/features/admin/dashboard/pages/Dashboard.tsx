import CommonSection from "@/ui/CommonSection";
import { serviceProps } from "@/shared/types";

import ServiceData from "../components/ServiceData";
import useHelmet from "@/hooks/useHelmet";

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

export default function Dashboard() {
  useHelmet("Dashboard");
  return (
    <>
      <CommonSection title="Dashboard" />
      <section className="w-full py-[60px]">
        <div className="flexCenter mx-auto w-5/6 flex-col gap-[10px] md:flex-row">
          {servicesData.map((service, index) => (
            <ServiceData key={index} service={service} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
