import { motion } from "framer-motion";
import ExperienceOne from "@/assets/images/materials-one.png";
import ExperienceTwo from "@/assets/images/materials-two.png";
import ExperienceThree from "@/assets/images/materials-three.png";

export default function Materials() {
  return (
    <section className="flexCenter w-full bg-light-color pb-0 pt-[80px] text-primary-color-light dark:bg-main-color dark:text-primary-color md:h-[calc(100vh-80px)] md:pb-[80px]">
      <div className="flexBetween mx-auto w-full flex-col overflow-hidden md:flex-row">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-[90%] space-y-4 pb-[80px] text-center sm:w-5/6 md:w-fit md:basis-3/5 md:px-[30px] md:pb-0 md:text-left"
        >
          <p className="font-[500]">MATERIALS</p>
          <h2 className="my-2 text-2xl font-semibold text-orange-color-light dark:text-orange-color md:text-4xl">
            Very Serious Materials For Making Furniture
          </h2>
          <p className="leading-[28px]">
            Because Panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            reltively low price.
          </p>
        </motion.div>
        <div className="flex w-full basis-3/4 flex-col-reverse items-center md:flex-row md:gap-[30px]">
          <div className="hidden gap-[30px] md:flex md:w-[35%] md:flex-col">
            <img
              className="h-[250px] rounded-xl"
              src={ExperienceTwo}
              alt="experience-image-two"
            />
            <img
              className="h-[200px] rounded-xl"
              src={ExperienceThree}
              alt="experience-image-three"
            />
          </div>
          <img
            className="w-full rounded-none rounded-bl-lg rounded-tl-lg md:w-[65%]"
            src={ExperienceOne}
            alt="experience-image-one"
          />
        </div>
      </div>
    </section>
  );
}
