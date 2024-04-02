import { motion } from "framer-motion";
import { FaTruck } from "react-icons/fa";
import { FaRepeat } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { RiExchangeDollarLine } from "react-icons/ri";

interface serviceProps {
  icon: JSX.Element;
  title: string;
  subtitle: string;
  bg: string;
}

const serviceData: serviceProps[] = [
  {
    icon: <FaTruck className="text-white w-7 h-7 md:w-5 md:h-5" />,
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "bg-[#fdefe6]",
  },
  {
    icon: <FaRepeat className="text-white w-7 h-7 md:w-5 md:h-5" />,
    title: "Easy Returns",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "bg-[#ceebe9]",
  },
  {
    icon: <MdOutlinePayment className="text-white w-7 h-7 md:w-5 md:h-5" />,
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "bg-[#e2f2b2]",
  },
  {
    icon: <RiExchangeDollarLine className="text-white w-7 h-7 md:w-5 md:h-5" />,
    title: "Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "bg-[#d6e5fb]",
  },
];

const Services = () => {
  return (
    <section className="w-full pt-[35px] pb-[60px]">
      <div className="w-5/6 mx-auto flexCenter flex-col md:flex-row gap-[10px]">
        {serviceData.map((item, index) => (
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: index % 2 === 0 ? -50 : 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            key={index}
            className={`${item.bg} p-5 rounded-md flex-col md:flex-row w-full text-center md:text-left flexCenter gap-[15px] cursor-pointer`}
          >
            <div className="bg-primary-color p-3 md:p-[5px]  rounded-full flexCenter">
              {item.icon}
            </div>
            <div>
              <h3 className="text-primary-color text-[0.9rem] font-[700]">
                {item.title}
              </h3>
              <p className="text-sm text-[#474747]">{item.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
