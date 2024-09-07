import { widgetProps } from "@/utils/types";
import Widgets from "@/ui/Widgets";
import { FaTruck } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";

const iconStyle: string =
  "h-7 w-7 text-light-color dark:text-light-color md:h-5 md:w-5";

const serviceData: widgetProps[] = [
  {
    icon: <FaTruck className={`${iconStyle}`} />,
    title: "Free Shipping",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <FaRepeat className={`${iconStyle}`} />,
    title: "Easy Returns",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <MdOutlinePayment className={`${iconStyle}`} />,
    title: "Secure Payment",
    description: "Lorem ipsum dolor sit amet.",
  },
  {
    icon: <RiExchangeDollarLine className={`${iconStyle}`} />,
    title: "Back Guarantee",
    description: "Lorem ipsum dolor sit amet.",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-secondary-color-light py-[80px] dark:bg-secondary-color">
      <Widgets widgetsData={serviceData} />
    </section>
  );
}
