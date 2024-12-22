import { FaTruck } from "react-icons/fa";
import { RiExchangeDollarLine } from "react-icons/ri";
import { FaHeadphones } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import Widgets from "../ui/Widgets";
import Container from "@/ui/Container";
import { widgetProps } from "@/utils/types";

const serviceData: widgetProps[] = [
  {
    icon: <FaTruck />,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    icon: <FaHeadphones />,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    icon: <RiSecurePaymentLine />,
    title: "Secure Payment",
    description: "Safe, Trusted Payment Solutions",
  },
  {
    icon: <RiExchangeDollarLine />,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];

export default function Services() {
  return (
    <section className="w-full pb-[40px] md:pb-[80px]">
      <Container>
        <Widgets widgetsData={serviceData} />
      </Container>
    </section>
  );
}
