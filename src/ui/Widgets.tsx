import { motion } from "framer-motion";
import { WidgetsProps } from "@/utils/types";
import GridContainer from "@/ui/GridContainer";

export default function Widgets({ widgetsData, type = "color" }: WidgetsProps) {
  return (
    <GridContainer Styles="xs:!grid-cols-[repeat(auto-fill,minmax(300px,1fr))] !gap-[10px]">
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
          className={`flex ${type === "color" ? "odd:bg-card-bg-01-light even:bg-card-bg-02-light odd:dark:bg-card-bg-02 even:dark:bg-card-bg-01 md:flex-row md:items-start md:text-left" : "border"} min-h-[125px] w-full flex-col items-center gap-[15px] rounded-md p-5 text-center`}
        >
          <div
            className={`${type === "color" ? "md:text-3xl" : "md:text-5xl"} flexCenter rounded-full bg-primary-color-light p-3 text-4xl text-light-color dark:bg-main-color dark:text-light-color md:p-[10px]`}
          >
            {widget.icon}
          </div>
          <div className="flex-1">
            <h3
              className={`${type === "color" ? "text-lg font-bold md:text-[0.9rem]" : "text-3xl font-extrabold md:text-4xl"} text-primary-color-light dark:text-main-color`}
            >
              {widget.title}
            </h3>
            <p
              className={`text-base ${type === "color" ? "text-light-color dark:text-light-color md:text-sm" : "md:text-lg"}`}
            >
              {widget.description}
            </p>
          </div>
        </motion.div>
      ))}
    </GridContainer>
  );
}
