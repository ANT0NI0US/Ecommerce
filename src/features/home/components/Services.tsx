import { FaTruck } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";

interface serviceProps {
  icon: JSX.Element;
  title: string;
  bg: string;
}

const iconStyle: string = "h-7 w-7 text-white md:h-5 md:w-5";

const serviceData: serviceProps[] = [
  {
    icon: <FaTruck className={`${iconStyle}`} />,
    title: "Free Shipping",
    bg: "bg-card-bg-01",
  },
  {
    icon: <FaRepeat className={`${iconStyle}`} />,
    title: "Easy Returns",
    bg: "bg-card-bg-02",
  },
  {
    icon: <MdOutlinePayment className={`${iconStyle}`} />,
    title: "Secure Payment",
    bg: "bg-card-bg-03",
  },
  {
    icon: <RiExchangeDollarLine className={`${iconStyle}`} />,
    title: "Back Guarantee",
    bg: "bg-card-bg-04",
  },
];

export default function Services() {
  return (
    <section className="w-full py-[80px]">
      <div className="flexCenter mx-auto w-[90%] flex-col gap-[10px] sm:w-5/6 md:flex-row">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} flexCenter min-h-[125px] w-full flex-col gap-[15px] rounded-md p-5 text-center md:flex-row md:text-left`}
          >
            <div className="flexCenter rounded-full bg-primary-color p-3 md:p-[10px]">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold md:text-[0.9rem]">
                {item.title}
              </h3>
              <p className="text-base text-light-color md:text-sm">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
