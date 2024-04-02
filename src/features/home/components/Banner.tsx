import useMediaQuery from "@/hooks/UseMediaQuery";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Year = new Date().getFullYear();

const Banner = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="w-full bg-hero-bg py-[125px]">
      <div
        className={`${
          isAboveMediumScreens ? "flex-row" : "flex-col"
        }  w-5/6 mx-auto flexBetween gap-12`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`text-center md:text-left md:basis-3/5`}
        >
          <p className="text-primary-color font-[500]">
            Trending Product in {Year}
          </p>
          <h2 className="text-primary-color text-3xl md:text-[2.3rem] font-[600] my-2 leading-[48px]">
            Make your Interior More Minimalistic & Modern
          </h2>
          <p className="text-primary-color leading-[28px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            perspiciatis natus totam eaque distinctio esse a. Beatae repudiandae
            dolorum accusantium.
          </p>
          <motion.button
            aria-label="Go-To-Shop"
            className="mt-7"
            whileTap={{ scale: 1.1 }}
          >
            <Link className="btn btn-banner mt-7 md:mt-11" to="/shop">
              SHOP NOW
            </Link>
          </motion.button>
        </motion.div>

        <img
          className="basis-3/5"
          src="https://i.ibb.co/sgv9Q0N/hero-img.webp"
          alt="hero-image"
        />
      </div>
    </section>
  );
};

export default Banner;
