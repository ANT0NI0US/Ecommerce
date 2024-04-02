import useMediaQuery from "@/hooks/UseMediaQuery";
import Experience from "../../../assets/images/experience.png";
import { motion } from "framer-motion";

const Experiences = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="w-full bg-hero-bg py-[125px]">
      <div
        className={`${
          isAboveMediumScreens ? "flex-row" : "flex-col-reverse"
        }  w-full mx-auto flexBetween gap-12 overflow-hidden`}
      >
        <img
          className={`${
            isAboveMediumScreens
              ? "rounded-tr-lg rounded-br-lg"
              : "rounded-none"
          } basis-3/5 w-full`}
          src={Experience}
          alt="experience-image"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`${
            isAboveMediumScreens ? "" : "w-5/6"
          } text-center md:text-left md:basis-3/5`}
        >
          <p className="text-[#E58411] font-[500]">EXPERIENCES</p>
          <h2 className="text-primary-color text-3xl md:text-[2.3rem] font-[600] my-2 leading-[48px]">
            We Provide You The Best Experience
          </h2>
          <p className="text-primary-color leading-[28px]">
            You don't have worry about the result because all of these interios
            are made by people who are professionals in their fields with an
            elegant and lucurious style and with premimum quality materilas.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Experiences;
