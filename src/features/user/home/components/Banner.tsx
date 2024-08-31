import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "@/ui/Button";

const Year = new Date().getFullYear();

export default function Banner() {
  const navigate = useNavigate();
  return (
    <section className="flexCenter text-primary-color-light w-full bg-light-color pb-[80px] pt-[160px] dark:bg-main-color dark:text-primary-color md:h-screen md:pb-0">
      <div
        className={`flexBetween mx-auto h-full w-[90%] flex-col gap-12 sm:w-5/6 md:flex-row`}
      >
        {/* BANNER TEXT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`space-y-2 text-center md:mt-0 md:basis-3/5 md:space-y-3 md:text-left`}
        >
          <p className="font-medium ">Trending Product in {Year}</p>
          <h2 className="text-orange-color-light text-2xl font-semibold dark:text-orange-color md:text-4xl">
            Make your Interior More Minimalistic & Modern
          </h2>
          <p className="leading-[28px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            perspiciatis natus totam eaque distinctio esse a. Beatae repudiandae
            dolorum accusantium.
          </p>
          <motion.div
            whileTap={{ scale: 1.1 }}
            className="mx-auto w-[150px] md:mx-0"
          >
            <Button ArialLabel="Go-To-Shop" onClick={() => navigate("/shop")}>
              SHOP NOW
            </Button>
          </motion.div>
        </motion.div>

        {/* BANNER IMAGE */}
        <img
          className="basis-3/5"
          src="https://i.ibb.co/sgv9Q0N/hero-img.webp"
          alt="hero-image"
        />
      </div>
    </section>
  );
}
