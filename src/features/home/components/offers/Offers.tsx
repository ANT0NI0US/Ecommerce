import { motion } from "framer-motion";
import Clock from "./Clock";
import Button from "@/ui/Button";
import Container from "@/ui/Container";

export default function Offers() {
  return (
    <section className="w-full overflow-hidden bg-secondary-color-light text-primary-color-light dark:bg-secondary-color dark:text-primary-color md:h-[530px]">
      <div className="flex h-full w-full flex-col-reverse md:flex-row md:items-center md:justify-evenly">
        <div className="h-full w-full basis-1/2">
          <img
            loading="lazy"
            className="h-full w-full"
            src="https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2Foffers.webp?alt=media&token=6499f1e7-b28f-4221-b0c2-3c3d6867b020"
            alt="counter-timer-img"
          />
        </div>
        <Container Styles="flexCenter flex-col md:basis-1/2 space-y-4 py-[80px] md:px-[30px] text-center md:py-0 md:text-left">
          <p className="font-bold">PROMOTION</p>
          <h1 className="text-2xl font-semibold text-orange-color-light dark:text-orange-color md:text-5xl">
            Hurry up! 40% OFF
          </h1>
          <p>Thousands of high tech are waiting for you</p>
          <h2 className="font-medium text-orange-color-light dark:text-orange-color">
            Offer expires in:
          </h2>
          <Clock />
          <motion.div
            className="mx-auto w-[150px] md:mx-0"
            whileTap={{ scale: 1.1 }}
          >
            <Button variation="secondary" ArialLabel="Shopping Now" To="/shop">
              SHOP NOW
            </Button>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
