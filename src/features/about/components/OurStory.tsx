import { motion } from "framer-motion";

export default function OurStory() {
  return (
    <section className="flexCenter py-[40px] pb-0 md:py-[80px]">
      <div className="flexBetween mx-auto w-full flex-col overflow-hidden md:flex-row">
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5, duration: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className={`mx-auto w-[90%] space-y-4 pb-[40px] text-center sm:w-5/6 md:w-fit md:basis-3/5 md:px-[30px] md:pb-0 md:text-left`}
        >
          <h2 className="my-2 text-2xl font-extrabold uppercase tracking-widest text-orange-color-light dark:text-orange-color md:text-4xl">
            Our Story
          </h2>
          <p className="leading-[28px]">
            Launched in 2015, Exclusive is South Asia’s premier online shopping
            marketplace with an active presence in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sellers and 300 brands and serves 3 millions customers
            across the region.
          </p>
          <p className="leading-[28px]">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assortment in categories
            ranging from consumer.
          </p>
        </motion.div>
        <div className="w-full overflow-hidden rounded-none md:basis-3/5 md:rounded-bl-lg md:rounded-tl-lg">
          <img
            loading="lazy"
            className={`max-h-full w-full object-cover object-center`}
            src="https://firebasestorage.googleapis.com/v0/b/furniture-ecommerce-841f4.appspot.com/o/siteImages%2FourStory.webp?alt=media&token=a35e7dc3-9ac4-454a-affc-2d5e6ad02c8c"
            alt="our-story"
          />
        </div>
      </div>
    </section>
  );
}
