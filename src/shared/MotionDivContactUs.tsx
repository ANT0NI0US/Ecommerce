import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  tailwindClass?: string;
  delay?: number;
  y?: number;
}

const MotionDivContactUs = ({ children, tailwindClass, delay, y }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.9 }}
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, x: 0 },
      }}
      className={tailwindClass}
    >
      {children}
    </motion.div>
  );
};

export default MotionDivContactUs;
