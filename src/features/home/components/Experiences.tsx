import { motion } from "framer-motion";
import Experience from "../../../assets/images/experience.png";

export default function Experiences() {
  return (
    <section className="w-full bg-hero-bg pb-0 pt-[125px] md:h-[calc(100vh-80px)] md:pb-[125px]">
      <div
        className={`flexBetween mx-auto w-full flex-col-reverse gap-12 overflow-hidden md:flex-row`}
      >
        <img
          className={`max-h-full w-full basis-3/5 rounded-none object-cover object-center md:rounded-br-lg md:rounded-tr-lg`}
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
          className={`w-5/6 text-center md:w-fit md:basis-3/5 md:text-left`}
        >
          <p className="font-medium text-[#E58411]">EXPERIENCES</p>
          <h2 className="my-2 text-2xl font-semibold text-primary-color md:text-4xl">
            We Provide You The Best Experience
          </h2>
          <p className="leading-[28px] text-primary-color">
            You don't have worry about the result because all of these interios
            are made by people who are professionals in their fields with an
            elegant and lucurious style and with premimum quality materilas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
