import { WidgetsProps } from "@/utils/types";
import { motion } from "framer-motion";

export default function Widgets({ widgetsData }: WidgetsProps) {
  return (
    <div className="flexCenter mx-auto w-[90%] flex-col gap-[10px] md:w-5/6 md:flex-row">
      {widgetsData?.map((widget, index) => (
        <motion.div
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: index % 2 === 0 ? -50 : 50 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.05 }}
          key={index}
          className={`flexCenter min-h-[125px] w-full flex-col gap-[15px] rounded-md p-5 text-center odd:bg-card-bg-01-light even:bg-card-bg-02-light odd:dark:bg-card-bg-02 even:dark:bg-card-bg-01 md:flex-row md:text-left`}
        >
          <div className="flexCenter rounded-full bg-primary-color-light p-3 dark:bg-main-color md:p-[10px]">
            {widget.icon}
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-primary-color-light dark:text-main-color md:text-[0.9rem]">
              {widget.title}
            </h3>
            <p className="text-base text-light-color dark:text-light-color md:text-sm">
              {widget.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
