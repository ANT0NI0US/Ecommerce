import { FaTruck } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";

interface serviceProps {
  icon: JSX.Element;
  title: string;
}

const iconStyle: string =
  "h-7 w-7 text-light-color dark:text-light-color md:h-5 md:w-5";

const serviceData: serviceProps[] = [
  {
    icon: <FaTruck className={`${iconStyle}`} />,
    title: "Free Shipping",
  },
  {
    icon: <FaRepeat className={`${iconStyle}`} />,
    title: "Easy Returns",
  },
  {
    icon: <MdOutlinePayment className={`${iconStyle}`} />,
    title: "Secure Payment",
  },
  {
    icon: <RiExchangeDollarLine className={`${iconStyle}`} />,
    title: "Back Guarantee",
  },
];

export default function Services() {
  return (
    <section className="w-full bg-secondary-color-light py-[80px] dark:bg-secondary-color">
      <div className="flexCenter mx-auto w-[90%] flex-col gap-[10px] sm:w-5/6 md:flex-row">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className={`flexCenter min-h-[125px] w-full flex-col gap-[15px] rounded-md p-5  text-center odd:bg-card-bg-02-light even:bg-card-bg-04-light odd:dark:bg-card-bg-02 even:dark:bg-card-bg-01 md:flex-row md:text-left`}
          >
            <div className="flexCenter rounded-full bg-primary-color-light p-3 dark:bg-main-color md:p-[10px]">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary-color-light dark:text-main-color md:text-[0.9rem]">
                {item.title}
              </h3>
              <p className="text-base text-light-color dark:text-light-color md:text-sm">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
