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
    bg: "bg-[#fdefe6]",
  },
  {
    icon: <FaRepeat className={`${iconStyle}`} />,
    title: "Easy Returns",
    bg: "bg-[#ceebe9]",
  },
  {
    icon: <MdOutlinePayment className={`${iconStyle}`} />,
    title: "Secure Payment",
    bg: "bg-[#e2f2b2]",
  },
  {
    icon: <RiExchangeDollarLine className={`${iconStyle}`} />,
    title: "Back Guarantee",
    bg: "bg-[#d6e5fb]",
  },
];

const Services = () => {
  return (
    <section className="w-full pb-[60px] pt-[35px]">
      <div className="flexCenter mx-auto w-5/6 flex-col gap-[10px] md:flex-row">
        {serviceData.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} flexCenter min-h-[125px] w-full flex-col gap-[15px] rounded-md p-5 text-center md:flex-row md:text-left`}
          >
            <div className="flexCenter rounded-full bg-primary-color p-3 md:p-[10px]">
              {item.icon}
            </div>
            <div>
              <h3 className="text-xl font-bold  text-primary-color md:text-[0.9rem]">
                {item.title}
              </h3>
              <p className="text-base text-[#474747] md:text-sm">
                Lorem ipsum dolor sit amet.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
