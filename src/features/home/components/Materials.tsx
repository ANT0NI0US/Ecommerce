import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/UseMediaQuery";
import ExperienceOne from "../../../assets/images/materials-one.png";
import ExperienceTwo from "../../../assets/images/materials-two.png";
import ExperienceThree from "../../../assets/images/materials-three.png";

const Materials = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section className="w-full bg-hero-bg py-[125px]">
      <div
        className={`${
          isAboveMediumScreens ? "flex-row" : "flex-col"
        }  w-full mx-auto flexBetween gap-12 overflow-hidden`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`${
            isAboveMediumScreens ? "" : "w-5/6"
          } text-center pl-0 md:pl-5 md:text-left md:basis-3/5`}
        >
          <p className="text-[#E58411] font-[500]">MATERIALS</p>
          <h2 className="text-primary-color text-3xl md:text-[2.3rem] font-[600] my-2 leading-[48px]">
            Very Serious Materials For Making Furniture
          </h2>
          <p className="text-primary-color leading-[28px]">
            Because Panto was very serious about designing furniture for our
            environment, using a very expensive and famous capital but at a
            reltively low price.
          </p>
        </motion.div>
        <div
          className={`${
            isAboveMediumScreens ? "flex-row" : "flex-col-reverse"
          }  flex items-center gap-[30px] w-full basis-3/4`}
        >
          <div
            className={`${
              isAboveMediumScreens
                ? "flex-col w-[35%] gap-[30px]"
                : "flex-row w-5/6 justify-center gap-[20px] max-h-[250px]"
            }  flex `}
          >
            <img
              className={`${isAboveMediumScreens ? "" : "w-[50%]"} rounded-xl`}
              src={ExperienceTwo}
              alt="experience-image-two"
            />
            <img
              className={`rounded-xl ${isAboveMediumScreens ? "" : "w-[50%]"}`}
              src={ExperienceThree}
              alt="experience-image-three"
            />
          </div>
          <img
            className={`${
              isAboveMediumScreens
                ? "rounded-tl-lg rounded-bl-lg w-[65%]"
                : "rounded-none w-full"
            } `}
            src={ExperienceOne}
            alt="experience-image-one"
          />
        </div>
      </div>
    </section>
  );
};

export default Materials;
