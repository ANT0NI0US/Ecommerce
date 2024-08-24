import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Clock from "./Clock";
import Button from "@/ui/Button";
import offers from "@/assets/images/offers.png";

export default function Offers() {
  const navigate = useNavigate();
  return (
    <section className="w-full overflow-hidden bg-secondary-color md:h-[530px]">
      <div className="flex h-full w-full flex-col-reverse md:flex-row md:items-center md:justify-evenly">
        <div className="h-full w-full basis-1/2">
          <img className="h-full w-full" src={offers} alt="counter-timer-img" />
        </div>
        <div className="mx-auto w-[90%] basis-1/2 space-y-4 py-[80px] text-center sm:w-5/6 md:px-[30px] md:py-0 md:text-left">
          <p className="font-bold">PROMOTION</p>
          <h1 className="text-2xl font-semibold text-light-color md:text-5xl">
            Hurry up! 40% OFF
          </h1>
          <p>Thousands of high tech are waiting for you</p>
          <h2 className="font-medium text-light-color">Offer expires in:</h2>
          <Clock />
          <motion.div className="w-full md:w-[150px]" whileTap={{ scale: 1.1 }}>
            <Button
              variation="primary"
              ArialLabel="Go-To-Shop"
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
