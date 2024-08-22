import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "@/ui/Button";

const Year = new Date().getFullYear();

export default function Banner() {
  const navigate = useNavigate();
  return (
    <section className="w-full bg-hero-bg pb-10 pt-[80px] md:h-screen md:pb-0">
      <div className={`flexBetween mx-auto w-5/6 flex-col gap-12 md:flex-row`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.3, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`mt-10 space-y-2 text-center text-primary-color md:mt-0 md:basis-3/5 md:text-left`}
        >
          <p className="font-medium ">Trending Product in {Year}</p>
          <h2 className="text-2xl font-semibold md:text-4xl">
            Make your Interior More Minimalistic & Modern
          </h2>
          <p className="leading-[28px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
            perspiciatis natus totam eaque distinctio esse a. Beatae repudiandae
            dolorum accusantium.
          </p>
          <motion.div whileTap={{ scale: 1.1 }} className="w-full md:w-[150px]">
            <Button ArialLabel="Go-To-Shop" onClick={() => navigate("/shop")}>
              SHOP NOW
            </Button>
          </motion.div>
        </motion.div>

        <img
          className="basis-3/5"
          src="https://i.ibb.co/sgv9Q0N/hero-img.webp"
          alt="hero-image"
        />
      </div>
    </section>
  );
}
