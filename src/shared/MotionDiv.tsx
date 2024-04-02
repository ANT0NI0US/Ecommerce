import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  tailwindClass?: string;
  delay?: number;
  x?: number;
}

const MotionDiv = ({ children, tailwindClass, delay, x }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay, duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, x },
        visible: { opacity: 1, x: 0 },
      }}
      className={tailwindClass}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
