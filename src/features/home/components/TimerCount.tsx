import useMediaQuery from "@/hooks/UseMediaQuery";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Clock from "@/components/UI/clock/Clock";

const TimerCount = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="w-full bg-primary-color py-[30px]">
      <div
        className={`w-5/6 mx-auto ${
          isAboveMediumScreens
            ? "flex justify-evenly items-center"
            : "flexCenter w-full"
        } gap-12`}
      >
        <div className={`text-center md:text-left  `}>
          <h4 className="text-white text-2xl md:text-[2.5rem] font-[600]">
            Limitied Offers
          </h4>
          <h3 className="text-white font-[500] my-2">Quality Armchair</h3>
          <Clock />
          <motion.button
            aria-label="Go-To-Shop"
            className="mt-7"
            whileTap={{ scale: 1.1 }}
          >
            <Link className="btn btn-timer mt-7 md:mt-11" to="/shop">
              Visit Store
            </Link>
          </motion.button>
        </div>
        {isAboveMediumScreens && (
          <div className="flexCenter">
            <img
              className="w-[70%] h-[70%] object-contain"
              src="https://i.ibb.co/pdG4Ry9/counter-timer-img.webp"
              alt="counter-timer-img"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default TimerCount;
